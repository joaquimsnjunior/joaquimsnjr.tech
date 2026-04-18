"use client"
import React, { useEffect, useState } from "react"
import Deck from "@/components/deck/Deck"
import Link from "next/link"

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
          setError("Apresentacao invalida: exporte `slides` no arquivo")
          return
        }
        setMod({ slides, notes, meta })
      })
      .catch(err => {
        console.error(err)
        setError(`Falha ao importar apresentacao: ${String(err.message ?? err)}`)
      })

    return () => {
      mounted = false
    }
  }, [slug])

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="surface max-w-lg w-full p-6">
          <p className="kicker">Erro</p>
          <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
            Nao foi possivel carregar
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">{error}</p>
          <Link href="/talks" className="mt-6 inline-flex text-sm link-accent">
            voltar para talks
          </Link>
        </div>
      </div>
    )
  }

  if (!mod) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="surface max-w-lg w-full p-6">
          <p className="kicker">Carregando</p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Preparando apresentação...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Deck slides={mod.slides} title={mod.meta?.title} notes={mod.notes} />
    </div>
  )
}
