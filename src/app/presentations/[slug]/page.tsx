"use client"
import React, { useEffect, useState } from "react"
import Deck from "@/components/deck/Deck"

type PresentationModule = {
  slides: React.ReactNode[]
  notes?: (string | undefined)[]
  meta?: { title?: string }
}

export default function PresentationPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [mod, setMod] = useState<PresentationModule | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    // import dinâmico: carrega a apresentação com base no slug
    import(`../../../presentations/${slug}.tsx`)
      .then(m => {
        if (!mounted) return
        // alguns arquivos exportam default ou named exports
        const slides = m.slides ?? m.default?.slides
        const notes = m.notes ?? m.default?.notes
        const meta = m.meta ?? m.default?.meta
        if (!slides) {
          setError("Apresentação inválida: exporte `slides` no arquivo")
          return
        }
        setMod({ slides, notes, meta })
      })
      .catch(err => {
        console.error(err)
        setError(`Falha ao importar apresentação: ${String(err.message ?? err)}`)
      })

    return () => {
      mounted = false
    }
  }, [slug])

  if (error) return <div className="p-8 text-red-400">{error}</div>
  if (!mod) return <div className="p-8">Carregando apresentação...</div>

  return (
    <div className="p-6">
      <Deck slides={mod.slides} title={mod.meta?.title} notes={mod.notes} />
    </div>
  )
}
