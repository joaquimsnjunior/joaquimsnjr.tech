"use client"
import { s } from "framer-motion/client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

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
        case "r":
          router.push("/feed.xml")
          break
        case "o":
          router.push("/sites")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  const navItems = [
    { href: "/", label: "[home]", shortcut: "h" },
    { href: "/blog", label: "./blog", shortcut: "b" },
    { href: "/projects", label: "./projects", shortcut: "p" },
    { href: "/about", label: "./sobre", shortcut: "s" },
    { href: "/talks", label: "./talks", shortcut: "t" },
    { href: "/sites", label: "./sites", shortcut: "o" },
    { href: "/feed.xml", label: "./rss", shortcut: "r" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="mb-5">
      <div className="flex flex-col gap-4  pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b pb-1 transition-colors ${isActive(item.href)
                ? "text-[color:var(--foreground)] border-[color:var(--accent)]"
                : "text-[color:var(--muted)] border-transparent hover:text-[color:var(--foreground)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[11px] text-[color:var(--muted)] hidden md:block">
        atalhos: h / b / p / s / t / r
      </p>
    </nav>
  )
}
