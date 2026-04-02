/**
 * BlogSection - Componente de listagem de posts do blog para a homepage.
 *
 * @description Design elegante estilo Bento Grid harmonizado com a
 * estética minimalista e técnica do site. Cards com bordas sutis,
 * acentos em azul e transições suaves.
 *
 * @features
 * - Bento Grid Layout responsivo
 * - Card principal em destaque com overlay elegante
 * - Cards secundários com hover effects refinados
 * - Estética consistente com o restante do site
 * - Totalmente responsivo (mobile-first)
 */

import Link from "next/link"
import { getPosts, type MDXFileData } from "@/lib/blog"
import { ArrowRight } from "lucide-react"

/* ============================================================================
   CONSTANTS
   ============================================================================ */

const MAX_POSTS_DISPLAY = 5

/* ============================================================================
   UTILITY FUNCTIONS
   ============================================================================ */

/**
 * Formata uma data para exibição em português.
 */
function formatDate(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .toLowerCase()
}



/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

/**
 * PostRow - Linha minimalista para post do blog.
 */
interface PostCardProps {
  post: MDXFileData
  featured?: boolean
  className?: string
}

function PostRow({ post, featured = false, className = "" }: PostCardProps) {
  const { metadata, slug } = post
  const formattedDate = formatDate(metadata.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group block ${className}`}
      aria-label={`Ler artigo: ${metadata.title}`}
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
        <time>{formattedDate}</time>
      </div>

      <h3
        className={`mt-3 font-semibold transition-colors duration-200 group-hover:text-[color:var(--accent)] ${
          featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
        } text-[color:var(--foreground)]`}
      >
        {metadata.title}
      </h3>

      {metadata.description && (
        <p
          className={`mt-2 text-sm text-[color:var(--muted)] ${
            featured ? "line-clamp-2" : "line-clamp-1"
          }`}
        >
          {metadata.description}
        </p>
      )}
    </Link>
  )
}

/* ============================================================================
   MAIN COMPONENT
   ============================================================================ */

export function BlogSection() {
  const allPosts = getPosts()

  // Ordena por data decrescente
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

  const posts = sortedPosts.slice(0, MAX_POSTS_DISPLAY)

  if (posts.length === 0) {
    return null
  }

  // Distribui posts no grid
  const [featured, ...rest] = posts
  const [second, third, fourth, fifth] = rest
  const listPosts = [second, third, fourth, fifth].filter(
    (post): post is MDXFileData => Boolean(post)
  )

  return (
    <section className="mb-16 animate-fade-in-up" aria-labelledby="blog-section-title">
      <div className="mb-6">
        <h2 id="blog-section-title" className="section-title">
          Blog
        </h2>
      </div>

      {featured && (
        <div className="surface surface-hover mb-6 p-6">
          <PostRow post={featured} featured={true} />
        </div>
      )}

      <div className="divide-y divide-[color:var(--border)]">
        {listPosts.map((post) => (
          <div key={post.slug} className="py-4">
            <PostRow post={post} />
          </div>
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
      >
        todos os posts
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
