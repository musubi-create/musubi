import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | MUSUBI",
  description: "株式会社 糸喜-MUSUBIのプライバシーポリシーです。",
  alternates: {
    canonical: "/privacy",
  },
};

const policyItems = [
  {
    title: "取得する情報",
    text: "当社は、お問い合わせフォームを通じて、会社名、氏名、メールアドレス、お問い合わせ内容を取得します。",
  },
  {
    title: "利用目的",
    text: "取得した情報は、お問い合わせへの回答、連絡、サービス案内および業務上必要な連絡のために利用します。",
  },
  {
    title: "第三者提供",
    text: "法令に基づく場合などを除き、本人の同意なく個人情報を第三者へ提供しません。",
  },
  {
    title: "安全管理",
    text: "当社は、取得した個人情報について、漏えい、紛失、改ざん等を防ぐため、必要かつ適切な範囲で管理に努めます。",
  },
  {
    title: "開示、訂正、削除等",
    text: "個人情報の開示、訂正、削除等をご希望の場合は、下記のお問い合わせ先までご連絡ください。内容を確認のうえ、適切に対応します。",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] px-8 py-20 text-neutral-950 md:px-14 md:py-28 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex text-[11px] font-semibold tracking-[0.28em] text-neutral-500 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        >
          MUSUBIへ戻る
        </Link>

        <section className="mt-14 rounded-2xl bg-white px-7 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.07)] md:px-12 md:py-14">
          <p className="mb-6 text-xs font-semibold tracking-[0.45em] text-neutral-400">PRIVACY POLICY</p>
          <h1 className="text-[30px] font-light leading-[1.45] tracking-[0.12em] md:text-[42px]">
            プライバシーポリシー
          </h1>

          <div className="mt-10 space-y-8 text-sm leading-[2.1] tracking-[0.05em] text-neutral-600">
            <p>
              株式会社 糸喜-MUSUBI（以下「当社」といいます）は、お問い合わせに際して取得する個人情報を、以下の方針に基づき取り扱います。
            </p>

            {policyItems.map((item) => (
              <section key={item.title} className="border-t border-black/10 pt-7">
                <h2 className="text-[15px] font-semibold tracking-[0.14em] text-neutral-950">{item.title}</h2>
                <p className="mt-3 text-neutral-600">{item.text}</p>
              </section>
            ))}

            <section className="border-t border-black/10 pt-7">
              <h2 className="text-[15px] font-semibold tracking-[0.14em] text-neutral-950">事業者名・お問い合わせ先</h2>
              <div className="mt-3 space-y-1 text-neutral-600">
                <p>事業者名：株式会社 糸喜-MUSUBI</p>
                <p>
                  お問い合わせ先：
                  <a
                    href="mailto:biz@musubi-44.com"
                    className="underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                  >
                    biz@musubi-44.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
