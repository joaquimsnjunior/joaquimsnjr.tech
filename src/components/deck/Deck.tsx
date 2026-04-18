"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft, Maximize2, Minimize2, BookOpen, Home } from "lucide-react"

/**
 * Deck
 * Componente cliente que fornece um ambiente de apresentação:
 * - navegação por teclado (← / →), clique e touch
 * - fullscreen toggle
 * - painel de notas do apresentador
 * - indicador de progresso
 *
 * Projetado para ser simples, acessível e fácil de estender.
 * Design: Terminal/Código estético harmonizado com o site.
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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // vai para o slide N (faz clamp)
  const goTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, n))
    setIndex(next)
  }, [slides.length])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    } else {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    }
  }, [])

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
        toggleFullscreen()
      } else if (e.key === "p") {
        setPresenter(v => !v)
      } else if (e.key === "h") {
        window.location.href = "/"
      }
    }

    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }

    window.addEventListener("keydown", onKey)
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [next, prev, toggleFullscreen])

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
  const controlClass = "inline-flex items-center gap-2 border border-[color:var(--border)] px-2 py-1 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-background text-foreground ${isFullscreen ? "h-screen" : "min-h-screen"}`}
    >
      <div
        className={`mx-auto flex h-full ${isFullscreen ? "h-full" : "min-h-screen"} flex-col px-4 py-4 sm:px-6 sm:py-6 w-full max-w-6xl`}
      >
        <div className="surface flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
              apresentação
            </p>
            <p className="text-sm font-medium text-[color:var(--foreground)]">
              {title ?? "deck"}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
            <span>{index + 1}/{slides.length}</span>
            <span>{progress}%</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.location.href = "/"}
              className={controlClass}
              title="Voltar ao inicio [h]"
            >
              <Home className="w-3 h-3" />
              <span className="hidden sm:inline">home</span>
            </button>
            <button
              onClick={() => setPresenter(v => !v)}
              className={`${controlClass} ${presenter ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)] border-[color:var(--accent)]" : ""}`}
              title="Notas do apresentador [p]"
            >
              <BookOpen className="w-3 h-3" />
              <span className="hidden sm:inline">notas</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className={controlClass}
              title="Fullscreen [f]"
            >
              {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              <span className="hidden sm:inline">tela</span>
            </button>
          </div>
        </div>

        <div className="surface mt-4 flex-1 overflow-auto px-6 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-5xl">
            <div className="prose prose-lg max-w-none prose-headings:text-[color:var(--foreground)] prose-p:text-[color:var(--muted)] prose-a:text-[color:var(--accent)]">
              {slides[index]}
            </div>
          </div>
        </div>

        <div className="surface mt-4 flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Slide anterior"
              className={`inline-flex items-center gap-2 border px-3 py-1 text-[11px] uppercase tracking-[0.28em] transition-colors ${index === 0
                ? "border-[color:var(--border)] text-[color:var(--muted)] opacity-40 cursor-not-allowed"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
              }`}
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">prev</span>
            </button>
            <button
              onClick={next}
              disabled={index === slides.length - 1}
              aria-label="Proximo slide"
              className={`inline-flex items-center gap-2 border px-3 py-1 text-[11px] uppercase tracking-[0.28em] transition-colors ${index === slides.length - 1
                ? "border-[color:var(--border)] text-[color:var(--muted)] opacity-40 cursor-not-allowed"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
              }`}
            >
              <span className="hidden sm:inline">next</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex-1 mx-4 hidden sm:block">
            <div className="h-1 w-full bg-[color:var(--border)]">
              <div
                className="h-full bg-[color:var(--accent)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
            slide {index + 1} de {slides.length}
          </div>
        </div>

        {presenter && (
          <div className="surface mt-4 px-4 py-4">
            <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-3">
              <p className="kicker">Notas</p>
              <button
                onClick={() => setPresenter(false)}
                className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              >
                fechar
              </button>
            </div>
            <p className="mt-4 text-sm text-[color:var(--muted)] leading-relaxed">
              {notes?.[index] || "sem notas para este slide"}
            </p>
            <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
              slide {index + 1} de {slides.length} · {progress}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

