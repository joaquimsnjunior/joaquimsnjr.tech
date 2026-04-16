"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import type { MDXFileData } from "@/lib/blog"
import { PostItem } from "./post-item"
import { X } from "lucide-react"

type PostsProps = {
  posts: MDXFileData[]
}

export function Posts({ posts }: PostsProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const selectedItemRef = useRef<HTMLDivElement>(null)

  const filteredPosts = posts.filter((item) =>
    item.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.metadata.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  const scrollSelectedIntoView = () => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault()
        setIsSearching(true)
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false)
        setSearchQuery("")
        document.activeElement instanceof HTMLElement &&
          document.activeElement.blur()
      } else if (
        isSearching &&
        (((e.ctrlKey || e.metaKey) && (e.key === "j" || e.key === "k")) ||
          e.key === "ArrowDown" ||
          e.key === "ArrowUp")
      ) {
        e.preventDefault()
        setSelectedIndex((prev) => {
          const isDownward =
            e.key === "ArrowDown" || ((e.ctrlKey || e.metaKey) && e.key === "j")

          const newIndex = isDownward
            ? prev < filteredPosts.length - 1
              ? prev + 1
              : prev
            : prev > 0
              ? prev - 1
              : prev

          scrollSelectedIntoView()
          return newIndex
        })
      } else if (isSearching && e.key === "Enter" && filteredPosts.length > 0) {
        router.push(`/blog/${filteredPosts[selectedIndex].slug}`)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearching, filteredPosts, selectedIndex, router])

  return (
    <>
      {/* Search Modal - Terminal Style */}
      {isSearching && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-20">
          <div className="w-full max-w-2xl surface animate-fade-in-up">
            <div className="flex items-center justify-between border-b border-[color:var(--border)] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Buscar
              </p>
              <button
                onClick={() => {
                  setIsSearching(false)
                  setSearchQuery("")
                }}
                className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                aria-label="Fechar busca"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-4 py-4 border-b border-[color:var(--border)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)]"
                autoFocus
                placeholder="buscar artigos..."
                aria-label="Search posts"
                role="searchbox"
                aria-expanded={filteredPosts.length > 0}
                aria-controls="search-results"
                aria-activedescendant={
                  isSearching && filteredPosts.length > 0
                    ? `post-${filteredPosts[selectedIndex].slug}`
                    : undefined
                }
              />
            </div>

            <div className="px-4 py-2 text-[11px] text-[color:var(--muted)] border-b border-[color:var(--border)]">
              {filteredPosts.length} resultado{filteredPosts.length !== 1 ? "s" : ""} encontrado{filteredPosts.length !== 1 ? "s" : ""}
            </div>

            <div className="max-h-[40vh] overflow-y-auto" id="search-results">
              {filteredPosts.length > 0 ? (
                filteredPosts.slice(0, 8).map((item, index) => (
                  <button
                    key={item.slug}
                    onClick={() => router.push(`/blog/${item.slug}`)}
                    className={`w-full text-left px-4 py-3 transition-colors border-b border-[color:var(--border)] ${
                      index === selectedIndex
                        ? "bg-[color:var(--accent-soft)]"
                        : "hover:bg-[color:var(--surface)]"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium truncate ${
                        index === selectedIndex
                          ? "text-[color:var(--accent)]"
                          : "text-[color:var(--foreground)]"
                      }`}
                    >
                      {item.metadata.title}
                    </p>
                    <p className="text-xs text-[color:var(--muted)] truncate mt-1">
                      {item.metadata.description}
                    </p>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-[color:var(--muted)]">Nenhum artigo encontrado</p>
                  <p className="text-xs text-[color:var(--muted)] mt-1">Tente outro termo de busca</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 px-4 py-3 text-[11px] text-[color:var(--muted)]">
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 border border-[color:var(--border)]">↑↓</kbd>
                <span>navegar</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 border border-[color:var(--border)]">enter</kbd>
                <span>abrir</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 border border-[color:var(--border)]">esc</kbd>
                <span>fechar</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {filteredPosts.map((item, index) => (
          <div
            key={item.slug}
            ref={
              isSearching && index === selectedIndex ? selectedItemRef : null
            }
          >
            <PostItem
              post={item}
              isSelected={isSearching && index === selectedIndex}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  )
}
