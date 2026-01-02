"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Command } from "lucide-react"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [showShortcuts, setShowShortcuts] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused or if event target is an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/")
          break
        case "s":
          router.push("/sobre")
          break
        case "b":
          router.push("/blog")
          break
        case "p":
          router.push("/projects")
          break
        case "t":
          router.push("/talks")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  const navItems = [
    { href: "/", label: "home", shortcut: "h" },
    { href: "/blog", label: "blog", shortcut: "b" },
    { href: "/projects", label: "projects", shortcut: "p" },
    { href: "/sobre", label: "sobre", shortcut: "s" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="mb-12">
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between border border-gray-800/60 bg-[#161616]">

        {/* Logo / Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-3 border-r border-gray-800/60 hover:bg-[#1a1a1a] transition-colors duration-200"
        >
          <span className="text-emerald-400 font-mono text-sm">❯</span>
          <span className="text-gray-400 group-hover:text-white transition-colors font-mono text-sm">
            jsnj<span className="text-blue-400">.</span>tech
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 flex items-center">
          <div className="hidden sm:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`
                  group relative flex items-center gap-2 px-4 py-3 border-r border-gray-800/60 
                  transition-all duration-200 hover:bg-[#1a1a1a]
                  ${isActive(item.href)
                    ? "text-blue-400 bg-blue-400/5"
                    : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {/* Shortcut Key Badge */}
                <span className={`
                  font-mono text-[10px] px-1.5 py-0.5 border
                  ${isActive(item.href)
                    ? "border-blue-400/30 text-blue-400 bg-blue-400/10"
                    : "border-gray-700 text-gray-500 group-hover:border-gray-600 group-hover:text-gray-400"
                  }
                `}>
                  {item.shortcut}
                </span>

                {/* Label */}
                <span className="text-sm">{item.label}</span>

                {/* Active Indicator */}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex-1 px-4 py-3">
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <span className="text-emerald-400">❯</span>
              <span className="text-gray-400">cd</span>
              <span className="text-white">{pathname === "/" ? "~" : pathname}</span>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts Toggle */}
        <button
          onClick={() => setShowShortcuts(!showShortcuts)}
          className="hidden md:flex items-center gap-2 px-4 py-3 border-l border-gray-800/60 text-gray-400 hover:text-gray-300 hover:bg-[#1a1a1a] transition-all duration-200"
          title="Keyboard shortcuts"
        >
          <Command className="w-4 h-4" />
          <span className="text-xs font-mono">keys</span>
        </button>

      </div>

      {/* Keyboard Shortcuts Panel */}
      {showShortcuts && (
        <div className="mt-2 border border-gray-800/60 bg-[#161616] p-4 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
            <Command className="w-3 h-3" />
            <span>Keyboard shortcuts</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {navItems.map((item) => (
              <div key={item.href} className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
                  {item.shortcut}
                </kbd>
                <span className="text-gray-400 text-xs">{item.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
                t
              </kbd>
              <span className="text-gray-400 text-xs">talks</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      <div className="sm:hidden mt-2 grid grid-cols-4 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex flex-col items-center gap-1 py-2 border border-gray-800/60
              transition-all duration-200
              ${isActive(item.href)
                ? "bg-blue-400/10 border-blue-400/30 text-blue-400"
                : "bg-[#161616] text-gray-400 hover:text-white hover:border-gray-700"
              }
            `}
          >
            <span className="font-mono text-[10px] px-1.5 py-0.5 border border-gray-700/50">
              {item.shortcut}
            </span>
            <span className="text-[11px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
