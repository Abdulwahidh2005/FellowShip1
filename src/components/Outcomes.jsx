import { Link } from 'react-router-dom'

const outcomes = [
  {
    label: 'OUTPUT 01',
    phase: 'Researcher Phase',
    title: 'A Publication-Ready Research Paper',
    description:
      'Written to international publication standard. Your field research, your analysis, your argument.',
  },
  {
    label: 'OUTPUT 02',
    phase: 'Engineer Phase',
    title: 'A Working Proof of Concept',
    description:
      'Built and tested with real community members. Something that exists and works.',
  },
  {
    label: 'OUTPUT 03',
    phase: 'Engineer Phase',
    title: 'A User-Tested MVP',
    description:
      'Deployed with real users. Iterated until it works for the people it was made for.',
  },
  {
    label: 'OUTPUT 04',
    phase: 'Engineer Phase',
    title: 'An IP-Documented Innovation',
    description:
      'Documented to patent standard. On record as yours.',
  },
  {
    label: 'OUTPUT 05',
    phase: 'Venture Founder Phase',
    title: 'A Verified Impact Assessment',
    description:
      'What changed, for whom, by how much. Verified by your field partner.',
  },
  {
    label: 'OUTPUT 06',
    phase: 'Venture Founder Phase',
    title: 'A Registered Venture',
    description:
      'A company, social enterprise, or civic initiative. Registered before you graduate.',
  },
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative z-10 bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            What You Leave With
          </p>

          <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-[0.98] text-ink">
            What every REACT fellow graduates with.
          </h2>

          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-neutral-600">
            Six verified outputs. Each one yours before you graduate.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/apply"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#cf4f22]"
            >
              Apply to 2026 Batch
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {outcomes.map((outcome) => (
            <article
              key={outcome.label}
              className="grid gap-5 py-10 sm:grid-cols-[9rem_1fr] lg:py-14"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  {outcome.label}
                </p>
                <span className="mt-5 inline-flex border border-emerald-700/15 bg-emerald-700/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  {outcome.phase}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold leading-tight text-ink sm:text-[1.7rem]">
                  {outcome.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-neutral-600">
                  {outcome.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
