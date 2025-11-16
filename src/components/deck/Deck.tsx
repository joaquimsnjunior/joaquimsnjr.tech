"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from 'lucide-react';

/**
 * Deck
 * Componente cliente que fornece um ambiente de apresentação:
 * - navegação por teclado (← / →), clique e touch
 * - fullscreen toggle
 * - painel de notas do apresentador
 * - indicador de progresso
 *
 * Projetado para ser simples, acessível e fácil de estender.
 */

export type DeckProps = {
  slides: React.ReactNode[]
  title?: string
  initial?: number
  notes?: (string | undefined)[]
}

export default function Deck({ slides, title, initial = 0, notes }: DeckProps) {
  const [index, setIndex] = useState<number>(initial)
  const [presenter, setPresenter] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // vai para o slide N (faz clamp)
  const goTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, n))
    setIndex(next)
  }, [slides.length])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // handlers de teclado
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault()
        next()
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        prev()
      } else if (e.key === "f") {
        // atalho para fullscreen
        if (document.fullscreenElement) document.exitFullscreen()
        else containerRef.current?.requestFullscreen()
      } else if (e.key === "p") {
        // atalho para presenter notes
        setPresenter(v => !v)
      } else if (e.key === "h") {
        // atalho para voltar a home
        window.location.href = "/"
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    }, [next, prev])

  // suporte a swipe simples (mobile)
  useEffect(() => {
    let startX: number | null = null
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX
    }
    function onTouchEnd(e: TouchEvent) {
      if (startX == null) return
      const endX = e.changedTouches[0].clientX
      const diff = endX - startX
      if (diff > 50) prev()
      else if (diff < -50) next()
      startX = null
    }
    const el = containerRef.current
    if (!el) return
    el.addEventListener("touchstart", onTouchStart)
    el.addEventListener("touchend", onTouchEnd)
    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [next, prev])

  // progress percentage
  const progress = Math.round(((index + 1) / Math.max(1, slides.length)) * 100)

  return (
    <div ref={containerRef} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center">
      {/* título da apresentação */}
      {title ? (
        <div className="absolute top-6 left-6 text-sm text-gray-300 select-none">{title}</div>
      ) : null}

      {/* área do slide */}
      <div className="w-full max-w-7xl h-[60vh] md:h-[82vh]  p-6 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center text-white text-left">
          {/* O slide atual é um ReactNode — permite MDX/JSX */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="prose prose-invert max-w-none w-full">
              {slides[index]}
            </div>
          </div>
        </div>
      </div>

      {/* controles e progresso */}
      <div className="w-full max-w-4xl mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button onClick={prev} aria-label="Anterior" className="px-3 py-1"><ArrowLeft size={16} /></button>
          <button onClick={next} aria-label="Próximo" className="px-3 py-1"><ArrowRight size={16} /></button>
          <button onClick={() =>  window.location.href = "/"} className="px-1 py-0.5 text-xs border border-gray-700">[h] home </button>
          <button onClick={() => setPresenter(v => !v)} className="px-1 py-0.5 text-xs border border-gray-700">[p] notas </button>
        </div>

        <div className="flex-1 px-4">
          <div className="w-full h-0.5 bg-gray-800 rounded overflow-hidden">
            <div className="h-0.5 bg-blue-400" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="w-36 text-right text-xs text-gray-300">{index + 1} / {slides.length}</div>
      </div>

      {/* painel do apresentador */}
      {presenter ? (
        <div className="w-full max-w-4xl mt-4 p-4 text-sm text-gray-200">
          <div className="flex items-start justify-between">
            <div className="max-w-[70%] pr-4">
              <div className="font-semibold mb-2">Slide {index + 1}</div>
              <div className="text-sm text-gray-300">{notes?.[index] ?? "— sem notas —"}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">[p] notas / [f] fullscreen</div>
              <div className="mt-2 text-sm">Progresso: {progress}%</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

