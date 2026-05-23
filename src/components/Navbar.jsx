export default function Navbar() {
  const links = [
    { label: 'The Programme', href: '#programme' },
    { label: 'The Journey', href: '#journey' },
    { label: 'What You Leave With', href: '#outcomes' },
    { label: 'How To Join', href: '#apply' },
  ]

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-5xl items-center gap-3 rounded-full border border-black/5 bg-white/95 px-3 py-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] backdrop-blur">
        <a href="#top" className="flex items-center gap-3 pl-1 pr-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
            <span className="h-3 w-3 rounded-full bg-accent" />
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-bold tracking-wide text-ink">
              REACT · MSW
            </span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Social Innovation Fellowship
            </span>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#apply"
          className="ml-auto inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 lg:ml-2"
        >
          Apply to 2026 Batch
        </a>
      </nav>
    </header>
  )
}
