import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <button
            className="p-2 -ml-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1h22M0 8h22M0 15h22" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <a href="#home" className="flex items-center gap-2.5 md:mr-auto">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-extrabold text-white">
              DS
            </span>
            <span className="text-xl font-bold text-slate-900">
              Dev <span className="text-[#db2777]">Stack</span>
            </span>
          </a>

          <nav className="mx-auto hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link, i) => {
              const isActive = i === 0
              const linkClass = isActive
                ? 'text-sm font-semibold text-[#db2777]'
                : 'text-sm font-medium text-slate-600 transition-colors hover:text-[#db2777]'
              return (
                <a key={link} href={`#${link.toLowerCase()}`} className={linkClass}>
                  {link}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <a href="#signin" className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline">
              Sign In
            </a>
            <a href="#signup" className="rounded-full bg-[#d91b7e] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5">
              Sign Up
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {NAV_LINKS.map((link, i) => {
              const isActive = i === 0
              const linkClass = isActive
                ? 'py-2 text-sm font-semibold text-[#db2777]'
                : 'py-2 text-sm font-medium text-slate-600'
              return (
                <a key={link} href={`#${link.toLowerCase()}`} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                  {link}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}