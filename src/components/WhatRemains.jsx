import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const facts = [
  'Thirty fellows join each cohort.',
  'Twelve teams. Twelve ventures. Six impact domains.',
  'Four phases — field immersion, research, engineering, founding.',
  'One registered venture your team owns at graduation.',
]

const rightParagraphs = [
  'REACT is a Social Innovation Fellowship embedded inside your postgraduate degree at Kumaraguru Institutions. You do not add years or leave your campus. You join a track that runs alongside your degree and changes what it produces.',
  'You begin with fourteen days of civic immersion in the field and move through four structured phases as Researcher, Engineer, and Venture Founder. By graduation, your team has a published paper, a working product, a filed patent, and a registered venture. Your degree is paired with a Diploma in Social Innovation from the Social Innovation Institute.',
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
    <section id="fellowship" className="relative z-10 bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* FULL-WIDTH HEADER — spans both columns */}
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={listItem}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
          >
            The Fellowship
          </motion.p>

          <motion.h2
            variants={listItem}
            className="mt-5 max-w-5xl font-serif text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.05] text-ink"
          >
            A 24-month programme that turns your postgraduate degree into a
            venture-building track.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 lg:gap-20 lg:mt-16">
          {/* LEFT */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.ul
              variants={listContainer}
              className="border-t border-black/15"
            >
              {facts.map((line) => (
                <motion.li
                  key={line}
                  variants={listItem}
                  className="border-b border-black/15 py-6 font-serif text-[1.25rem] font-semibold leading-snug text-ink sm:text-[1.35rem]"
                >
                  {line}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={listItem}
              className="mt-8 font-serif-italic text-[1.2rem] leading-snug text-accent"
            >
              Built entirely within your existing programme hours.
            </motion.p>

            <motion.div
              variants={listItem}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="/apply"
                className="inline-flex min-h-14 items-center justify-center bg-accent px-9 py-4 text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22]"
              >
                Apply to 2026 Batch
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-14 items-center justify-center border border-neutral-300 px-9 py-4 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-ink transition hover:border-neutral-500 hover:bg-white/60"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — top padding aligns first paragraph with the first fact ("Thirty fellows…") on the left */}
          <motion.div
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:pt-7"
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
                “Your degree stays. Your campus stays. Your two years stay.
                What changes is what those two years produce.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
