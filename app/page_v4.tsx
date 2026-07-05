"use client";

import Image from "next/image";
import Reveal from "./components/Reveal";
const navLinks = [
  { label: "思想", href: "#vision" },
  { label: "サービス", href: "#services" },
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
    text: "立ち上げから改善まで、御社のチームの一員として並走。成果に向けて一緒に考え抜きます。",
  },
  {
    number: "03",
    title: "むすび",
    text: "人と人、企業と企業をつなぐ結節点として、その先の事業成長まで見据えて関わります。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed left-0 top-0 z-50 w-full bg-black/20 text-white backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-12">
          <a href="#" className="text-xs font-semibold tracking-[0.55em]">
            MUSUBI
          </a>

          <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.16em] text-white/85 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="MUSUBI Hero"
          fill
          priority
          className="object-cover object-center"
        />



        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[13px] font-semibold tracking-[0.45em] text-neutral-900 drop-shadow-[0_1px_8px_rgba(255,255,255,.9)]">
            SCROLL
          </span>

          <div className="mt-4 h-16 w-px bg-gradient-to-b from-neutral-900 to-transparent" />
        </div>
      </section>

      <section id="vision" className="bg-white px-8 py-28 md:px-12 md:py-36">
        <Reveal>
        <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-[1.08fr_0.92fr] md:items-start">
          <div>
            <p className="mb-8 text-xs tracking-[0.55em] text-neutral-400">OUR VISION</p>

            <h2 className="text-[34px] font-light leading-[1.45] tracking-[0.05em] md:text-[48px]">
              AIが効率を極めるほど、
              <br />
              <br />
              最後に人を動かすのは
              <br />
              <span className="inline-block pt-5 text-[1.35em] font-semibold tracking-[0.02em]">
                人の声。
              </span>
            </h2>

            <div className="mt-12 h-px w-16 bg-black/15" />

            <p className="mt-10 max-w-2xl text-sm leading-[2.2] tracking-[0.06em] text-neutral-600">
              AIが情報を整理し、効率を高める時代。だからこそ最後に人を動かすのは、
              人の声であり、感情であり、相手を想う対話だと私たちは信じています。
              営業とは、ただ商品を届ける仕事ではありません。
              まだ出会っていない企業と企業、人と人の可能性をつなぐ仕事です。
            </p>
          </div>

          <div className="pt-4">
            {values.map((item) => (
              <div key={item.number} className="grid grid-cols-[80px_1fr] border-b border-black/10 py-9">
                <p className="font-serif text-3xl tracking-[0.08em]">{item.number}</p>
                <div>
                  <h3 className="text-xl font-light tracking-[0.14em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-[1.9] tracking-[0.04em] text-neutral-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section id="services" className="bg-neutral-950 px-8 py-28 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs tracking-[0.55em] text-white/35">SERVICES</p>

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <h2 className="text-[32px] font-light leading-[1.6] tracking-[0.08em] md:text-[44px]">
              事業の成長に、
              <br />
              静かに深く伴走する。
            </h2>

            <p className="max-w-2xl text-sm leading-[2.2] tracking-[0.06em] text-white/58">
              私たちは、営業支援・インサイドセールス・DX支援を通じて、
              企業の成長に必要な接点づくりを支援します。
              派手な成果を語るよりも、地に足のついた実行と改善を重ねること。
              その積み重ねが、信頼される営業組織をつくると考えています。
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="border border-white/10 p-8">
                <p className="font-serif text-3xl text-white/45">{service.number}</p>
                <h3 className="mt-12 text-xl font-light tracking-[0.14em]">{service.title}</h3>
                <p className="mt-5 text-sm leading-[2] tracking-[0.04em] text-white/52">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-white px-8 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs tracking-[0.55em] text-neutral-400">COMPANY</p>

          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-[32px] font-light leading-[1.5] tracking-[0.08em] md:text-[44px]">
              株式会社
              <br />
              糸喜-MUSUBI
            </h2>

            <div className="border-t border-black/10">
              {[
["会社名", "株式会社 糸喜-MUSUBI"],
["代表者", "横山 竜之介"],
["設立", "2017年4日4日"],
["資本金", "1,500,000円"],
["所在地", "〒152-0023 東京都目黒区八雲1-1-5"],
["電話番号", "050-3591-0222"],
["メール", "biz@musubi-44.com"],
["事業内容", "営業支援 / インサイドセールス / DX・SaaS支援"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-3 border-b border-black/10 py-6 md:grid-cols-[180px_1fr]">
                  <p className="text-xs tracking-[0.22em] text-neutral-400">{label}</p>
                  <p className="text-sm leading-[1.9] tracking-[0.05em] text-neutral-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-100 px-8 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xs tracking-[0.55em] text-neutral-400">CONTACT</p>

          <h2 className="text-[32px] font-light leading-[1.6] tracking-[0.08em] md:text-[44px]">
            まずは、静かに話すところから。
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-[2.2] tracking-[0.06em] text-neutral-600">
            営業支援、インサイドセールス、DX・SaaS活用について、
            現状の課題や今後の方向性をお聞かせください。
          </p>

          <a
            href="mailto:biz@musubi-44.com"
            className="mt-12 inline-flex border border-black px-10 py-4 text-xs tracking-[0.24em] transition hover:bg-black hover:text-white"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      <footer className="bg-black px-8 py-10 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold tracking-[0.55em]">MUSUBI</p>

          <nav className="flex flex-wrap gap-6 text-xs tracking-widest text-white/45">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
