import { useState } from 'react'
import { motion } from 'motion/react'

const semesters = [
  {
    number: '1',
    title: 'Field & Research',
    body: 'The first two weeks are unlike anything in a standard MSW. Fourteen days across six social domains — not to observe, but to develop intelligence. The 9-Lens Framework. Six domain cards you carry for the rest of the programme. By Week 3, one problem is chosen, mentor-signed, and locked. Your fieldwork begins.',
    submission: 'FIELD WORK RECORD',
    portfolio: 'RESEARCH PAPER + TGA REPORT',
  },
  {
    number: '2',
    title: 'Build & Test',
    body: 'You build the simplest version of your solution — a proof of concept. Two full build-test-iterate cycles. A post-PoC community visit to verify that what you built responds to what you found, not what you assumed.',
    submission: 'CONCURRENT FW RECORD',
    portfolio: 'POC TECHNICAL FILE',
  },
  {
    number: '3',
    title: 'Deploy & Measure',
    body: 'You build the market-ready version and deploy it with real users. Adoptability testing — observing how people actually use what you built, not how you hoped they would. Grant application submitted.',
    submission: 'CONCURRENT FW RECORD',
    portfolio: 'MVP FILE + ADOPTABILITY REPORT',
  },
  {
    number: '4',
    title: 'Venture & Legacy',
    body: 'You register the entity. You measure what changed — with evidence, verified by your NGO partner, held to the standard of peer-reviewed impact research. Your BU Research Project is your REACT Capstone Portfolio — one document, submitted once. Then Demo Day. Public. Permanent.',
    submission: 'RESEARCH PROJECT',
    portfolio: 'CAPSTONE + FELLOWSHIP CERTIFICATE',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Semester() {
  const [active, setActive] = useState(0)

  return (
    <section id="semesters" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="font-serif text-[clamp(2.6rem,5.4vw,4.8rem)] font-semibold leading-[1.02] text-ink">
          Four semesters. One unbroken arc.
        </h2>
        <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Each semester builds on the last. Each has a specific output submitted
          to BU as your field work record — and kept in your portfolio as a
          social innovator.
        </p>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:flex lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {semesters.map((s, i) => {
            const isActive = active === i
            return (
              <motion.article
                key={s.number}
                variants={cardVariants}
                onMouseEnter={() => setActive(i)}
                className={`relative flex flex-col bg-white/40 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition-[flex-grow,opacity,filter] duration-700 ease-out lg:min-h-[28rem] lg:basis-0 ${
                  isActive
                    ? 'lg:grow-[3] lg:opacity-100 lg:blur-0'
                    : 'lg:grow lg:opacity-55 lg:blur-[1.5px]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-accent"
                />

                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                  Semester {s.number}
                </p>

                <h3 className="mt-5 font-serif text-[1.9rem] font-semibold leading-[1.05] text-ink lg:text-[2.8rem]">
                  {s.title}
                </h3>

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-out ${
                    isActive ? 'lg:grid-rows-[1fr]' : 'lg:grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`transition-[opacity,transform] ease-out ${
                        isActive
                          ? 'lg:translate-x-0 lg:opacity-100 lg:duration-[600ms] lg:delay-[400ms]'
                          : 'lg:pointer-events-none lg:-translate-x-8 lg:opacity-0 lg:duration-[250ms] lg:delay-0'
                      }`}
                    >
                      <p className="mt-5 text-[14.5px] leading-[1.55] text-neutral-700">
                        {s.body}
                      </p>

                      <div className="mt-6 border-t border-black/10 pt-4 text-[10.5px] font-bold uppercase leading-relaxed tracking-[0.18em] text-neutral-600">
                        <p>
                          <span className="text-neutral-500">BU Submission:</span>{' '}
                          <span className="text-ink">{s.submission}</span>
                        </p>
                        <p className="mt-1.5">
                          <span className="text-neutral-500">Portfolio:</span>{' '}
                          <span className="text-ink">{s.portfolio}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <div className="mt-14">
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center bg-accent px-9 py-4 text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22]"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
