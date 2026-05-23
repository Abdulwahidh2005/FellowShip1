const outcomes = [
  {
    label: 'OUTPUT 01',
    title: 'A Publication-Ready Research Paper',
    description:
      'Primary field research, your own analysis, your own argument - written to international publication standard. The kind of paper that opens doors to further research, grants, and academic recognition that a standard field placement report never could.',
    semester: 'Semester 1',
  },
  {
    label: 'OUTPUT 02',
    title: 'A Working Proof of Concept',
    description:
      'A physical or digital prototype built and tested with real community members. Not a service design proposal. Not a presentation. Something that exists and that you built with your hands.',
    semester: 'Semester 2',
  },
  {
    label: 'OUTPUT 03',
    title: 'A User-Tested MVP',
    description:
      'A market-ready version of your solution deployed with real users, iterated based on what you observed in the field. Evidence your idea actually works - not just in theory but in practice, with the people it was made for.',
    semester: 'Semester 3',
  },
  {
    label: 'OUTPUT 04',
    title: 'An IP-Documented Innovation',
    description:
      'Your solution documented to the standard required to file a patent. Whether or not you file, the work is on record - and that record belongs to you.',
    semester: 'Semesters 2-3',
  },
  {
    label: 'OUTPUT 05',
    title: 'A Verified Social Impact Report',
    description:
      'What changed, for whom, by how much - verified by your partner NGO, held to the same standard as peer-reviewed impact research. The document every employer, funder, and investor asks for.',
    semester: 'Semester 4',
  },
  {
    label: 'OUTPUT 06',
    title: 'A Registered Entity',
    description:
      'A company or NGO registered during Semester 4. You graduate not just as a social worker but as the founder of something that continues to serve the community you spent two years understanding. This is the credential no other MSW programme in India offers.',
    semester: 'REACT Fellow Track',
  },
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            What You Leave With
          </p>

          <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-[0.98] text-ink">
            Six things most MSW graduates never produce.
          </h2>

          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-neutral-600">
            Not promises. Not aspirations. Specific deliverables - each one
            verified, each one yours.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#apply"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#cf4f22]"
            >
              Apply to the 2026 Batch
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Talk to Our Team
            </a>
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
                  {outcome.semester}
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
