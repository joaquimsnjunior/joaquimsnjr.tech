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
import Image from "next/image"
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

/**
 * Extrai uma categoria do título/descrição do post.
 */
function extractCategory(post: MDXFileData): string {
  const title = post.metadata.title.toLowerCase()
  const description = post.metadata.description.toLowerCase()
  const content = title + " " + description

  if (content.includes("cloud") || content.includes("aws") || content.includes("arquitetura")) {
    return "cloud"
  }
  if (content.includes("go") || content.includes("golang") || content.includes("goroutine")) {
    return "golang"
  }
  if (content.includes("api") || content.includes("rest") || content.includes("graphql") || content.includes("grpc")) {
    return "apis"
  }
  if (content.includes("cassandra") || content.includes("banco") || content.includes("database") || content.includes("nosql")) {
    return "database"
  }
  return "tech"
}

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

/**
 * PostCard - Card elegante para post do blog.
 */
interface PostCardProps {
  post: MDXFileData
  className?: string
}

function PostCard({ post, className = "" }: PostCardProps) {
  const { metadata, slug } = post
  const category = extractCategory(post)
  const formattedDate = formatDate(metadata.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group relative flex flex-col overflow-hidden border border-gray-800/60 bg-[#161616] transition-all duration-300 hover:border-blue-400/50 hover:bg-[#1a1a1a] ${className}`}
      aria-label={`Ler artigo: ${metadata.title}`}
    >
      {/* Container da imagem */}
      <div className="relative h-[160px] w-full overflow-hidden sm:h-[180px]">
        {metadata.coverImage ? (
          <>
            <Image
              src={metadata.coverImage}
              alt={`Capa: ${metadata.title}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <span className="text-3xl opacity-30">📝</span>
          </div>
        )}

        {/* Badge de categoria no estilo terminal */}
        <div className="absolute right-3 top-3">
          <span className="border border-blue-400/40 bg-[#111]/80 px-2 py-0.5 text-[10px] font-medium text-blue-400 backdrop-blur-sm">
            [{category}]
          </span>
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="flex flex-1 flex-col p-4">
        {/* Data */}
        <time className="mb-2 text-[11px] text-gray-500">
          {formattedDate}
        </time>

        {/* Título */}
        <h3 className="text-sm font-medium leading-snug text-gray-200 transition-colors duration-200 group-hover:text-white sm:text-base">
          {metadata.title}
        </h3>

        {/* Indicador de leitura */}
        <div className="mt-auto flex items-center gap-1 pt-3 text-xs text-gray-500 transition-colors duration-200 group-hover:text-blue-400">
          <span>ler artigo</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

/**
 * FeaturedCard - Card especial para o post em destaque.
 */
interface FeaturedCardProps {
  post: MDXFileData
  className?: string
}

function FeaturedCard({ post, className = "" }: FeaturedCardProps) {
  const { metadata, slug } = post
  const category = extractCategory(post)
  const formattedDate = formatDate(metadata.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden border border-gray-800/60 transition-all duration-300 hover:border-blue-400/50 sm:min-h-[420px] lg:min-h-[100%] ${className}`}
      aria-label={`Ler artigo em destaque: ${metadata.title}`}
    >
      {/* Imagem de fundo */}
      {metadata.coverImage ? (
        <Image
          src={metadata.coverImage}
          alt={`Capa: ${metadata.title}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      )}

      {/* Overlay gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />

      {/* Badge de categoria */}
      <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
        <span className="border border-blue-400/50 bg-[#111]/70 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur-sm">
          [{category}]
        </span>
      </div>

      {/* Conteúdo na parte inferior */}
      <div className="relative z-10 p-5 sm:p-6">
        {/* Data */}
        <time className="mb-3 block text-xs text-gray-400">
          {formattedDate}
        </time>

        {/* Título */}
        <h3 className="text-xl font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-blue-400 sm:text-2xl lg:text-2xl">
          {metadata.title}
        </h3>

        {/* Descrição */}
        {metadata.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {metadata.description}
          </p>
        )}

        {/* Call-to-action */}
        <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 transition-all duration-200 group-hover:gap-3">
          <span>ler artigo completo</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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

  // Distribui posts no grid
  const [featured, ...rest] = posts
  const [second, third, fourth, fifth] = rest

  return (
    <section
      className="mb-16 animate-fade-in-up"
      aria-labelledby="blog-section-title"
    >
      {/* Cabeçalho da seção - harmonizado com SectionList */}
      <h2
        id="blog-section-title"
        className="mb-6 text-3xl font-semibold leading-none text-white underline decoration-blue-400 decoration-4"
      >
        Blog
      </h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-fr">
        {/* Card Featured central (ocupa mais espaço) */}
        {featured && (
          <div className="order-1 md:col-span-2 lg:col-span-6 lg:row-span-2">
            <FeaturedCard post={featured} className="h-full" />
          </div>
        )}

        {/* Card superior direito 1 */}
        {second && (
          <div className="order-2 lg:col-span-3">
            <PostCard post={second} className="h-full" />
          </div>
        )}

        {/* Card superior direito 2 */}
        {third && (
          <div className="order-3 lg:col-span-3">
            <PostCard post={third} className="h-full" />
          </div>
        )}

        {/* Card inferior direito 1 */}
        {fourth && (
          <div className="order-4 lg:col-span-3">
            <PostCard post={fourth} className="h-full" />
          </div>
        )}

        {/* Card inferior direito 2 */}
        {fifth && (
          <div className="order-5 lg:col-span-3">
            <PostCard post={fifth} className="h-full" />
          </div>
        )}
      </div>

      {/* Link para ver todos os posts - harmonizado */}
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-1 text-blue-400 transition-all duration-200 hover:gap-2 hover:underline"
      >
        todos os posts
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
