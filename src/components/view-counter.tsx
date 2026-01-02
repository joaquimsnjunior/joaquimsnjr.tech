"use client"

import { useEffect, useState, useTransition } from "react"
import { Eye } from "lucide-react"

interface ViewCounterProps {
  slug: string
  track?: boolean
}

export function ViewCounter({ slug, track = true }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    // Fetch current views
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(0))

    // Track view (only once per session)
    if (!track) return

    const viewed = sessionStorage.getItem(`viewed:${slug}`)
    if (viewed) return

    startTransition(async () => {
      try {
        const res = await fetch(`/api/views/${slug}`, { method: "POST" })
        const data = await res.json()
        setViews(data.views)
        sessionStorage.setItem(`viewed:${slug}`, "true")
      } catch {
        // Silently fail
      }
    })
  }, [slug, track])

  if (views === null) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
        <Eye className="w-4 h-4" />
        <span className="w-12 h-4 bg-neutral-800 animate-pulse rounded" />
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
      <Eye className="w-4 h-4" />
      <span className={isPending ? "opacity-50" : ""}>
        {views.toLocaleString("pt-BR")} views
      </span>
    </span>
  )
}

export function ViewCounterSkeleton() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
      <Eye className="w-4 h-4" />
      <span className="w-12 h-4 bg-neutral-800 animate-pulse rounded" />
    </span>
  )
}
