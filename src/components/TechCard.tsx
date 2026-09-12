import type { Technology } from '../types/technology'

interface TechCardProps {
  technology: Technology
  isSelected: boolean
  onAdd: (technology: Technology) => void
}

const BADGE_STYLES: Record<string, string> = {
  Popular: 'bg-sky-50 border-sky-100 text-sky-500',
  Versatile: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  Fast: 'bg-orange-50 border-orange-100 text-orange-600',
  'SSR / Edge': 'bg-violet-50 border-violet-100 text-violet-600',
  Standard: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  'Top SQL': 'bg-blue-50 border-blue-100 text-blue-600',
  Cache: 'bg-red-50 border-red-100 text-red-600',
  NoSQL: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  Ubiquitous: 'bg-amber-50 border-amber-100 text-amber-600',
  Essential: 'bg-sky-50 border-sky-100 text-sky-600',
  Robust: 'bg-sky-50 border-sky-100 text-sky-600',
  Flexible: 'bg-pink-50 border-pink-100 text-pink-600',
  Modern: 'bg-cyan-50 border-cyan-100 text-cyan-600',
  Containers: 'bg-sky-50 border-sky-100 text-sky-600',
}

const DEFAULT_BADGE_STYLE = 'bg-violet-50 border-violet-100 text-violet-600'

export default function TechCard({ technology, isSelected, onAdd }: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = technology
  const badgeStyle = BADGE_STYLES[badge] ?? DEFAULT_BADGE_STYLE

  return (
    <article
  className={`flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-sm transition-colors ${
    isSelected ? 'border-pink-300' : 'border-slate-100'
  }`}
>
      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex size-10 items-center justify-center">
            <img src={icon} alt={`${name} logo`} className="size-7 object-contain" loading="lazy" />
          </div>
          <span className={`rounded-full border px-3 py-1 text-[11.5px] font-semibold whitespace-nowrap ${badgeStyle}`}>
            {badge}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold text-slate-900">{name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between border-t border-slate-50 pt-2.5 text-[11px]">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 font-medium text-slate-600">{category}</span>
          <span className="font-medium text-slate-500">{difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
            {rating}
          </span>
        </div>

        <button
  type="button"
  onClick={() => onAdd(technology)}
  disabled={isSelected}
  className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition-colors ${
    isSelected ? 'cursor-not-allowed bg-pink-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
  }`}
>
  {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
</button>
      </div>
    </article>
  )
}