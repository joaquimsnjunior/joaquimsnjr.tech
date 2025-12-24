
import Link from "next/link"
import Image from "next/image"
import { getPosts, type MDXFileData } from "@/lib/blog"
import { ArrowRight, ChevronRight } from 'lucide-react';

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

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
}

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-4 p-4 transition-all duration-200 hover:bg-zinc-800/30"
      aria-label={`Ler artigo: ${post.metadata.title}`}
    >
      {/* Thumbnail pequena (opcional) */}
      {post.metadata.coverImage && (
        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden bg-gray-800">
          <Image
            src={post.metadata.coverImage}
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
          dateTime={new Date(post.metadata.date).toISOString()}
          className="text-xs text-zinc-500"
        >
          {formatDate(post.metadata.date)}
        </time>

        {/* Título */}
        <h4 className="mt-1 text-sm font-medium text-zinc-200 transition-colors duration-200 group-hover:text-white line-clamp-2">
          {post.metadata.title.toLowerCase()}
        </h4>

        {/* Descrição truncada */}
        {post.metadata.description && (
          <p className="mt-1 text-xs text-zinc-500 line-clamp-1">
            {post.metadata.description}
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