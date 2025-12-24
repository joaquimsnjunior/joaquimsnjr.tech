/**
 * BlogSection - Componente de listagem de posts do blog para a homepage.
 *
 * @description Inspirado no layout do 404media.co, exibe o post mais recente
 * em destaque com imagem de capa grande, seguido por uma lista compacta
 * dos posts anteriores. Design focado em hierarquia visual e escaneabilidade.
 *
 * @features
 * - Post em destaque (featured) com imagem de capa em aspect-ratio 16:9
 * - Lista secundária com posts compactos
 * - Fallback visual para posts sem imagem de capa
 * - Hover states com transições suaves
 * - Totalmente responsivo (mobile-first)
 *
 * @example
 * // Uso na página principal
 * <BlogSection />
 */

import Link from "next/link"
import Image from "next/image"
import { getPosts, type MDXFileData } from "@/lib/blog"
import { ArrowRight, ChevronRight } from 'lucide-react';

/* ============================================================================
   CONSTANTS - Configurações do componente
   ============================================================================ */

/** Número máximo de posts exibidos na seção */
const MAX_POSTS_DISPLAY = 5

/** Número de posts em destaque (featured) com imagem grande */
const FEATURED_POSTS_COUNT = 1

/* ============================================================================
   UTILITY FUNCTIONS - Funções auxiliares puras
   ============================================================================ */

/**
 * Formata uma data para exibição em português brasileiro.
 *
 * @param dateString - String de data no formato "month day, year"
 * @returns Data formatada em lowercase (ex: "24 dez 2025")
 *
 * @example
 * formatDate("december 24, 2025") // "24 dez 2025"
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

/**
 * Calcula o tempo estimado de leitura baseado no conteúdo.
 *
 * @param content - Conteúdo do post em texto
 * @returns Tempo estimado em minutos
 *
 * @description Usa média de 200 palavras por minuto (leitura técnica).
 */
function calculateReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200
  const wordCount = content.trim().split(/\s+/).length

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

/* ============================================================================
   SUB-COMPONENTS - Componentes internos reutilizáveis
   ============================================================================ */

/**
 * FeaturedPostCard - Card de destaque para o post principal.
 *
 * @description Exibe o post mais recente com imagem de capa grande,
 * título proeminente e descrição completa. Usa layout vertical
 * com imagem em aspect-ratio 16:9.
 */
interface FeaturedPostCardProps {
  post: MDXFileData
}

function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  const { metadata, slug, content } = post
  const readingTime = calculateReadingTime(content)

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block md:flex overflow-hidden border border-blue-500/30  transition-all duration-300 hover:border-blue-400/60 hover:bg-zinc-900/60"
      aria-label={`Ler artigo: ${metadata.title}`}
    >
      {/* Container da imagem de capa */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-800/50">
        {metadata.coverImage ? (
          <Image
            src={metadata.coverImage}
            alt={`Capa do artigo: ${metadata.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 672px"
            priority // Prioridade para LCP (Largest Contentful Paint)
          />
        ) : (
          /* Fallback: Placeholder visual quando não há imagem */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center">
              <span className="text-5xl opacity-50">Error</span>
              <p className="mt-2 text-sm text-zinc-500">sem imagem</p>
            </div>
          </div>
        )}

        {/* Badge de tempo de leitura */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm">
          {readingTime} min de leitura
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="p-5">
        {/* Meta: data */}
        <time
          dateTime={new Date(metadata.date).toISOString()}
          className="text-xs font-medium uppercase tracking-wider text-blue-400"
        >
          {formatDate(metadata.date)}
        </time>

        {/* Título */}
        <h3 className="mt-2 text-xl font-semibold text-zinc-100 transition-colors duration-200 group-hover:text-white">
          {metadata.title}
        </h3>

        {/* Descrição */}
        {metadata.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {metadata.description}
          </p>
        )}

        {/* Call-to-action */}
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400 transition-all duration-200 group-hover:gap-2">
          ler artigo
          <ArrowRight className="w-4 h-4"/>
        </span>
      </div>
    </Link>
  )
}

/**
 * CompactPostItem - Item compacto para lista secundária de posts.
 *
 * @description Design minimalista com thumbnail pequena opcional,
 * título e data. Otimizado para escaneabilidade rápida.
 */
interface CompactPostItemProps {
  post: MDXFileData
}

function CompactPostItem({ post }: CompactPostItemProps) {
  const { metadata, slug } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex items-start gap-4 p-4 transition-all duration-200 hover:bg-zinc-800/30"
      aria-label={`Ler artigo: ${metadata.title}`}
    >
      {/* Thumbnail pequena (opcional) */}
      {metadata.coverImage && (
        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden bg-gray-800">
          <Image
            src={metadata.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="96px"
          />
        </div>
      )}

      {/* Conteúdo */}
      <div className="flex-1 min-w-0">
        {/* Data */}
        <time
          dateTime={new Date(metadata.date).toISOString()}
          className="text-xs text-zinc-500"
        >
          {formatDate(metadata.date)}
        </time>

        {/* Título */}
        <h4 className="mt-1 text-sm font-medium text-zinc-200 transition-colors duration-200 group-hover:text-white line-clamp-2">
          {metadata.title.toLowerCase()}
        </h4>

        {/* Descrição truncada */}
        {metadata.description && (
          <p className="mt-1 text-xs text-zinc-500 line-clamp-1">
            {metadata.description}
          </p>
        )}
      </div>

      {/* Indicador de hover */}
      <div className="flex-shrink-0 self-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ChevronRight className="text-blue-400 w-4 h-4"/>
      </div>
    </Link>
  )
}

/* ============================================================================
   MAIN COMPONENT - Componente principal exportado
   ============================================================================ */

/**
 * BlogSection - Seção de blog para a homepage.
 *
 * @returns JSX.Element com a seção completa do blog
 */
export function BlogSection() {
  /* --------------------------------------------------------------------------
     DATA FETCHING - Busca e ordenação dos posts
     -------------------------------------------------------------------------- */

  const allPosts = getPosts()

  // Ordena por data decrescente (mais recente primeiro)
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

  // Separa posts em destaque e lista secundária
  const featuredPosts = sortedPosts.slice(0, FEATURED_POSTS_COUNT)
  const remainingPosts = sortedPosts.slice(
    FEATURED_POSTS_COUNT,
    MAX_POSTS_DISPLAY
  )

  // Early return se não houver posts
  if (sortedPosts.length === 0) {
    return null
  }

  /* --------------------------------------------------------------------------
     RENDER
     -------------------------------------------------------------------------- */

  return (
    <section
      className="mb-16 animate-fade-in-up"
      aria-labelledby="blog-section-title"
    >
      {/* Cabeçalho da seção */}
      <h2
        id="blog-section-title"
        className="mb-6 text-3xl font-semibold leading-none text-white underline decoration-blue-400 decoration-4"
      >
        Blog
      </h2>

      {/* Post em destaque */}
      <div className="mb-6">
        {featuredPosts.map((post) => (
          <FeaturedPostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Lista de posts secundários */}
      {remainingPosts.length > 0 && (
        <div className="divide-y divide-zinc-800/50">
          {remainingPosts.map((post) => (
            <CompactPostItem key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Link para ver todos os posts */}
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-1 text-blue-400 transition-all duration-200 hover:gap-2 hover:underline"
      >
        todos os posts
        <ArrowRight className="w-4 h-4"/>
      </Link>
    </section>
  )
}
