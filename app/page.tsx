import Reveal from "./components/Reveal";

const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#about", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

const services = [
  {
    number: "01",
    title: "営業支援",
    description:
      "営業戦略の策定からフィールド支援まで、目標達成に向けた実行支援を提供します。商談プロセスの可視化と改善により、チーム全体の生産性向上を実現します。",
  },
  {
    number: "02",
    title: "インサイドセールス",
    description:
      "リード獲得から商談創出まで、インサイドセールスの仕組みづくりと運用を支援します。スクリプト設計、KPI管理、人材育成まで一貫してサポートします。",
  },
  {
    number: "03",
    title: "事業成長支援",
    description:
      "データ分析とプロセス改善により、持続的な売上成長の基盤を構築します。市場機会の特定から実行計画の策定まで、成長フェーズに応じた支援を行います。",
  },
];

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.35em] text-white transition-opacity hover:opacity-70"
          >
            MUSUBI
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="border border-white/30 px-4 py-2 text-xs tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-black"
          >
            相談する
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 pt-16 text-white lg:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[64px_64px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            <p
              className="mb-6 text-xs tracking-[0.4em] text-white/50 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              BUSINESS GROWTH PARTNER
            </p>

            <h1
              className="text-5xl font-light tracking-[0.2em] opacity-0 animate-fade-up sm:text-7xl lg:text-8xl"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              MUSUBI
            </h1>

            <div
              className="mt-8 h-px w-16 origin-left bg-white/40 opacity-0 animate-line-grow"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            />

            <p
              className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 opacity-0 animate-fade-up sm:text-lg lg:text-xl"
              style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
            >
              営業支援・インサイドセールス・事業成長を支援するパートナー
            </p>

            <p
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 opacity-0 animate-fade-up sm:text-base"
              style={{ animationDelay: "0.95s", animationFillMode: "forwards" }}
            >
              戦略と実行を結び、成果へと導く。
              <br className="hidden sm:block" />
              貴社の成長フェーズに合わせた、実践的な支援を提供します。
            </p>

            <div
              className="mt-12 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:items-center"
              style={{ animationDelay: "1.15s", animationFillMode: "forwards" }}
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-xs tracking-widest text-black transition-all hover:bg-white/90"
              >
                サービスを見る
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-xs tracking-widest text-white transition-all hover:border-white hover:bg-white/5"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a
              href="#services"
              aria-label="サービスセクションへスクロール"
              className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
            >
              <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
              <span className="block h-8 w-px animate-pulse bg-white/30" />
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs tracking-[0.4em] text-neutral-400">
                SERVICES
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-wider sm:text-4xl">
                サービス
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                営業組織の立ち上げから既存チームの強化まで、
                貴社の課題に合わせた支援メニューをご用意しています。
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={(index + 1) as 1 | 2 | 3}>
                  <article className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-neutral-950 hover:text-white lg:p-10">
                    <span className="font-mono text-xs tracking-widest text-neutral-300 transition-colors group-hover:text-white/40">
                      {service.number}
                    </span>
                    <h3 className="mt-6 text-xl font-medium tracking-wide">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-500 transition-colors group-hover:text-white/70">
                      {service.description}
                    </p>
                    <div className="mt-8 h-px w-8 bg-neutral-200 transition-all group-hover:w-16 group-hover:bg-white/40" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-neutral-950 px-6 py-24 text-white lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <Reveal>
                <p className="text-xs tracking-[0.4em] text-white/40">ABOUT</p>
                <h2 className="mt-4 text-3xl font-light tracking-wider sm:text-4xl">
                  会社概要
                </h2>
              </Reveal>

              <div className="space-y-8">
                <Reveal delay={1}>
                  <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                    MUSUBIは「結び」の精神のもと、
                    <br className="hidden sm:block" />
                    企業と市場、戦略と実行をつなぐパートナーです。
                  </p>
                </Reveal>
                <Reveal delay={2}>
                  <p className="text-sm leading-relaxed text-white/55 sm:text-base">
                    私たちは、単なる代行ではなく、クライアントの事業成長に真摯に向き合い、共に成果を創出します。
                    現場の声を大切にし、再現性のある仕組みを構築することで、
                    一過性の改善ではなく、持続的な成長を支援します。
                  </p>
                </Reveal>
                <Reveal delay={3}>
                  <dl className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs tracking-widest text-white/40">
                        社名
                      </dt>
                      <dd className="mt-2 text-sm tracking-wide">MUSUBI</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-widest text-white/40">
                        事業内容
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-white/70">
                        営業支援・インサイドセールス支援・事業成長コンサルティング
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-widest text-white/40">
                        ミッション
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-white/70">
                        企業の潜在力を引き出し、持続的な成長を実現する
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-widest text-white/40">
                        バリュー
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-white/70">
                        誠実・実行・共創
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <Reveal>
                <p className="text-xs tracking-[0.4em] text-neutral-400">
                  CONTACT
                </p>
                <h2 className="mt-4 text-3xl font-light tracking-wider sm:text-4xl">
                  お問い合わせ
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-neutral-500 sm:text-base">
                  サービスに関するご相談、お見積もり、協業のご提案など、
                  お気軽にお問い合わせください。
                  内容を確認のうえ、2営業日以内にご返信いたします。
                </p>

                <div className="mt-10 space-y-4">
                  <div>
                    <p className="text-xs tracking-widest text-neutral-400">
                      メール
                    </p>
                    <a
                      href="mailto:info@musubi.co.jp"
                      className="mt-1 inline-block text-sm transition-opacity hover:opacity-60"
                    >
                      info@musubi.co.jp
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-neutral-400">
                      対応時間
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      平日 9:00 – 18:00
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <form className="space-y-6 border border-neutral-200 p-8 lg:p-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest text-neutral-400"
                    >
                      お名前
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full border-b border-neutral-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-neutral-950"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-widest text-neutral-400"
                    >
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full border-b border-neutral-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-neutral-950"
                      placeholder="example@company.co.jp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs tracking-widest text-neutral-400"
                    >
                      会社名
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full border-b border-neutral-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-neutral-950"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-widest text-neutral-400"
                    >
                      お問い合わせ内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none border-b border-neutral-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-neutral-950"
                      placeholder="ご相談内容をご記入ください"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-neutral-950 py-4 text-xs tracking-widest text-white transition-all hover:bg-neutral-800"
                  >
                    送信する
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs tracking-[0.35em] text-neutral-950">MUSUBI</p>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} MUSUBI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
