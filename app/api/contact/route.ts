import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

type ContactPayload = {
  company?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  privacy?: unknown;
  website?: unknown;
};

type FieldErrors = Partial<Record<"company" | "name" | "email" | "message" | "privacy", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const normalizeSmtpAddress = (value: string) => {
  const address = value.trim();
  const hasUnsafeCharacter =
    address.includes("\r") || address.includes("\n") || address.includes("<") || address.includes(">");

  if (!emailPattern.test(address) || hasUnsafeCharacter) {
    throw new Error("Invalid SMTP email address environment variable.");
  }

  return address;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const encodeHeader = (value: string) => `=?UTF-8?B?${Buffer.from(value).toString("base64")}?=`;

const normalizeNewlines = (value: string) => value.replace(/\r?\n/g, "\r\n");
const dotStuff = (value: string) => normalizeNewlines(value).replace(/^\./gm, "..");

class SmtpConnection {
  private socket: net.Socket | tls.TLSSocket;
  private buffer = "";

  constructor(socket: net.Socket | tls.TLSSocket) {
    this.socket = socket;
    this.socket.setEncoding("utf8");
  }

  static connect(host: string, port: number, secure: boolean) {
    return new Promise<SmtpConnection>((resolve, reject) => {
      const onConnect = () => {
        socket.off("error", onError);
        resolve(new SmtpConnection(socket));
      };
      const onError = (error: Error) => reject(error);

      const socket = secure
        ? tls.connect({ host, port, servername: host }, onConnect)
        : net.connect({ host, port }, onConnect);
      socket.once("error", onError);
    });
  }

  upgradeToTls(host: string) {
    return new Promise<void>((resolve, reject) => {
      const upgraded = tls.connect({ socket: this.socket, servername: host }, () => {
        this.socket = upgraded;
        this.socket.setEncoding("utf8");
        this.buffer = "";
        resolve();
      });
      upgraded.once("error", reject);
    });
  }

  close() {
    this.socket.end();
  }

  command(command: string, expected: number | number[]) {
    this.socket.write(`${command}\r\n`);
    return this.read(expected);
  }

  read(expected: number | number[]) {
    const expectedCodes = Array.isArray(expected) ? expected : [expected];

    return new Promise<string>((resolve, reject) => {
      const cleanup = () => {
        this.socket.off("data", onData);
        this.socket.off("error", onError);
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const onData = (chunk: string) => {
        this.buffer += chunk;
        const lines = this.buffer.split("\r\n");
        const lastCompleteLine = lines[lines.length - 2];

        if (!lastCompleteLine || !/^\d{3} /.test(lastCompleteLine)) return;

        const response = this.buffer;
        this.buffer = lines[lines.length - 1] ?? "";
        cleanup();

        const code = Number(lastCompleteLine.slice(0, 3));
        if (expectedCodes.includes(code)) {
          resolve(response);
          return;
        }

        reject(new Error(`Unexpected SMTP response: ${response}`));
      };

      this.socket.on("data", onData);
      this.socket.once("error", onError);
    });
  }
}

async function sendSmtpMail({
  company,
  name,
  email,
  message,
}: {
  company: string;
  name: string;
  email: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT?.trim());
  const rawUser = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const rawTo = process.env.CONTACT_TO_EMAIL;

  if (!host || !port || !rawUser || !pass || !rawTo) {
    throw new Error("SMTP environment variables are not configured.");
  }

  const user = normalizeSmtpAddress(rawUser);
  const to = normalizeSmtpAddress(rawTo);

  const subject = "MUSUBI公式サイトからのお問い合わせ";
  const textBody = [
    "MUSUBI公式サイトからお問い合わせがありました。",
    "",
    `会社名: ${company}`,
    `お名前: ${name}`,
    `メールアドレス: ${email}`,
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");
  const htmlBody = `
    <p>MUSUBI公式サイトからお問い合わせがありました。</p>
    <dl>
      <dt>会社名</dt><dd>${escapeHtml(company)}</dd>
      <dt>お名前</dt><dd>${escapeHtml(name)}</dd>
      <dt>メールアドレス</dt><dd>${escapeHtml(email)}</dd>
      <dt>お問い合わせ内容</dt><dd>${escapeHtml(message).replace(/\n/g, "<br />")}</dd>
    </dl>
  `;
  const fromAddress = user;
  const boundary = `musubi-${Date.now().toString(36)}`;
  const rawMessage = [
    `From: ${encodeHeader("MUSUBI公式サイト")} <${fromAddress}>`,
    `To: <${to}>`,
    `Reply-To: ${encodeHeader(name)} <${email}>`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    textBody,
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    htmlBody,
    `--${boundary}--`,
    "",
  ].join("\r\n");

  const secure = port === 465;
  const smtpClientName = "musubi-44.com";
  let smtp: SmtpConnection | undefined;
  let smtpStage = "connect";

  try {
    smtp = await SmtpConnection.connect(host, port, secure);
    smtpStage = "greeting";
    await smtp.read(220);
    smtpStage = "ehlo";
    await smtp.command(`EHLO ${smtpClientName}`, 250);

    if (!secure) {
      smtpStage = "starttls";
      await smtp.command("STARTTLS", 220);
      await smtp.upgradeToTls(host);
      smtpStage = "ehlo-after-starttls";
      await smtp.command(`EHLO ${smtpClientName}`, 250);
    }

    smtpStage = "auth-login";
    await smtp.command("AUTH LOGIN", 334);
    smtpStage = "auth-user";
    await smtp.command(Buffer.from(user).toString("base64"), 334);
    smtpStage = "auth-password";
    await smtp.command(Buffer.from(pass).toString("base64"), 235);
    smtpStage = "mail-from";
    await smtp.command(`MAIL FROM:<${fromAddress}>`, 250);
    smtpStage = "rcpt-to";
    await smtp.command(`RCPT TO:<${to}>`, [250, 251]);
    smtpStage = "data";
    await smtp.command("DATA", 354);
    smtpStage = "message-body";
    await smtp.command(`${dotStuff(rawMessage)}\r\n.`, 250);
    smtpStage = "quit";
    await smtp.command("QUIT", 221).catch(() => undefined);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown SMTP error";
    throw new Error(`SMTP stage "${smtpStage}" failed: ${message}`);
  } finally {
    smtp?.close();
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "送信内容を確認してください。" }, { status: 400 });
  }

  if (getString(payload.website)) {
    return Response.json({ message: "送信を受け付けました。" });
  }

  const company = getString(payload.company);
  const name = getString(payload.name);
  const email = getString(payload.email);
  const message = getString(payload.message);
  const privacy = payload.privacy === true;
  const errors: FieldErrors = {};

  if (!company) errors.company = "会社名を入力してください。";
  if (!name) errors.name = "お名前を入力してください。";
  if (!email) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!emailPattern.test(email)) {
    errors.email = "メールアドレスの形式を確認してください。";
  }
  if (!message) errors.message = "お問い合わせ内容を入力してください。";
  if (!privacy) errors.privacy = "個人情報の取扱いに同意してください。";

  if (Object.keys(errors).length > 0) {
    return Response.json({ message: "入力内容を確認してください。", errors }, { status: 400 });
  }

  try {
    await sendSmtpMail({ company, name, email, message });
    return Response.json({ message: "送信が完了しました。" });
  } catch (error) {
    console.error("Contact SMTP send failed:", error instanceof Error ? error.message : error);
    return Response.json(
      { message: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
