import { useEffect, useState } from 'react'
import type { Technology } from '../types/technology'

export default function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technology data')
        return res.json()
      })
      .then((data: Technology[]) => {
        if (isMounted) {
          setTechnologies(data)
          setIsLoading(false)
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setError(err.message)
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { technologies, isLoading, error }
}