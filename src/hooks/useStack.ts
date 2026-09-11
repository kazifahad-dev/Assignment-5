import { useState } from 'react'
import { toast } from 'react-toastify'
import type { Technology } from '../types/technology'

export default function useStack() {
  const [stack, setStack] = useState<Technology[]>([])

  const isInStack = (id: string) => stack.some((tech) => tech.id === id)

  const addToStack = (technology: Technology) => {
    if (isInStack(technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id: string) => {
    const technology = stack.find((tech) => tech.id === id)
    setStack((prev) => prev.filter((tech) => tech.id !== id))
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`)
    }
  }

  const removeAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return { stack, isInStack, addToStack, removeFromStack, removeAll }
}