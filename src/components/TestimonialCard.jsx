export default function TestimonialCard({ data }) {
  const { quote, name, role, company, initials, avatarBg, verified } = data
  return (
    <article className="pointer-events-none flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-950 p-6 text-white shadow-card ring-1 ring-white/5 select-none">
      <p className="text-[15.5px] leading-[1.55] text-white/95">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: avatarBg }}
            >
              {initials}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-[15px] font-semibold text-white">
                  {name}
                </span>
                {verified && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-sky-400"
                    fill="currentColor"
                    aria-label="verified"
                  >
                    <path d="M12 2l2.39 2.05 3.15-.36.69 3.09 2.78 1.53-1.4 2.85 1.4 2.85-2.78 1.53-.69 3.09-3.15-.36L12 20.35l-2.39-2.05-3.15.36-.69-3.09L3 14.04l1.4-2.85L3 8.34l2.78-1.53.69-3.09 3.15.36L12 2z" />
                    <path d="M10.6 13.2l-2-2 1.2-1.2.8.8 3.4-3.4 1.2 1.2-4.6 4.6z" fill="#0a0a0a" />
                  </svg>
                )}
              </div>
              <div className="truncate text-[12.5px] text-neutral-400">
                {role}
              </div>
            </div>
          </div>
          <span className="shrink-0 font-serif-italic text-xl tracking-tight text-white">
            {company}
          </span>
        </div>
      </div>
    </article>
  )
}
