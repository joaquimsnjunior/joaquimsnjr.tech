import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getPosts } from "@/lib/blog"

const posts = getPosts()
  .sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
  .slice(0, 4)

export function BlogSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-blue-400 mr-2">*</span>
        blog
      </h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex justify-between items-center group">
            <Link
              href={`/blog/${post.slug}`}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              <span className="block text-sm text-gray-400">{formatDate(post.metadata.date && post.metadata.date)}
              </span>
              {post.metadata.title.toLowerCase()}
              {post.metadata.description && (
                <span className="block text-sm text-gray-400">
                  {post.metadata.description}
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 mt-6 text-blue-400 hover:underline group"
      >
        todos os posts{" "}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase()
}
