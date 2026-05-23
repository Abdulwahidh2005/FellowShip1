import { motion } from 'motion/react'

const leftList = [
  'You have spent time in communities.',
  'You have seen what is broken.',
  'You have documented it, reported it, presented it.',
  'And then the semester ended.',
]

const rightParagraphs = [
  'There is a question nobody in a standard MSW programme asks — and it is the most important one: after you leave, what remains?',
  'Your field placement logs are submitted. Your observation reports are filed. Your supervisor signs off. And the problem you spent a semester understanding continues — because understanding a problem and building something that answers it are two completely different things.',
  'Your field work does not have to end when your semester does. Two years of it can become something that outlasts your degree — if you choose the right track.',
]

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const listItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const rightContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const rightItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhatRemains() {
  return (
    <section id="what-remains" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.h2
          className="max-w-5xl font-serif text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.05] text-ink"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          You chose social work because the problem in front of you felt more
          urgent than anything else.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 lg:gap-20">
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <ul className="border-t border-black/15">
              {leftList.map((line) => (
                <motion.li
                  key={line}
                  variants={listItem}
                  className="border-b border-black/15 py-6 font-serif text-[1.3rem] font-semibold leading-snug text-ink sm:text-[1.4rem]"
                >
                  {line}
                </motion.li>
              ))}
              <motion.li
                variants={listItem}
                className="border-b border-black/15 py-6 font-serif-italic text-[1.35rem] leading-snug text-accent"
              >
                The community is still waiting.
              </motion.li>
            </ul>

            <motion.div
              variants={listItem}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#apply"
                className="inline-flex min-h-14 items-center justify-center bg-accent px-9 py-4 text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22]"
              >
                Apply to the 2026 Batch
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center border border-neutral-300 px-9 py-4 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-ink transition hover:border-neutral-500 hover:bg-white/60"
              >
                Talk to Our Team
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {rightParagraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={rightItem}
                className={`text-[16.5px] leading-[1.75] text-[#5b4d3f] ${
                  i > 0 ? 'mt-6' : ''
                }`}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              variants={rightItem}
              className="mt-10 border-l-[3px] border-accent bg-[#f1ece2] px-7 py-7"
            >
              <p className="font-serif-italic text-[1.15rem] font-semibold leading-[1.55] text-ink">
                What you build in the field does not have to disappear when you
                graduate. That is what MSW-REACT is designed to prevent.
              </p>
            </motion.div>

            <motion.p
              variants={rightItem}
              className="mt-10 font-serif-italic text-[1.2rem] text-accent"
            >
              That is what MSW-REACT is for.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
