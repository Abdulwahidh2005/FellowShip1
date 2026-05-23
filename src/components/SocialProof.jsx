const fellowAvatars = [
  { initials: 'AR', bg: '#C2410C' },
  { initials: 'KS', bg: '#1D4ED8' },
  { initials: 'MI', bg: '#7C3AED' },
  { initials: 'PR', bg: '#0F766E' },
  { initials: 'SN', bg: '#B45309' },
]

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#E25B2A">
      <path d="M12 2.5l2.95 6.5 7.05.6-5.35 4.65L18.2 21 12 17.3 5.8 21l1.55-6.75L2 9.6l7.05-.6L12 2.5z" />
    </svg>
  )
}

export default function SocialProof() {
  return (
    <section className="border-t border-black/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {fellowAvatars.map((a) => (
              <span
                key={a.initials}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-canvas text-[11px] font-bold text-white"
                style={{ backgroundColor: a.bg }}
              >
                {a.initials}
              </span>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <div className="text-sm font-medium text-neutral-700">
              99+ Fellows across cohorts
            </div>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Bharathiar University Affiliated
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Exclusively at KCLAS · Coimbatore
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            2026 Batch Now Open
          </p>
        </div>
      </div>
    </section>
  )
}
