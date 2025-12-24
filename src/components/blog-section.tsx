import Link from "next/link"
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
      <h2 className="text-3xl font-semibold leading-none mb-6 items-center text-white underline decoration-blue-400 decoration-4">
        Blog
      </h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex justify-between items-center underline decoration-transparent hover:decoration-blue-400 decoration-1 transition-all duration-200">
            <Link
              href={`/blog/${post.slug}`}
              className="text-gray-200"
            >
              <span className="block text-[0.875rem] text-gray-400">{formatDate(post.metadata.date && post.metadata.date)}
              </span>
              {post.metadata.title.toLowerCase()}
              {post.metadata.description && (
                <span className="block text-[0.80rem] text-gray-400">
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
