/**
 * BlogSection - Modern Dark Minimal Research-Style Content Grid
 *
 * @description Seção moderna de listagem de conteúdos recentes com design
 * dark minimalista, inspirado em páginas de pesquisa técnica contemporâneas.
 *
 * @features
 * - Container centralizado com max-width 7xl
 * - Grid responsivo: 3 colunas (desktop) → 2 (tablet) → 1 (mobile)
 * - Cards com thumbnail 1:1 usando capas reais dos artigos
 * - Hover effects com scale suave
 * - Tipografia moderna e espaço negativo generoso
 * - Design editorial limpo e profissional
 */

import Link from "next/link"
import Image from "next/image"
import { getPosts, type MDXFileData } from "@/lib/blog"
import { ArrowRight } from "lucide-react"

/* ============================================================================
   CONSTANTS
   ============================================================================ */

const MAX_POSTS_DISPLAY = 6

/* ============================================================================
   UTILITY FUNCTIONS
   ============================================================================ */

/**
 * Formata data para português (ex: "10 de mar. de 2026")
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
 * ContentCard - Card individual com thumbnail, título e metadados.
 */
interface ContentCardProps {
  post: MDXFileData
  index: number
}

function ContentCard({ post, index }: ContentCardProps) {
  const { metadata, slug } = post
  const formattedDate = formatDate(metadata.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block h-full transition-transform duration-200 ease-out hover:scale-[1.02]"
      aria-label={`Ler artigo: ${metadata.title}`}
    >
      {/* Card Container */}
      <div className="flex flex-col h-full gap-3">
        {/* Thumbnail - 1:1 Aspect Ratio */}
        <div className="relative w-full aspect-square rounded-[12px] overflow-hidden flex-shrink-0">
          {metadata.coverImage ? (
            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              fill
              className="object-cover group-hover:brightness-90 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          )}

          {/* Overlay de interação */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-2 flex-1 justify-between">
          {/* Título */}
          <h3 className="text-base font-medium leading-snug text-[color:var(--foreground)] transition-colors duration-200">
            {metadata.title}
          </h3>

          {/* Metadados */}
          <p className="text-sm text-[color:var(--muted)] leading-relaxed">
            <span className="inline-block">Artigo/Post</span>
            <span className="mx-3 text-zinc-700">•</span>
            <time className="inline-block">{formattedDate}</time>
          </p>
        </div>
      </div>
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

  return (
    <section
      className="w-full mb-24"
      aria-labelledby="blog-section-title"
    >
      <div className="mx-auto w-full">
        {/* Header com Título e Link */}
        <div className="mb-12 flex items-center justify-between">
          <h2
            id="blog-section-title"
            className="text-4xl font-bold text-[color:var(--foreground)]"
          >
            Blog
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--foreground)]"
            aria-label="Ver todos os artigos"
          >
            Ver tudo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <ContentCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
