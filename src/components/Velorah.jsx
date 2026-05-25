import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Velorah() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 10%'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.001,
  })

  const y = useTransform(smooth, [0, 1], ['28%', '0%'])
  const radius = useTransform(smooth, [0, 1], [80, 0])
  const shadow = useTransform(
    smooth,
    [0, 1],
    [
      '0 -55px 90px -10px rgba(0,0,0,0.6)',
      '0 -55px 90px -10px rgba(0,0,0,0)',
    ],
  )

  return (
    <motion.section
      id="closing-call"
      ref={ref}
      className="relative z-10 overflow-hidden"
      style={{
        y,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        boxShadow: shadow,
        backgroundColor: '#16110d',
        color: '#f5efe6',
      }}
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(22,17,13,0.65) 0%, rgba(22,17,13,0.78) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(226,91,42,0.16), transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center lg:py-40">
        <motion.p
          className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          The 2026 Batch
        </motion.p>

        <motion.h2
          className="mt-8 font-serif text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.02]"
          style={{ color: '#f5efe6' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Your two years start with one decision.
        </motion.h2>

        <motion.p
          className="mt-8 max-w-2xl text-[16px] leading-[1.75] sm:text-[17px]"
          style={{ color: 'rgba(245,239,230,0.65)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
        >
          A small cohort. Selective entry. One problem per team, one
          community, one venture that outlasts your degree. The 2026 batch
          begins this year.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          <Link
            to="/apply"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-accent px-10 py-5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
            />
            <span className="relative z-10">Apply to 2026 Batch</span>
          </Link>

          <span
            className="text-[12px] font-medium uppercase tracking-[0.2em]"
            style={{ color: 'rgba(245,239,230,0.45)' }}
          >
            or
          </span>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center border px-10 py-5 text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ease-out"
            style={{
              color: '#f5efe6',
              borderColor: 'rgba(245,239,230,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f5efe6'
              e.currentTarget.style.backgroundColor = 'rgba(245,239,230,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,239,230,0.35)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Talk to Our Team
          </Link>
        </motion.div>

        <motion.p
          className="mt-20 text-[10.5px] font-bold uppercase tracking-[0.22em]"
          style={{ color: 'rgba(245,239,230,0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          REACT Fellowship · Kumaraguru Institutions · Coimbatore
        </motion.p>
      </div>
    </motion.section>
  )
}
