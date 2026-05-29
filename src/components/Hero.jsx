import { Link } from 'react-router-dom'
import TestimonialStack from './TestimonialStack.jsx'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
        <h1 className="text-[clamp(2.6rem,5.6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em]">
          The fellowship that{' '}
          <span className="font-serif-italic font-normal text-accent">
            ends with a venture.
          </span>
          <span className="mt-3 block font-serif-italic text-[clamp(1.4rem,2.4vw,2rem)] font-normal leading-snug text-neutral-600">
            A venture you launch before you graduate.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-neutral-600 lg:mx-0">
          REACT is a 24-month fellowship for postgraduate students who want
          their degree to produce something real. Six impact domains.
          Structured mentorship. You leave with a research paper, a working
          product, and a venture you own.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Link
            to="/apply"
            className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-6 text-[15px] font-semibold text-white shadow-card transition hover:bg-neutral-800"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
            Apply to 2026 Batch
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[15px] font-semibold text-ink transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>

      <div className="relative flex min-h-[24rem] w-full items-center justify-center sm:min-h-[28rem] lg:justify-end">
        <TestimonialStack />
      </div>
    </section>
  )
}
