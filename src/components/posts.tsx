"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import type { MDXFileData } from "@/lib/blog"
import { PostItem } from "./post-item"
import { Search, X, CornerDownLeft } from "lucide-react"

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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl mx-4 border border-gray-800/80 bg-[#161616] shadow-2xl shadow-black/50 animate-fade-in-up">
            {/* Search Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-xs text-gray-400 font-mono">search</span>
              </div>
              <button
                onClick={() => {
                  setIsSearching(false)
                  setSearchQuery("")
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800/60">
              <span className="text-emerald-400 font-mono">❯</span>
              <span className="text-gray-400 font-mono text-sm">grep</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white font-mono placeholder:text-gray-500"
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

            {/* Results Count */}
            <div className="px-4 py-2 text-xs text-gray-500 font-mono border-b border-gray-800/40">
              {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
            </div>

            {/* Results List */}
            <div className="max-h-[40vh] overflow-y-auto">
              {filteredPosts.length > 0 ? (
                filteredPosts.slice(0, 8).map((item, index) => (
                  <button
                    key={item.slug}
                    onClick={() => router.push(`/blog/${item.slug}`)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${index === selectedIndex
                      ? 'bg-blue-400/10 border-l-2 border-blue-400'
                      : 'hover:bg-gray-800/30 border-l-2 border-transparent'
                      }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${index === selectedIndex ? 'text-blue-400' : 'text-gray-300'
                        }`}>
                        {item.metadata.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        {item.metadata.description}
                      </p>
                    </div>
                    {index === selectedIndex && (
                      <div className="flex items-center gap-1 text-gray-500">
                        <CornerDownLeft className="w-3 h-3" />
                        <span className="text-[10px]">enter</span>
                      </div>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-gray-500 font-mono text-sm">Nenhum artigo encontrado</p>
                  <p className="text-gray-500 text-xs mt-1">Tente outro termo de busca</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-gray-800/60 bg-[#1a1a1a] text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-700 text-[10px]">↑↓</kbd>
                  <span>navegar</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-700 text-[10px]">enter</kbd>
                  <span>abrir</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-700 text-[10px]">esc</kbd>
                  <span>fechar</span>
                </div>
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
