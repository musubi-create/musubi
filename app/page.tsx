"use client";

import Image from "next/image";
import Reveal from "./components/Reveal";
const navLinks = [
  { label: "ビジョン", href: "#vision" },
  { label: "サービス", href: "#services" },
  { label: "お客様の声", href: "#voice" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "営業支援",
    text: "新規開拓から商談創出まで、事業成長に必要な営業活動を設計し、実行まで伴走します。",
  },
  {
    number: "02",
    title: "インサイドセールス",
    text: "顧客との最初の接点を丁寧に設計し、見込み顧客との関係構築を支援します。",
  },
  {
    number: "03",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/55 text-neutral-950 backdrop-blur-md">
<div className="flex h-20 w-full items-center justify-start px-6 md:justify-between md:px-[95px]">
<a
  href="#"
  className="block transition-opacity duration-500 hover:opacity-60"
  aria-label="MUSUBI"
>
<img
  src="/images/logo-2.2.svg"
  alt="MUSUBI"
  className="h-16 w-auto md:h-33"
/>
</a>

  <nav className="hidden items-center gap-10 text-[11px] font-semibold tracking-[0.22em] text-black md:flex">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="transition-all duration-500 hover:text-black hover:opacity-70"
      >
        {link.label}
      </a>
    ))}
  </nav>
</div>
</header>

      <section className="relative h-screen min-h-[720px] overflow-hidden">
<>
  {/* スマホ用 */}
  <Image
    src="/images/hero-mobile.png"
    alt="MUSUBI Hero"
    fill
    priority
    className="block object-cover md:hidden"
  />

  {/* PC・タブレット用 */}
  <Image
    src="/images/hero.png"
    alt="MUSUBI Hero"
    fill
    priority
    className="hidden object-cover object-center hero-slow-zoom md:block"
  />
</>
<div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center transition-all md:flex">
  <img
  src="/images/logo-2.2.svg"
  alt=""
  className="w-[58vw] max-w-[250px] opacity-18 transition-all duration-800 drop-shadow-[0_0_36px_rgba(255,255,255,0.72)] md:w-[60vw] md:min-w-[600px] md:max-w-[850px] md:opacity-30 md:drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
/>
</div>
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[13px] font-semibold tracking-[0.45em] text-neutral-900 drop-shadow-[0_1px_8px_rgba(255,255,255,.9)]">
            SCROLL
          </span>

          <div className="mt-4 h-16 w-px bg-gradient-to-b from-neutral-900 to-transparent" />
        </div>
      </section>

<section id="vision" className="bg-white px-8 py-32 md:px-12 md:py-44">
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
<section id="workflow" className="bg-white px-8 py-32 md:px-12 md:py-44">
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
<section id="services" className="bg-neutral-950 px-8 py-36 text-white md:px-12 md:py-48">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-24 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="mb-12 text-xs tracking-[0.65em] text-white/35">
            SERVICES
          </p>

          <h2 className="text-[42px] font-light leading-[1.45] tracking-[0.12em] md:text-[56px]">
            事業内容
          </h2>
        </div>

        <div className="flex items-end">
          <p className="ml-9 max-w-[640px] text-sm leading-[2.35] tracking-[0.055em] text-white/58">
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
          <article className="group relative grid gap-8 border-b border-white/15 py-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/35 md:grid-cols-[0.35fr_0.9fr_1.15fr]">
            <p className="font-serif text-4xl tracking-[0.12em] text-white/30 transition-colors duration-700 group-hover:text-white/70">
              {service.number}
            </p>

            <h3 className="text-2xl font-light tracking-[0.16em] text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
              {service.title}
            </h3>

            <p className="max-w-[680px] text-sm leading-[2.2] tracking-[0.05em] text-white/55 transition-colors duration-700 group-hover:text-white/75">
              {service.text}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      <section id="voice" className="bg-[#f7f6f3] px-8 py-32 text-neutral-950 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs font-semibold tracking-[0.45em] text-neutral-400">
              VOICE / CASE
            </p>
            <h2 className="text-[30px] font-light tracking-[0.1em] md:text-[42px]">
              お客様の声・導入事例
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                category: "SaaS・従業員50名",
                result: "アポ獲得率 2.6倍",
                title:
                  "ターゲット再設計とトーク改善により、停滞していたアポ数を回復。",
                comment:
                  "数字だけでなく、断られた理由まで共有してくれるのが心強い。",
              },
              {
                number: "02",
                category: "人材・従業員200名",
                result: "エンプラ商談 月8件",
                title:
                  "決裁者への直アプローチで、接点のなかった大手企業の商談を獲得。",
                comment:
                  "自社では届かなかった層に、丁寧に接点を作ってもらえた。",
              },
              {
                number: "03",
                category: "製造・従業員1,000名",
                result: "稼働準備 2週間",
                title:
                  "IS組織がなくても、短期で安定したアポイント供給体制を構築。",
                comment:
                  "眠っていたリストから商談が生まれたのは驚きだった。",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[420px] rounded-2xl border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] md:p-10"
              >
                <div className="mb-10 flex items-start justify-between">
                  <p className="text-[11px] font-semibold tracking-[0.35em] text-neutral-400">
                    CASE {item.number}
                  </p>
                  <p className="text-[56px] font-light leading-none text-neutral-200 transition-colors duration-500 group-hover:text-neutral-800">
                    {item.number}
                  </p>
                </div>

                <p className="mb-4 text-xs tracking-[0.16em] text-neutral-400">
                  {item.category}
                </p>

                <p className="mb-6 inline-block border-b border-black pb-2 text-sm font-semibold tracking-[0.12em] text-neutral-950">
                  {item.result}
                </p>

                <h3 className="mb-8 text-[19px] font-light leading-[1.9] tracking-[0.04em] text-neutral-950">
                  {item.title}
                </h3>

                <p className="border-t border-black/10 pt-6 text-sm leading-[2.2] tracking-[0.04em] text-neutral-500">
                  「{item.comment}」
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
<section id="company" className="bg-white px-8 py-32 md:px-12 md:py-44">
  <div className="mx-auto max-w-7xl">
    <p className="mb-12 text-xs tracking-[0.65em] text-neutral-400">COMPANY</p>

    <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-start">
      <div>
        <h2 className="text-[34px] font-light leading-[1.6] tracking-[0.12em] md:text-[46px]">
          会社概要
        </h2>
<div className="mt-1">
  <img
    src="/images/logo-1.2.svg"
    alt="株式会社 糸喜-MUSUBI"
    className="mx-auto mt-2 w-[72vw] max-w-[340px] md:mt-20 md:w-[420px] md:max-w-none"
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

     <section id="contact" className="relative overflow-hidden bg-black px-8 py-28 text-white md:px-12 md:py-36">
  
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
      width="13"
      height="13"
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

    <form className="bg-white p-8 text-black shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-10">
      <h3 className="text-2xl font-light tracking-[0.08em]">お問い合わせ</h3>
      <p className="mt-3 text-xs leading-[1.9] tracking-[0.06em] text-neutral-500">
        必要事項をご記入のうえ送信してください。
      </p>

      <div className="mt-8 space-y-5">
        <label className="block text-xs tracking-[0.08em] text-neutral-600">
          会社名
          <input className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none" placeholder="株式会社〇〇" />
        </label>

        <label className="block text-xs tracking-[0.08em] text-neutral-600">
          お名前
          <input className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none" placeholder="山田 太郎" />
        </label>

        <label className="block text-xs tracking-[0.08em] text-neutral-600">
          メールアドレス
          <input className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none" placeholder="taro@example.com" />
        </label>

        <label className="block text-xs tracking-[0.08em] text-neutral-600">
          お問い合わせ内容
          <textarea className="mt-2 h-28 w-full border border-black/15 px-4 py-3 text-sm outline-none" placeholder="ご相談内容をご記入ください" />
        </label>

        <button
  type="submit"
  className="group mt-8 inline-flex items-center gap-3 bg-black px-8 py-4 text-[12px] font-semibold tracking-[0.18em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-[0_18px_35px_rgba(0,0,0,0.25)]"
>
  <span>送信する</span>
  <span className="relative inline-block h-[1px] w-6 bg-white transition-all duration-500 group-hover:w-8">
    <span className="absolute -right-[1px] -top-[3px] h-2 w-2 rotate-45 border-r border-t border-white" />
  </span>
</button>
      </div>
    </form>
  </div>
</section>
<footer className="bg-black px-8 py-16 text-white md:px-12">
  <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
    <div>
      <p className="text-xs font-semibold tracking-[0.6em] text-white/80">MUSUBI</p>
      <div className="mt-5 max-w-xs text-xs leading-[2] tracking-[0.08em] text-white/50">
  <p>電話の先にいる「人」と向き合うインサイドセールス。</p>
  <p className="mt-2">人と人をむすび、商談につなぎます。</p>
</div>
    </div>

    <div>
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">SERVICE</p>
      <ul className="mt-6 space-y-4 text-xs tracking-[0.08em] text-white/55">
        <li>テレアポ代行</li>
        <li>インサイドセールス代行</li>
        <li>リスト・スクリプト設計</li>
      </ul>
    </div>

    <div>
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">COMPANY</p>
      <ul className="mt-6 space-y-4 text-xs tracking-[0.08em] text-white/55">
        <li>ビジョン</li>
        <li>お客様の声</li>
        <li>会社概要</li>
      </ul>
    </div>

    <div>
      <p className="text-[10px] font-semibold tracking-[0.35em] text-white/35">CONTACT</p>
      <div className="mt-6 space-y-4 text-xs tracking-[0.08em] text-white/55">
        <p>Tel : 050-3591-0222</p>
        <p>Mail : biz@musubi-44.com</p>
      </div>
    </div>
  </div>

  <div className="mx-auto flex max-w-7xl flex-col gap-4 pt-8 text-[10px] tracking-[0.12em] text-white/35 md:flex-row md:items-center md:justify-between">
    <p>東京都 / インサイドセールス・テレアポ代行</p>
    <p>© 株式会社 糸喜-MUSUBI</p>
  </div>
</footer>
    </main>
  );
}
