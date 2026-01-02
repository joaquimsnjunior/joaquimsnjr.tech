import { ScrambleText } from "@/components/scramble-text"
import { PostsList } from "@/components/posts-list"
import { getPosts } from "@/lib/blog"
import { Metadata } from "next"
import { Search, Command, ArrowUp, ArrowDown } from "lucide-react"

const posts = getPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      {/* Terminal Window Header */}
      <div className="border border-gray-800/60 bg-[#161616] mb-8">
        {/* Terminal Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-500 font-mono">~/blog</span>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            {posts.length} artigos
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <ScrambleText className="font-bold leading-none" text="Blog" />
          </h1>

          <p className="text-gray-400 font-mono text-sm mb-6">
            <span className="text-emerald-400">❯</span>
            <span className="text-gray-500 ml-2">cat</span>
            <span className="text-white ml-2">description.md</span>
          </p>

          <p className="text-gray-300 leading-relaxed pl-5 border-l-2 border-gray-800">
            Artigos sobre <span className="text-blue-400">engenharia de software</span>,
            <span className="text-blue-400"> cloud native</span>,
            <span className="text-blue-400"> Go</span> e
            <span className="text-blue-400"> sistemas distribuídos</span>.
          </p>
        </div>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="hidden sm:flex items-center gap-6 mb-8 p-4 border border-gray-800/60 bg-[#161616]">
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <Command className="w-3 h-3" />
          <span>Atalhos:</span>
        </div>

        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
            /
          </kbd>
          <span className="text-gray-500 text-xs">buscar</span>
        </div>

        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
            ↑
          </kbd>
          <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
            ↓
          </kbd>
          <span className="text-gray-500 text-xs">navegar</span>
        </div>

        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 font-mono text-xs">
            enter
          </kbd>
          <span className="text-gray-500 text-xs">abrir</span>
        </div>
      </div>

      <PostsList posts={posts} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdos sobre programação, engenharia de software e assuntos relacionados.",
  openGraph: {
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=blog",
      },
    ],
  },
}
