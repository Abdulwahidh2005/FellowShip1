import { motion } from 'motion/react'

const arc = [
  {
    number: '01',
    title: '14-Day India Immersion',
    description:
      'Six social domains. Nine lenses. One problem that will not leave you.',
  },
  {
    number: '02',
    title: 'Problem Lock + Research Paper',
    description:
      'One mentor-signed problem. Primary field research. A publication-ready paper.',
  },
  {
    number: '03',
    title: 'Proof of Concept',
    description:
      'Build and test the simplest version of your solution. Twice.',
  },
  {
    number: '04',
    title: 'MVP + Adoptability Testing',
    description:
      'Deploy with real users. Observe. Iterate. Measure what changes.',
  },
  {
    number: '05',
    title: 'Venture Registration',
    description:
      'A company or NGO registered in your name. You graduate as a founder.',
  },
]

const arcContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const arcItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const rightContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const rightItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Programme() {
  return (
    <section id="programme" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* HEADING ROW — eyebrow + serif headline, constrained so the right column lines up later */}
        <motion.div
          variants={arcContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:max-w-[48%]"
        >
          <motion.p
            variants={arcItem}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
          >
            The Programme
          </motion.p>

          <motion.h2
            variants={arcItem}
            className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.02] text-ink"
          >
            Your field work hours. Redirected.
          </motion.h2>
        </motion.div>

        {/* BODY ROW — two aligned columns: arc list (left) | paragraphs + callout + CTA (right) */}
        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — sub-eyebrow + arc list */}
          <motion.div
            variants={arcContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={arcItem}
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
            >
              The Arc of Two Years
            </motion.p>

            <motion.ol
              variants={arcContainer}
              className="mt-5 divide-y divide-black/15 border border-black/15"
            >
              {arc.map((step) => (
                <motion.li
                  key={step.number}
                  variants={arcItem}
                  className="group relative grid grid-cols-[3.25rem_1fr] gap-3 px-6 py-5 transition-colors duration-300 hover:bg-white/50 sm:px-7 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />
                  <span className="pt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-300 group-hover:text-accent">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.15rem] font-semibold leading-tight text-ink sm:text-[1.25rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[#5b4d3f]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          {/* RIGHT — body copy, callout, CTA */}
          <motion.div
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pt-[1.875rem]"
          >
          <motion.p
            variants={rightItem}
            className="text-[16.5px] leading-[1.75] text-[#5b4d3f]"
          >
            Bharathiar University has already given you the time. MSW-REACT
            gives that time a direction. Your mandatory Concurrent Field Work —
            across all four semesters — becomes a structured research and build
            programme, pointed at one real problem in one real community.
          </motion.p>

          <motion.p
            variants={rightItem}
            className="mt-6 text-[16.5px] leading-[1.75] text-[#5b4d3f]"
          >
            Your academic structure, examination schedule, theory papers, and
            MSW degree pathway are entirely unchanged. What changes is what
            your field work produces.
          </motion.p>

          <motion.div
            variants={rightItem}
            className="mt-10 border-l-[3px] border-accent bg-[#f1ece2] px-7 py-7"
          >
            <p className="font-serif-italic text-[1.2rem] font-semibold leading-[1.5] text-ink">
              Every REACT hour is a BU field work hour. You do not do extra.
              You do better.
            </p>
          </motion.div>

          <motion.p
            variants={rightItem}
            className="mt-10 text-[16.5px] leading-[1.75] text-[#5b4d3f]"
          >
            Four semesters. One problem. Everything you produce is
            simultaneously your BU field work record and your portfolio as a
            social innovator. REACT acts as your Primary NGO placement across
            all four semesters — placement logistics resolved from day one.
          </motion.p>

          <motion.div variants={rightItem} className="mt-12 flex justify-end">
            <a
              href="#journey"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-accent px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-0 animate-[pulseGlow_2.6s_ease-in-out_infinite] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),transparent_60%)]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
              />
              <span className="relative z-10">See the Full Journey</span>
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
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}
