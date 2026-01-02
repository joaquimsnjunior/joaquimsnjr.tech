"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft, Maximize2, Minimize2, BookOpen, Home, Monitor } from 'lucide-react'

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

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col bg-[#111] ${isFullscreen ? 'h-screen' : 'min-h-[85vh]'}`}
    >
      {/* Terminal Window Container */}
      <div className="flex-1 flex flex-col border border-gray-800/60 bg-[#161616] m-2 sm:m-4 overflow-hidden">

        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/60 bg-[#1a1a1a] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <button
                onClick={() => window.location.href = "/"}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                title="Voltar ao início [h]"
              />
              <button
                onClick={() => setPresenter(v => !v)}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
                title="Notas do apresentador [p]"
              />
              <button
                onClick={toggleFullscreen}
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
                title="Fullscreen [f]"
              />
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              ~/presentations/{title?.toLowerCase().replace(/\s+/g, '-').slice(0, 30) || 'deck'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Slide Counter */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <Monitor className="w-3 h-3" />
              <span>{index + 1}<span className="text-gray-600">/</span>{slides.length}</span>
            </div>
          </div>
        </div>

        {/* Slide Area */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-auto">
          <div className="w-full max-w-6xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {slides[index]}
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800/60 bg-[#1a1a1a] flex-shrink-0">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Slide anterior"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-all duration-200 ${index === 0
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed'
                  : 'border-gray-700 text-gray-400 hover:border-blue-400/50 hover:text-blue-400'
                }`}
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">prev</span>
            </button>
            <button
              onClick={next}
              disabled={index === slides.length - 1}
              aria-label="Próximo slide"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-all duration-200 ${index === slides.length - 1
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed'
                  : 'border-gray-700 text-gray-400 hover:border-blue-400/50 hover:text-blue-400'
                }`}
            >
              <span className="hidden sm:inline">next</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 mx-4 max-w-md hidden sm:block">
            <div className="relative w-full h-1 bg-gray-800 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-600 font-mono">
              <span>0%</span>
              <span>{progress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.location.href = "/"}
              className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-gray-700/50 text-gray-500 hover:border-gray-600 hover:text-gray-400 transition-colors"
              title="Voltar ao início"
            >
              <Home className="w-3 h-3" />
              <span className="hidden sm:inline">h</span>
            </button>
            <button
              onClick={() => setPresenter(v => !v)}
              className={`flex items-center gap-1 px-2 py-1 text-[10px] font-mono border transition-colors ${presenter
                  ? 'border-blue-400/50 text-blue-400 bg-blue-400/10'
                  : 'border-gray-700/50 text-gray-500 hover:border-gray-600 hover:text-gray-400'
                }`}
              title="Notas do apresentador"
            >
              <BookOpen className="w-3 h-3" />
              <span className="hidden sm:inline">p</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-gray-700/50 text-gray-500 hover:border-gray-600 hover:text-gray-400 transition-colors"
              title="Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              <span className="hidden sm:inline">f</span>
            </button>
          </div>
        </div>
      </div>

      {/* Presenter Notes Panel */}
      {presenter && (
        <div className="mx-2 sm:mx-4 mb-2 sm:mb-4 border border-gray-800/60 bg-[#161616] animate-fade-in-up">
          {/* Notes Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/60 bg-[#1a1a1a]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-gray-400 font-mono">presenter-notes.md</span>
            </div>
            <button
              onClick={() => setPresenter(false)}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              [esc]
            </button>
          </div>

          {/* Notes Content */}
          <div className="p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-emerald-400 font-mono text-sm">❯</span>
              <span className="text-gray-400 font-mono text-sm">cat</span>
              <span className="text-white font-mono text-sm">slide-{index + 1}.md</span>
            </div>
            <div className="pl-5 border-l-2 border-gray-800 text-gray-300 text-sm leading-relaxed">
              {notes?.[index] || (
                <span className="text-gray-600 italic">— sem notas para este slide —</span>
              )}
            </div>

            {/* Quick Stats */}
            <div className="mt-4 pt-4 border-t border-gray-800/40 flex items-center gap-6 text-xs text-gray-500 font-mono">
              <span>slide: {index + 1}/{slides.length}</span>
              <span>progress: {progress}%</span>
              <span>remaining: {slides.length - index - 1}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

