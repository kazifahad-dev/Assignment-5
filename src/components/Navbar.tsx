import { useState } from 'react'

import Logo from "../assets/logo-text.png"

import hamburger from "../assets/hamburger.png"


const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <button
  className="p-2 -ml-2 md:hidden"
  aria-label="Toggle menu"
  onClick={() => setIsMenuOpen((open) => !open)}
>
  <img src={hamburger} alt="" className="h-4 w-5.5" />
</button>

          <a href="#home" className="flex items-center md:mr-auto">
              <img src={Logo} alt="Dev Stack" className="h-7 w-auto sm:h-8" />
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