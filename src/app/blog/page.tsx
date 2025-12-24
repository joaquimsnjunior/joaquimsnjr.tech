import { ScrambleText } from "@/components/scramble-text"
import { PostsList } from "@/components/posts-list"
import { getPosts } from "@/lib/blog"
import { Metadata } from "next"

const posts = getPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-semibold mb-8 text-white underline decoration-blue-400 decoration-4">
        <ScrambleText className="font-semibold leading-none" text="Blog" />
      </h1>

      <p className="hidden sm:block text-sm text-gray-400 mb-8">
        pressione{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700">
          /
        </kbd>{" "}
        para buscar • use{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700">
          ctrl / ⌘ j
        </kbd>{" "}
        e{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700">
          ctrl / ⌘ k
        </kbd>{" "}
        ou{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700">
          ↑
        </kbd>{" "}
        e{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700">
          ↓
        </kbd>{" "}
        para navegar
      </p>
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
