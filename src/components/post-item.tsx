import Link from "next/link"
import Image from "next/image"
import { type MDXFileData } from "@/lib/blog"
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'

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
 */
function calculateReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

/**
 * Extrai categoria do post.
 */
function extractCategory(post: MDXFileData): string {
  const title = post.metadata.title.toLowerCase()
  const description = post.metadata.description?.toLowerCase() || ""
  const content = title + " " + description

  if (content.includes("cloud") || content.includes("aws") || content.includes("arquitetura")) return "cloud"
  if (content.includes("go") || content.includes("golang") || content.includes("goroutine")) return "golang"
  if (content.includes("api") || content.includes("rest") || content.includes("graphql") || content.includes("grpc")) return "apis"
  if (content.includes("cassandra") || content.includes("banco") || content.includes("database")) return "database"
  return "tech"
}

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
  index?: number
}

export function PostItem({ post, isSelected, index = 0 }: PostItemProps) {
  const readingTime = calculateReadingTime(post.content)
  const category = extractCategory(post)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block border transition-all duration-300 ${isSelected
        ? 'border-blue-400/50 bg-blue-400/5'
        : 'border-gray-800/60 bg-[#161616] hover:border-blue-400/50 hover:bg-[#1a1a1a]'
        }`}
      aria-label={`Ler artigo: ${post.metadata.title}`}
    >
      {/* Terminal-style header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/40 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="w-2 h-2 rounded-full bg-gray-500" />
          </div>
          <span className="text-[10px] text-gray-500 font-mono ml-2">posts/{post.slug.slice(0, 20)}...</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">[{category}]</span>
      </div>

      {/* Content */}
      <div className="flex gap-4 p-4">
        {/* Thumbnail */}
        {post.metadata.coverImage && (
          <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden bg-gray-800/50 hidden sm:block">
            <Image
              src={post.metadata.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="144px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]/50" />
          </div>
        )}

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          {/* Meta info */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <time dateTime={new Date(post.metadata.date).toISOString()}>
                {formatDate(post.metadata.date)}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readingTime} min</span>
            </div>
          </div>

          {/* Title */}
          <h4 className={`text-base font-medium leading-snug transition-colors duration-200 line-clamp-2 ${isSelected ? 'text-blue-400' : 'text-gray-200 group-hover:text-white'
            }`}>
            {post.metadata.title}
          </h4>

          {/* Description */}
          {post.metadata.description && (
            <p className="mt-2 text-sm text-gray-400 line-clamp-1">
              {post.metadata.description}
            </p>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="flex-shrink-0 self-center">
          <ArrowUpRight className={`w-5 h-5 transition-all duration-200 ${isSelected
            ? 'text-blue-400'
            : 'text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            }`} />
        </div>
      </div>
    </Link>
  )
}