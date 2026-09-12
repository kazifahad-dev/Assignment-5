import type { Technology } from '../types/technology'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = stack.length

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
        <p className="mt-1 text-xs text-slate-400">
          {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
        </p>

        {count === 0 ? (
          <div className="mt-3 rounded-xl border border-dashed border-slate-200 py-6 text-center">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          <>
            <div className="mt-3 flex flex-col gap-2">
              {stack.map((technology) => (
                <div key={technology.id} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5">
                  <img src={technology.icon} alt={`${technology.name} logo`} className="size-8 shrink-0 rounded-md bg-white p-1 object-contain" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">{technology.name}</p>
                    <p className="text-[11px] text-slate-500">{technology.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(technology.id)}
                    aria-label={`Remove ${technology.name} from stack`}
                    className="shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-200/70 hover:text-slate-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-4 w-full rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  )
}