"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Reveal from "./components/Reveal";
const navLinks = [
  { label: "ビジョン", href: "#vision" },
  { label: "サービス", href: "#services" },
  { label: "営業の流れ", href: "#workflow" },
  { label: "支援イメージ", href: "#voice" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

const services = [
  {
    number: "01",
    id: "sales-support",
    title: "営業支援",
    text: "新規開拓から商談創出まで、事業成長に必要な営業活動を設計し、実行まで伴走します。",
  },
  {
    number: "02",
    id: "inside-sales",
    title: "インサイドセールス",
    text: "顧客との最初の接点を丁寧に設計し、見込み顧客との関係構築を支援します。",
  },
  {
    number: "03",
    id: "dx-saas",
    title: "DX・SaaS支援",
    text: "SaaSやデジタルツールの導入・活用を通じて、営業組織の生産性向上を支えます。",
  },
];
const values = [
  {
    number: "01",
    title: "誠実",
    text: "事実を正直に伝え、できることとできないことを明確に。長く続く信頼関係を第一に考えます。",
  },
  {
    number: "02",
    title: "伴走",
    text: "立ち上げから改善まで、御社のチームの一員として並走し、成果に向けて一緒に考え抜きます。",
  },
  {
    number: "03",
    title: "むすび",
    text: "人と人、企業と企業をつなぐ結節点として、その先の事業成長まで見据えて関わります。",
  },
];
const workflow = [
  {
    number: "01",
    title: "ヒアリング",
    text: "現状の営業課題・目標・ターゲットを丁寧に整理します。",
  },
  {
    number: "02",
    title: "ターゲット設計",
    text: "業種・企業規模・決裁者など最適なアプローチ先を設計します。",
  },
  {
    number: "03",
    title: "リスト・スクリプト設計",
    text: "成果につながるリストとトーク設計を行います。",
  },
  {
    number: "04",
    title: "インサイドセールス",
    text: "架電・改善を繰り返しながら商談創出を最大化します。",
  },
  {
    number: "05",
    title: "分析・改善提案",
    text: "結果を可視化し、次につながる改善策をご提案します。",
  },
];

const supportImages = [
  {
    number: "01",
    title: "営業体制の立ち上げ",
    challenge: "新規開拓の進め方や営業体制を整理したい",
    support: "ターゲット設計、リスト作成、トーク設計から実行まで伴走",
    goal: "検証と改善を継続できる営業体制へ",
  },
  {
    number: "02",
    title: "商談機会の創出",
    challenge: "見込み顧客との新たな接点を増やしたい",
    support: "商材理解と市場分析を踏まえ、最適なアプローチを設計・実行",
    goal: "将来の商談につながる接点を着実に積み重ねる",
  },
  {
    number: "03",
    title: "インサイドセールス支援",
    challenge: "社内の営業リソースやノウハウが不足している",
    support: "架電、結果分析、改善提案まで一気通貫で支援",
    goal: "再現性のある営業活動と改善サイクルを構築",
  },
];

type FormValues = {
  company: string;
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialFormValues: FormValues = {
  company: "",
  name: "",
  email: "",
  message: "",
  privacy: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateForm = (values: FormValues) => {
    const errors: FormErrors = {};

    if (!values.company.trim()) errors.company = "会社名を入力してください。";
    if (!values.name.trim()) errors.name = "お名前を入力してください。";
    if (!values.email.trim()) {
      errors.email = "メールアドレスを入力してください。";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "メールアドレスの形式を確認してください。";
    }
    if (!values.message.trim()) errors.message = "お問い合わせ内容を入力してください。";
    if (!values.privacy) errors.privacy = "個人情報の取扱いに同意してください。";

    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formStatus === "submitting") return;

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormStatus("idle");
      return;
    }

    setFormStatus("submitting");
    window.setTimeout(() => {
      setFormStatus("error");
    }, 400);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 text-white backdrop-blur-xl transition-colors duration-500">
<div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center justify-start px-6 md:h-24 md:justify-end md:px-14 lg:px-20">
<a
  href="#"
  className="block transition-opacity duration-500 mix-blend-difference hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:absolute md:left-8 lg:left-10"
  aria-label="MUSUBI"
>
<Image
  src="/images/logo-2.2.svg"
  alt="MUSUBI"
  width={595}
  height={595}
  className="h-14 w-auto invert md:h-20"
/>
</a>

  <nav className="hidden items-center gap-6 text-[10px] lg:gap-8 lg:text-[11px] font-semibold tracking-[0.22em] text-white/85 md:flex">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="transition-all duration-500 hover:text-white hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {link.label}
      </a>
    ))}
  </nav>
</div>
</header>

      <section className="relative h-screen min-h-[760px] overflow-hidden bg-black">
<>
  {/* スマホ用 */}
  <Image
    src="/images/hero-mobile.png"
    alt="MUSUBI Hero"
    fill
    priority
    className="block object-cover object-[58%_center] md:hidden"
  />

  {/* PC・タブレット用 */}
  <Image
    src="/images/hero.png"
    alt="MUSUBI Hero"
    fill
    priority
    className="hidden object-cover object-center md:block"
  />
</>
<div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center transition-all md:flex">
  <Image
  src="/images/logo-2.2.svg"
  alt=""
  width={595}
  height={595}
  className="w-[58vw] max-w-[250px] opacity-20 transition-all duration-700 drop-shadow-[0_0_36px_rgba(255,255,255,0.72)] md:w-[46vw] md:min-w-[420px] md:max-w-[660px] md:translate-x-3 md:opacity-30 md:drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
/>
</div>
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[13px] font-semibold tracking-[0.45em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,.65)] md:text-neutral-900 md:drop-shadow-[0_1px_8px_rgba(255,255,255,.9)]">
            SCROLL
          </span>

          <div className="mt-4 h-16 w-px bg-gradient-to-b from-white to-transparent md:from-neutral-900" />
        </div>
      </section>

<section id="vision" className="bg-white px-8 py-32 md:px-14 md:py-48 lg:px-20">
  <Reveal>
    <div className="mx-auto max-w-7xl">
      <p className="mb-12 text-xs tracking-[0.65em] text-neutral-400">OUR VISION</p>

      <div className="grid gap-24 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <h2 className="text-[42px] font-light leading-[1.45] tracking-[0.04em] md:text-[64px]">
  AIが効率を極めるほど、
  <br />
  最後に人を動かすのは
  <br />
  <span className="mt-0 block text-[1.15em] font-semibold tracking-[0.01em]">
    人の声。
  </span>
</h2>

<div className="mt-6 max-w-[720px] text-[15px] leading-[2.35] tracking-[0.055em] text-neutral-600">
  <p>
    AIが情報を整理し、効率を極限まで高める時代。
  </p>

  <p className="mt-0">
    だからこそ、私たちは台本を読むだけの架電はしません。
    最後に人を動かすのは、声であり、感情であり、相手を想う対話だと信じています。
    営業とは、商品を届けることではなく、まだ出会っていない企業と企業、人と人をつなぎ、新しい可能性を生み出すこと。
  </p>

  <p className="mt-5">
    私たちは、AIの力で営業の無駄を減らし、人だからこそ生み出せる温度あるコミュニケーションに集中します。
  </p>

  <p className="mt-0">
    その一つひとつの対話が、新しい出会いを生み、事業の成長へとつながっていく。
    それが、MUSUBIのインサイドセールスです。
  </p>
</div>
        </div>

        <div className="space-y-12 border-l border-black/10 pl-10">
          {values.map((item) => (
            <div key={item.number} className="pt-3">
              <p className="font-serif text-2xl tracking-[0.12em] text-neutral-400">{item.number}</p>
              <h3 className="mt-4 text-xl font-light tracking-[0.18em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-[2] tracking-[0.05em] text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
</section>
<section id="workflow" className="bg-white px-8 py-32 md:px-14 md:py-48 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-24 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="mb-12 text-xs tracking-[0.65em] text-neutral-400">
            WORK FLOW
          </p>
          <h2 className="text-[42px] font-light leading-[1.45] tracking-[0.1em] md:text-[56px]">
  営業成果までの流れ
</h2>
        </div>

        <p className="ml-3 max-w-[640px] text-sm leading-[2.35] tracking-[0.055em] text-neutral-600">
          課題の整理から、ターゲット設計、実行、改善提案まで。
          一つひとつの工程を丁寧に設計し、成果につながる営業活動へと整えます。
        </p>
      </div>
    </Reveal>

    <div className="border-t border-black/10">
      {workflow.map((item, index) => (
        <Reveal key={item.number} delay={(index + 1) as 1 | 2 | 3}>
          <div className="group grid gap-8 border-b border-black/10 py-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-black/30 md:grid-cols-[0.35fr_0.65fr_1fr] md:items-start">
  <p className="font-serif text-3xl tracking-[0.12em] text-neutral-300 transition-colors duration-700 group-hover:text-neutral-900">
    {item.number}
  </p>

  <h3 className="text-2xl font-light tracking-[0.16em] text-neutral-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
    {item.title}
  </h3>

  <p className="max-w-[620px] text-sm leading-[2.2] tracking-[0.1em] text-neutral-600 transition-colors duration-700 group-hover:text-neutral-800">
    {item.text}
  </p>
</div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
<section id="services" className="bg-neutral-950 px-8 py-36 text-white md:px-14 md:py-48 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-24 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="mb-12 text-xs tracking-[0.65em] text-white/55">
            SERVICES
          </p>

          <h2 className="text-[42px] font-light leading-[1.45] tracking-[0.12em] md:text-[56px]">
            事業内容
          </h2>
        </div>

        <div className="flex items-end">
          <p className="ml-9 max-w-[640px] text-sm leading-[2.35] tracking-[0.055em] text-white/72">
            AIを徹底活用したインサイドセールス支援。
            架電代行にとどまらず、商材理解・市場分析・ターゲット選定・
            リスト作成・訴求設計・スクリプト作成・架電実行・
            結果分析・改善提案までを一気通貫でサポートします。
            効率と成果、その両方を追求する営業パートナーです。
          </p>
        </div>
      </div>
    </Reveal>

    <div className="mt-28 border-t border-white/15">
      {services.map((service, index) => (
        <Reveal key={service.number} delay={(index + 1) as 1 | 2 | 3}>
          <article id={`service-${service.id}`} className="scroll-mt-28 group relative grid gap-8 border-b border-white/15 py-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/35 md:grid-cols-[0.35fr_0.9fr_1.15fr]">
            <p className="font-serif text-4xl tracking-[0.12em] text-white/55 transition-colors duration-700 group-hover:text-white/85">
              {service.number}
            </p>

            <h3 className="text-2xl font-light tracking-[0.16em] text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
              {service.title}
            </h3>

            <p className="max-w-[680px] text-sm leading-[2.2] tracking-[0.05em] text-white/72 transition-colors duration-700 group-hover:text-white/90">
              {service.text}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      <section id="voice" className="bg-[#f7f6f3] px-8 py-32 text-neutral-950 md:px-14 md:py-44 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs font-semibold tracking-[0.45em] text-neutral-400">
              SUPPORT IMAGE
            </p>
            <h2 className="text-[30px] font-light tracking-[0.1em] md:text-[42px]">
              支援イメージ
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportImages.map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[420px] rounded-2xl border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] md:p-10"
              >
                <div className="mb-10 flex items-start justify-between">
                  <p className="text-[11px] font-semibold tracking-[0.35em] text-neutral-400">
                    IMAGE {item.number}
                  </p>
                  <p className="text-[56px] font-light leading-none text-neutral-200 transition-colors duration-500 group-hover:text-neutral-800">
                    {item.number}
                  </p>
                </div>

                <h3 className="mb-8 text-[19px] font-light leading-[1.9] tracking-[0.04em] text-neutral-950">
                  {item.title}
                </h3>

                <div className="space-y-5 border-t border-black/10 pt-6 text-sm leading-[2] tracking-[0.04em] text-neutral-600">
                  <p>
                    <span className="mb-1 block text-[11px] font-semibold tracking-[0.18em] text-neutral-400">
                      課題
                    </span>
                    {item.challenge}
                  </p>
                  <p>
                    <span className="mb-1 block text-[11px] font-semibold tracking-[0.18em] text-neutral-400">
                      支援内容
                    </span>
                    {item.support}
                  </p>
                  <p>
                    <span className="mb-1 block text-[11px] font-semibold tracking-[0.18em] text-neutral-400">
                      目指す状態
                    </span>
                    {item.goal}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<section id="company" className="bg-white px-8 py-32 md:px-14 md:py-48 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <p className="mb-12 text-xs tracking-[0.65em] text-neutral-400">COMPANY</p>

    <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-start">
      <div>
        <h2 className="text-[34px] font-light leading-[1.6] tracking-[0.12em] md:text-[46px]">
          会社概要
        </h2>
<div className="mt-1">
  <Image
    src="/images/logo-1.2.svg"
    alt="株式会社 糸喜-MUSUBI"
    width={595}
    height={595}
    className="ml-6 mt-5 w-[42vw] max-w-[180px] md:mt-10 md:w-[238px] md:max-w-none md:-translate-x-[19px]"
  />
</div>
      </div>

      <div className="border-t border-black/10">
        {[
          ["会社名", "株式会社 糸喜-MUSUBI"],
          ["代表者", "横山 竜之介"],
          ["設立", "2017年4月4日"],
          ["資本金", "1,500,000円"],
          ["所在地", "〒152-0023 東京都目黒区八雲1-1-5"],
          ["電話番号", "050-3591-0222"],
          ["メール", "biz@musubi-44.com"],
          ["事業内容", "営業支援 / インサイドセールス / DX・SaaS支援"],
        ].map(([label, value]) => (
          <div
  key={label}
  className="group grid gap-3 border-b border-black/10 py-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-black/30 md:grid-cols-[180px_1fr]"
>
  <p className="text-xs tracking-[0.22em] text-neutral-400 transition-colors duration-700 group-hover:text-neutral-600">
    {label}
  </p>

  <p className="text-sm leading-[1.9] tracking-[0.05em] text-neutral-700 transition-all duration-700 group-hover:translate-x-1">
    {value}
  </p>
</div>
        ))}
      </div>
    </div>
  </div>
</section>

     <section id="contact" className="relative overflow-hidden bg-black px-8 py-28 text-white md:px-14 md:py-40 lg:px-20">
  
  <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-start">
    <div>
      <p className="mb-8 text-xs font-semibold tracking-[0.55em] text-white/35">CONTACT</p>

      <h2 className="text-[32px] font-light leading-[1.6] tracking-[0.08em] md:text-[44px]">
        その一件の電話から、
        <br />
        商談を結ぶ。
      </h2>

      <p className="mt-8 max-w-xl text-sm leading-[2.2] tracking-[0.06em] text-white/60">
        貴社の営業課題に合わせて、最適な進め方をご提案します。
        <br />
        まずはお気軽にご相談ください。
      </p>

      <div className="mt-12 space-y-5 text-sm tracking-[0.06em] text-white/70">
<a
  href="tel:05035910222"
  className="flex items-center gap-4 transition-colors duration-500 hover:text-white"
>
  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.18a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  <span>050-3591-0222</span>
</a>

        <a
  href="mailto:biz@musubi-44.com"
  className="flex items-center gap-4 transition-colors duration-500 hover:text-white"
>
  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  <span>biz@musubi-44.com</span>
</a>
      </div>
    </div>

    <form className="bg-white p-8 text-black shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-10" onSubmit={handleSubmit} noValidate>
      <h3 className="text-2xl font-light tracking-[0.08em]">お問い合わせ</h3>
      <p className="mt-3 text-xs leading-[1.9] tracking-[0.06em] text-neutral-500">
        必要事項をご記入のうえ送信してください。
      </p>
      <p className="mt-2 text-[11px] leading-[1.8] tracking-[0.05em] text-neutral-500">
        <span className="font-semibold text-neutral-900">*</span> は必須項目です。送信先：biz@musubi-44.com
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label className="block text-xs tracking-[0.08em] text-neutral-600" htmlFor="company">
            会社名 <span className="font-semibold text-neutral-900" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            value={formValues.company}
            onChange={(event) => setFormValues((values) => ({ ...values, company: event.target.value }))}
            className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black aria-[invalid=true]:border-red-600"
            placeholder="株式会社〇〇"
            aria-invalid={Boolean(formErrors.company)}
            aria-describedby={formErrors.company ? "company-error" : undefined}
            required
          />
          {formErrors.company ? (
            <p id="company-error" className="mt-2 text-xs leading-[1.7] text-red-700">
              {formErrors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-xs tracking-[0.08em] text-neutral-600" htmlFor="name">
            お名前 <span className="font-semibold text-neutral-900" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={formValues.name}
            onChange={(event) => setFormValues((values) => ({ ...values, name: event.target.value }))}
            className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black aria-[invalid=true]:border-red-600"
            placeholder="山田 太郎"
            aria-invalid={Boolean(formErrors.name)}
            aria-describedby={formErrors.name ? "name-error" : undefined}
            required
          />
          {formErrors.name ? (
            <p id="name-error" className="mt-2 text-xs leading-[1.7] text-red-700">
              {formErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-xs tracking-[0.08em] text-neutral-600" htmlFor="email">
            メールアドレス <span className="font-semibold text-neutral-900" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={(event) => setFormValues((values) => ({ ...values, email: event.target.value }))}
            className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black aria-[invalid=true]:border-red-600"
            placeholder="taro@example.com"
            aria-invalid={Boolean(formErrors.email)}
            aria-describedby={formErrors.email ? "email-error" : undefined}
            required
          />
          {formErrors.email ? (
            <p id="email-error" className="mt-2 text-xs leading-[1.7] text-red-700">
              {formErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-xs tracking-[0.08em] text-neutral-600" htmlFor="message">
            お問い合わせ内容 <span className="font-semibold text-neutral-900" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={(event) => setFormValues((values) => ({ ...values, message: event.target.value }))}
            className="mt-2 h-28 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black aria-[invalid=true]:border-red-600"
            placeholder="ご相談内容をご記入ください"
            aria-invalid={Boolean(formErrors.message)}
            aria-describedby={formErrors.message ? "message-error" : undefined}
            required
          />
          {formErrors.message ? (
            <p id="message-error" className="mt-2 text-xs leading-[1.7] text-red-700">
              {formErrors.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="flex items-start gap-3 text-xs leading-[1.9] tracking-[0.06em] text-neutral-600" htmlFor="privacy">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={formValues.privacy}
              onChange={(event) => setFormValues((values) => ({ ...values, privacy: event.target.checked }))}
              className="mt-1 h-4 w-4 border-black/20 accent-black"
              aria-invalid={Boolean(formErrors.privacy)}
              aria-describedby={formErrors.privacy ? "privacy-error" : undefined}
              required
            />
            <span>
              個人情報の取扱いに同意します <span className="font-semibold text-neutral-900" aria-hidden="true">*</span>
            </span>
          </label>
          {formErrors.privacy ? (
            <p id="privacy-error" className="mt-2 text-xs leading-[1.7] text-red-700">
              {formErrors.privacy}
            </p>
          ) : null}
        </div>

        <div aria-live="polite" role="status" className="min-h-10 text-xs leading-[1.8] tracking-[0.05em]">
          {formStatus === "submitting" ? (
            <p className="text-neutral-600">送信中です。完了までこのままお待ちください。</p>
          ) : null}
          {formStatus === "success" ? (
            <p className="text-green-700">送信が完了しました。</p>
          ) : null}
          {formStatus === "error" ? (
            <p className="text-red-700">
              現在の環境ではメール送信サービスが未設定のため送信できません。入力内容は画面上に保持されています。送信機能の有効化には、biz@musubi-44.com 宛に送信するためのメール送信サービスと環境変数の設定が必要です。
            </p>
          ) : null}
        </div>

        <button
  type="submit"
  disabled={formStatus === "submitting"}
  aria-disabled={formStatus === "submitting"}
  className="group mt-4 inline-flex items-center gap-3 bg-black px-8 py-4 text-[12px] font-semibold tracking-[0.18em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-[0_18px_35px_rgba(0,0,0,0.25)] disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:hover:translate-y-0 disabled:hover:shadow-none"
>
  <span>{formStatus === "submitting" ? "送信中" : "送信する"}</span>
  <span className="relative inline-block h-[1px] w-6 bg-white transition-all duration-500 group-hover:w-8">
    <span className="absolute -right-[1px] -top-[3px] h-2 w-2 rotate-45 border-r border-t border-white" />
  </span>
</button>
      </div>
    </form>
  </div>
</section>
<footer className="bg-black px-8 py-16 text-white md:px-14 lg:px-20">
  <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
    <div>
      <a
        href="#"
        className="inline-block text-xs font-semibold tracking-[0.6em] text-white/80 transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="ページ最上部へ戻る"
      >
        MUSUBI
      </a>
      <div className="mt-5 max-w-xs text-xs leading-[2] tracking-[0.08em] text-white/50">
  <p>電話の先にいる「人」と向き合うインサイドセールス。</p>
  <p className="mt-2">人と人をむすび、商談につなぎます。</p>
</div>
    </div>

    <nav aria-label="サービス" className="text-xs tracking-[0.08em]">
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">SERVICE</p>
      <ul className="mt-6 space-y-4 text-white/55">
        {services.map((service) => (
          <li key={service.id}>
            <a
              href={`#service-${service.id}`}
              className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {service.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <nav aria-label="会社情報" className="text-xs tracking-[0.08em]">
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">COMPANY</p>
      <ul className="mt-6 space-y-4 text-white/55">
        <li>
          <a href="#vision" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            ビジョン
          </a>
        </li>
        <li>
          <a href="#workflow" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            営業の流れ
          </a>
        </li>
        <li>
          <a href="#voice" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            支援イメージ
          </a>
        </li>
        <li>
          <a href="#company" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            会社概要
          </a>
        </li>
      </ul>
    </nav>

    <nav aria-label="お問い合わせ" className="text-xs tracking-[0.08em]">
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">CONTACT</p>
      <ul className="mt-6 space-y-4 text-white/55">
        <li>
          <a href="tel:05035910222" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Tel : 050-3591-0222
          </a>
        </li>
        <li>
          <a href="mailto:biz@musubi-44.com" className="transition-colors duration-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Mail : biz@musubi-44.com
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div className="mx-auto flex max-w-7xl flex-col gap-4 pt-8 text-[10px] tracking-[0.12em] text-white/35 md:flex-row md:items-center md:justify-between">
    <p>東京都 / インサイドセールス・テレアポ代行</p>
    <p>© 株式会社 糸喜-MUSUBI</p>
  </div>
</footer>
    </main>
  );
}
