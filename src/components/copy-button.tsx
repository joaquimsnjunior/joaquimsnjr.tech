"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  code: string
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-2 py-1 text-neutral-500 hover:text-neutral-200
                 rounded transition-colors duration-200"
      aria-label={copied ? "Copiado!" : "Copiar código"}
      title={copied ? "Copiado!" : "Copiar código"}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-400">copiado</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium uppercase tracking-wider">copiar</span>
        </>
      )}
    </button>
  )
}
