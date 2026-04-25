import Link from "next/link"
import { type MDXFileData } from "@/lib/blog"

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


type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
  index?: number
}

export function PostItem({ post, isSelected, index = 0 }: PostItemProps) {
  const readingTime = calculateReadingTime(post.content)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block border-b border-[color:var(--border)] py-4 transition-colors ${
        isSelected ? "bg-[color:var(--accent-soft)]" : ""
      }`}
      aria-label={`Ler artigo: ${post.metadata.title}`}
    >
      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
        <time dateTime={new Date(post.metadata.date).toISOString()}>
          {formatDate(post.metadata.date)}
        </time>
        <span className="text-[color:var(--border)]">•</span>
        <span>{readingTime} min</span>
      </div>

      <h4
        className={`mt-2 text-base sm:text-lg font-medium leading-snug transition-colors duration-200 line-clamp-2 ${
          isSelected ? "text-[color:var(--accent)]" : "text-[color:var(--foreground)]"
        } group-hover:text-[color:var(--accent)]`}
      >
        {post.metadata.title}
      </h4>

      {post.metadata.description && (
        <p className="mt-2 text-sm text-[color:var(--muted)] line-clamp-1">
          {post.metadata.description}
        </p>
      )}
    </Link>
  )
}