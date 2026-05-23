import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Apply',
    description:
      'Tell us about yourself and a community problem you have witnessed. Takes ten minutes. No CV. No resume. Just you and a problem.',
  },
  {
    number: '02',
    title: 'Written Entrance',
    description:
      'A short written exercise. There are no right answers. There are revealing ones. We want to understand how you think - not what you know.',
  },
  {
    number: '03',
    title: 'Orientation',
    description:
      'Meet the programme, the mentors, and your potential cohort. Ask everything. This is where you decide if we are right for you - not just the other way around.',
  },
  {
    number: '04',
    title: 'Begin',
    description:
      'Confirm MSW-REACT as your track. Your Semester 1 begins with the 14-day India Immersion. The problem you will spend two years solving is waiting.',
  },
]

function CircleBadge({ active, number }) {
  return (
    <div
      className={`grid h-16 w-16 place-items-center rounded-full border-[3px] bg-canvas text-[13px] font-extrabold tracking-[0.12em] transition duration-500 ${
        active
          ? 'border-accent text-accent shadow-[0_0_18px_rgba(226,91,42,0.75),0_0_36px_rgba(226,91,42,0.25)]'
          : 'border-[#5b4d3f] text-[#5b4d3f]'
      }`}
    >
      {number}
    </div>
  )
}

export default function ApplySteps() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length + 0.15)),
    )
    setActiveStep(next)
  })

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="bg-canvas scroll-mt-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-14 px-6 pb-10 pt-20 md:grid-cols-2 lg:gap-x-16 lg:px-10 lg:pb-12 lg:pt-24">
        {/* LEFT: pinned CTA panel — locked at viewport center for the full section */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-[clamp(3.3rem,6.2vw,5.3rem)] font-semibold leading-none text-ink">
              Four steps.
            </h2>
            <p className="mt-8 max-w-2xl text-[18px] leading-loose text-neutral-700">
              Straightforward. No long essays. No CV. A conversation that starts
              with a problem you have witnessed.
            </p>

            <p className="mt-10 max-w-xl font-serif-italic text-[19px] leading-relaxed text-neutral-500">
              Admission is direct through the REACT domain. You do not need to
              apply to KCLAS separately before applying to MSW-REACT. We will
              walk you through every step personally.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#apply"
                className="inline-flex min-h-16 items-center justify-center bg-accent px-9 py-4 text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22] sm:min-w-72"
              >
                Apply to the 2026 Batch
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-16 items-center justify-center border border-neutral-300 px-9 py-4 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-ink transition hover:border-neutral-500 hover:bg-white/60 sm:min-w-56"
              >
                Talk to Our Team
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: rail + 4 stacked step blocks, scrolls naturally */}
        <div className="relative">
          <div
            className="pointer-events-none absolute left-8 top-[16vh] bottom-[18vh] w-[5px] -translate-x-1/2 rounded-full bg-[#5b4d3f]"
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute left-8 top-[16vh] w-[5px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_22px_rgba(226,91,42,0.95),0_0_58px_rgba(226,91,42,0.42)]"
            style={{ height: lineHeight, maxHeight: 'calc(100% - 34vh)' }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative grid grid-cols-[4rem_1fr] items-center gap-6 py-[12vh] first:pt-[8vh] last:pb-[6vh] sm:gap-8"
            >
              <div className="flex justify-center">
                <CircleBadge
                  active={index <= activeStep}
                  number={step.number}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                  Step {step.number}
                </p>
                <h3 className="mt-5 font-serif text-[clamp(2.5rem,4vw,4.9rem)] font-semibold leading-none text-ink lg:text-[clamp(3rem,5vw,5.4rem)]">
                  {step.title}
                </h3>
                <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-neutral-700">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
