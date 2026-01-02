"use client"
import React, { useEffect, useState } from "react"
import Deck from "@/components/deck/Deck"
import { AlertTriangle, Loader2 } from "lucide-react"

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

  // Error State - Terminal Style
  if (error) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center p-4">
        <div className="w-full max-w-lg border border-gray-800/60 bg-[#161616]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">error</span>
          </div>

          {/* Error Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-lg font-semibold text-red-400">Erro ao carregar</h2>
            </div>

            <div className="font-mono text-sm space-y-2 text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-red-400 select-none">✗</span>
                <span className="text-gray-400">load</span>
                <span className="text-white">./presentations/{slug}</span>
              </div>
              <div className="pl-5 border-l-2 border-red-500/30 text-red-300">
                {error}
              </div>
            </div>

            <button
              onClick={() => window.location.href = "/talks"}
              className="mt-6 flex items-center gap-2 px-4 py-2 text-sm border border-gray-700 text-gray-400 hover:border-blue-400/50 hover:text-blue-400 transition-all"
            >
              ← voltar para talks
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Loading State - Terminal Style
  if (!mod) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center p-4">
        <div className="w-full max-w-lg border border-gray-800/60 bg-[#161616]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">loading</span>
          </div>

          {/* Loading Content */}
          <div className="p-6">
            <div className="font-mono text-sm space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 select-none">❯</span>
                <span className="text-gray-400">import</span>
                <span className="text-white">./presentations/{slug}</span>
              </div>
              <div className="flex items-center gap-3 pl-5">
                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="text-gray-400">Carregando apresentação...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111]">
      <Deck slides={mod.slides} title={mod.meta?.title} notes={mod.notes} />
    </div>
  )
}
