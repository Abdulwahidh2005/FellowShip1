import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const SQRT_5000 = Math.sqrt(5000)
const AUTO_ROTATE_MS = 4000
const MOBILE_BREAKPOINT = 640

const initialMentors = [
  {
    name: 'Dr. Lakshmi Narayanan',
    role: 'Director, Rural Health Systems',
    domain: 'Community Health',
    quote:
      'The fellows arrive curious. They leave with evidence. That shift is what I look for in any future health leader.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Arjun Krishnan',
    role: 'Founder, Civic Tech Labs',
    domain: 'Civic Technology',
    quote:
      'Most students study the system. REACT fellows build inside it. The work is closer to industry than coursework.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Prof. Indira Subramanian',
    role: 'Chair, Public Policy Research',
    domain: 'Policy & Governance',
    quote:
      'A research paper signed by a fellow here is a paper that came from a community, not a library. That is rare and useful.',
    image: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
  {
    name: 'Rahul Menon',
    role: 'Partner, AgriVenture Capital',
    domain: 'Livelihood & Agri',
    quote:
      'When a fellow walks me through their venture, they already know the customer, the cost, and the field. That is the founder you want to back.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Dr. Anjali Pillai',
    role: 'Field Mentor, Education Equity',
    domain: 'Education',
    quote:
      'I watched a team spend six months on one school. The product they shipped now serves four districts. That is what staying earns.',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
  {
    name: 'Vikram Iyer',
    role: 'Patent Counsel & Innovation Mentor',
    domain: 'IP & Engineering',
    quote:
      'Fellows leave knowing how to read a patent, file one, and protect what they have built. That is the gap REACT closes.',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    name: 'Meera Subramaniam',
    role: 'Director, Women’s Enterprise Network',
    domain: 'Women’s Livelihood',
    quote:
      'The fellows do not just hear stories. They sit in living rooms long enough to act on what they hear. That is the difference.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
].map((m, i) => ({ ...m, tempId: i }))

function MentorAttribution({ mentor, light }) {
  return (
    <div className={light ? 'text-white' : 'text-ink'}>
      <p
        className={`text-[13px] font-bold leading-tight sm:text-[14px] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {mentor.name}
      </p>
      <p
        className={`mt-1 text-[11.5px] leading-snug sm:text-[12px] ${
          light ? 'text-white/80' : 'text-neutral-600'
        }`}
      >
        {mentor.role}
      </p>
      <p
        className={`mt-2 text-[9.5px] font-bold uppercase tracking-[0.18em] sm:text-[10px] ${
          light ? 'text-white/80' : 'text-accent'
        }`}
      >
        Domain · {mentor.domain}
      </p>
    </div>
  )
}

// Desktop stagger-fan card
function FanCard({ position, mentor, handleMove, cardSize }) {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out sm:p-7 ${
        isCenter
          ? 'z-10 border-accent bg-accent text-white'
          : 'z-0 border-black/15 bg-white text-ink hover:border-accent/50'
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.6) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 14 : -14}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? '0px 8px 0px 4px rgba(20, 14, 8, 0.18)'
          : '0px 0px 0px 0px transparent',
      }}
    >
      <span
        className={`absolute block origin-top-right rotate-45 ${
          isCenter ? 'bg-white/60' : 'bg-black/15'
        }`}
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />

      <img
        src={mentor.image}
        alt={mentor.name}
        draggable="false"
        className="mb-4 h-14 w-12 bg-neutral-200 object-cover object-top sm:h-16 sm:w-14"
        style={{
          boxShadow: isCenter
            ? '3px 3px 0px rgba(255,255,255,0.35)'
            : '3px 3px 0px #faf8f5',
        }}
      />

      <h3
        className={`line-clamp-5 font-serif text-[0.98rem] font-semibold leading-snug sm:text-[1.1rem] ${
          isCenter ? 'text-white' : 'text-ink'
        }`}
      >
        “{mentor.quote}”
      </h3>

      <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
        <MentorAttribution mentor={mentor} light={isCenter} />
      </div>
    </div>
  )
}

// Mobile single-card carousel slide
function MobileCard({ mentor, onTap }) {
  return (
    <motion.article
      key={mentor.tempId}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onTap}
      className="absolute inset-0 flex flex-col rounded-2xl border-2 border-accent bg-accent p-6 text-white shadow-[0_8px_0_4px_rgba(20,14,8,0.18)]"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        draggable="false"
        className="mb-4 h-16 w-14 bg-neutral-200 object-cover object-top"
        style={{ boxShadow: '3px 3px 0px rgba(255,255,255,0.35)' }}
      />

      <p className="font-serif text-[1.05rem] font-semibold leading-snug text-white">
        “{mentor.quote}”
      </p>

      <div className="mt-auto border-t border-white/20 pt-4">
        <MentorAttribution mentor={mentor} light />
      </div>
    </motion.article>
  )
}

export default function StaggerMentors() {
  const [cardSize, setCardSize] = useState(280)
  const [isMobile, setIsMobile] = useState(false)
  const [list, setList] = useState(initialMentors)
  const [paused, setPaused] = useState(false)

  const handleMove = (steps) => {
    setList((prev) => {
      const next = [...prev]
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift()
          if (!item) return prev
          next.push({ ...item, tempId: Math.random() })
        }
      } else if (steps < 0) {
        for (let i = steps; i < 0; i++) {
          const item = next.pop()
          if (!item) return prev
          next.unshift({ ...item, tempId: Math.random() })
        }
      }
      return next
    })
  }

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setIsMobile(w < MOBILE_BREAKPOINT)
      if (w < MOBILE_BREAKPOINT) setCardSize(0)
      else if (w < 1024) setCardSize(280)
      else setCardSize(320)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => handleMove(1), AUTO_ROTATE_MS)
    return () => clearInterval(t)
  }, [paused])

  // ─── Mobile: single-card carousel ──────────────────────────────────────────
  if (isMobile) {
    const current = list[Math.floor(list.length / 2)]
    return (
      <div
        className="relative mx-auto w-full max-w-sm px-6"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="relative h-[380px] w-full">
          <AnimatePresence mode="wait">
            <MobileCard
              key={current.tempId}
              mentor={current}
              onTap={() => handleMove(1)}
            />
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5">
          {list.map((m, i) => (
            <span
              key={m.tempId}
              className={`h-1.5 rounded-full transition-all ${
                i === Math.floor(list.length / 2)
                  ? 'w-6 bg-accent'
                  : 'w-1.5 bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  // ─── Desktop: stagger fan ──────────────────────────────────────────────────
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize + 140 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {list.map((mentor, index) => {
        const position = index - Math.floor(list.length / 2)
        return (
          <FanCard
            key={mentor.tempId}
            mentor={mentor}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
    </div>
  )
}
