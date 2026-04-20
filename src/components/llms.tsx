"use client"

import { useEffect, useState } from "react"

export function LLMsViewer() {
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/llms.txt")
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Carregando...</div>

  return (
    <div className="space-y-4">
      <pre className="bg-[color:var(--background-secondary)] border border-[color:var(--border)] rounded-lg p-4 overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap break-words text-[color:var(--muted)]">
        {content}
      </pre>
    </div>
  )
}