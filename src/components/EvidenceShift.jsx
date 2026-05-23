import { motion } from 'motion/react'

const headline = [
  'Your degree. Your hours.',
  'A completely different outcome.',
]

const paragraphs = [
  "MSW-REACT operates entirely within Bharathiar University's Concurrent Field Work mandate. The academic structure, examination schedule, theory papers, and your MSW degree pathway are unchanged.",
  'What changes is what your field work produces. Instead of placement logs, your field work produces a research paper, a patent-documented innovation, a tested product, and a registered venture.',
  'The hours are the same. The evidence is incomparably stronger.',
]

const italicLine = 'The degree is the same. The person who emerges is not.'

const pairs = [
  {
    standard:
      'Placement logs and observation reports with supervisor signatures.',
    react: 'A publication-ready research paper with primary field data.',
  },
  {
    standard: 'A project proposal or case study presentation.',
    react:
      'A working proof of concept built and tested with real community members.',
  },
  {
    standard: 'A relationship with one NGO for one semester.',
    react:
      'Two years of documented, longitudinal community relationships across four semesters.',
  },
  {
    standard: 'An MSW degree and a field work certificate.',
    react:
      'An MSW degree, a REACT Fellowship certificate, and a registered entity with your name on it.',
  },
]

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const headlineLine = {
  hidden: { y: '100%', rotateX: -45, opacity: 0 },
  show: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const bodyContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const bodyItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const rowsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const rowItem = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const standardCell = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 0.85,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const reactCell = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.25 },
  },
}

const arrowDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut', delay: 0.55 },
  },
}

export default function EvidenceShift() {
  return (
    <section id="evidence-shift" className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(226,91,42,0.06),transparent_55%)]"
      />

      <div
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
        style={{ perspective: '1000px' }}
      >
        <motion.h2
          className="max-w-5xl font-serif text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[1.05] text-ink"
          variants={headlineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {headline.map((line) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span variants={headlineLine} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16">
          {/* LEFT — narrative + italic + CTA */}
          <motion.div
            variants={bodyContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={bodyItem}
                className={`text-[16.5px] leading-[1.75] text-[#5b4d3f] ${
                  i > 0 ? 'mt-6' : ''
                }`}
              >
                {p}
              </motion.p>
            ))}

            <motion.p
              variants={bodyItem}
              className="relative mt-10 inline-block font-serif-italic text-[1.2rem] font-semibold text-ink"
            >
              {italicLine}
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              />
            </motion.p>

            <motion.div variants={bodyItem} className="mt-12">
              <a
                href="#apply"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-accent px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-0 animate-[evidencePulse_2.6s_ease-in-out_infinite] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.32),transparent_60%)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
                />
                <span className="relative z-10">Apply to the 2026 Batch</span>
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-flex h-5 w-5 items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — 4 comparison rows */}
          <motion.div
            variants={rowsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="border-b border-black/15"
          >
            {pairs.map((row, idx) => (
              <motion.div
                key={idx}
                variants={rowItem}
                className="group relative grid grid-cols-1 gap-6 border-t border-black/15 py-8 transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:grid-cols-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span
                  aria-hidden="true"
                  variants={arrowDraw}
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-accent transition-transform duration-300 ease-out group-hover:scale-110 sm:block"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </motion.span>

                <motion.div
                  variants={standardCell}
                  className="pr-0 transition duration-300 group-hover:opacity-55 group-hover:blur-[0.5px] sm:pr-8"
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                    A Standard MSW Field Work Record Contains
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.55] text-[#5b4d3f]">
                    {row.standard}
                  </p>
                </motion.div>

                <motion.div
                  variants={reactCell}
                  className="relative pl-0 transition duration-300 sm:pl-8"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 hidden h-full w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-[3px] sm:block"
                  />
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-accent">
                    Your MSW-REACT Field Work Produces
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-[1.55] text-ink">
                    {row.react}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes evidencePulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}
