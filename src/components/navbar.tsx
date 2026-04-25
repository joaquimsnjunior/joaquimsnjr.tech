"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

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
        case "l":
          router.push("/books")
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
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  const navItems = [
    { href: "/", label: "[home]", shortcut: "h" },
    { href: "/blog", label: "/blog", shortcut: "b" },
    { href: "/books", label: "/livros", shortcut: "l" },
    { href: "/projects", label: "/projetos", shortcut: "p" },
    { href: "/about", label: "/sobre", shortcut: "s" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="mb-5 flex w-full animate-fade-in-up justify-between">
      <div className="flex flex-col sm:flex-row justify-between sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm uppercase">
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
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  )
}

