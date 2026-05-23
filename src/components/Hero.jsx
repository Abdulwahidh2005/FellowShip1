import TestimonialStack from './TestimonialStack.jsx'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          MSW · KCLAS, Coimbatore
        </span>

        <h1 className="mt-7 text-[clamp(2.6rem,5.6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em]">
          The only MSW that{' '}
          <span className="font-serif-italic font-normal text-accent">
            ends with a venture.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-neutral-600">
          Two years. One community. One problem that matters. You graduate with
          a research paper, a working product, and a registered venture —
          built entirely within your BU field work hours. Nothing extra.
          Everything different.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#apply"
            className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-6 text-[15px] font-semibold text-white shadow-card transition hover:bg-neutral-800"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
            Apply to 2026 Batch
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[15px] font-semibold text-ink transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            Talk to Our Team
          </a>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <TestimonialStack />
      </div>
    </section>
  )
}
