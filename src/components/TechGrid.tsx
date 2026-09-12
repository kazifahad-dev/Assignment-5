import type { Technology } from '../types/technology'
import TechCard from './TechCard'

interface TechGridProps {
  technologies: Technology[]
  isInStack: (id: string) => boolean
  onAdd: (technology: Technology) => void
}

export default function TechGrid({ technologies, isInStack, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechCard
          key={technology.id}
          technology={technology}
          isSelected={isInStack(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}