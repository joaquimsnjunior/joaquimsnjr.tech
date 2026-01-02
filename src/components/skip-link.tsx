"use client"

import Link from "next/link"

/**
 * SkipLink - Componente de acessibilidade para pular navegação.
 * Visível apenas quando focado via teclado (Tab).
 */
export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:px-4 focus:py-2
        focus:bg-blue-500 focus:text-white
        focus:border focus:border-blue-400
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#111]
        font-mono text-sm
        transition-all duration-200
      "
    >
      Pular para o conteúdo principal
    </Link>
  )
}
