import logoText from '../assets/logo-text.png'

const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pb-8 pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-3 lg:col-span-2">
            <a href="#home" className="flex items-center">
              <img src={logoText} alt="Dev Stack" className="h-6 w-auto" />
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a href="#github" className="text-xs font-semibold text-slate-600 hover:text-slate-900">GitHub</a>
              <a href="#twitter" className="text-xs font-semibold text-slate-600 hover:text-slate-900">Twitter</a>
              <a href="#linkedin" className="text-xs font-semibold text-slate-600 hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-slate-500 hover:text-slate-900">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-xs text-slate-400 hover:text-slate-900">Privacy</a>
            <a href="#terms" className="text-xs text-slate-400 hover:text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}