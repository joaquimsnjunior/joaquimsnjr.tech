import { type MDXFileData } from "@/lib/blog"
import Link from "next/link"

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
}

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 group ${
        isSelected
          ? "bg-gradient-to-r from-blue-400/10 to-transparent -mx-2 px-2 border-l-2 border-l-blue-400/50"
          : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        prefetch={true}
        className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
      >
        {post.metadata.title.toLowerCase()}
      </Link>
      <div className="flex items-center text-sm text-gray-400 shrink-0">
        <span>
          {new Date(post.metadata.date)
            .toLocaleDateString("pt-BR", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .toLowerCase()}
        </span>
      </div>
    </div>
  )
}
