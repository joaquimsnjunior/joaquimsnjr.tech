"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md transition-colors"
        aria-label="Alternar tema"
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-colors hover:bg-[color:var(--accent-soft)]"
      aria-label={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
      title={`Tema atual: ${theme === "light" ? "claro" : "escuro"}`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-[color:var(--foreground)]" />
      ) : (
        <Sun className="h-4 w-4 text-[color:var(--foreground)]" />
      )}
    </button>
  )
}
