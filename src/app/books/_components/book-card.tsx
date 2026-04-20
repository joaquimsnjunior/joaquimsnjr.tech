'use client'

import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'

interface BookCardProps {
  title: string
  author: string
  imageUrl: string
  amazonUrl: string
  ctaText: string
  stars?: number
  description?: string
}

export function BookCard({
  title,
  author,
  imageUrl,
  amazonUrl,
  ctaText,
  stars,
  description,
}: BookCardProps) {
  const handleOpenAmazon = () => window.open(amazonUrl, '_blank')

  const renderStars = () => {
    if (!stars) return null
    
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => {
          const isFull = index < Math.floor(stars)
          const isHalf = !isFull && index < stars

          return isHalf ? (
            <StarHalf
              key={`star-${index}`}
              className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
          ) : (
            <Star
              key={`star-${index}`}
              className={`h-3.5 w-3.5 ${
                isFull
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-muted text-muted'
              }`}
              aria-hidden="true"
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 border border-[color:var(--border)] rounded-lg bg-[color:var(--surface)] group h-full">
      {/* Image Section */}
      <button
        type="button"
        aria-label={`Open ${title} on Amazon`}
        className="relative w-52 h-52 mx-auto bg-[color:var(--muted)] cursor-pointer p-0 border-0 rounded-md overflow-hidden shrink-0 hover:outline-2 hover:outline-offset-2 hover:outline-[color:var(--accent)] transition-all focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
        onClick={handleOpenAmazon}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="128px"
        />
      </button>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4 min-w-0">
        <div className="space-y-2 mb-3">
          {/* Title and Rating */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-base leading-tight line-clamp-2 break-words text-[color:var(--foreground)]">
              {title}
            </h3>
            {renderStars()}
          </div>

          {/* Author */}
          <p className="text-xs text-[color:var(--muted)] font-medium truncate">
            {author}
          </p>

          {/* Description/Recommendation */}
          {description && (
            <p className="text-xs text-[color:var(--muted)] leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button
            onClick={handleOpenAmazon}
            className="w-full flex items-center justify-center h-10 px-3 text-xs uppercase tracking-[0.1em] font-medium border border-[color:var(--accent)] bg-[color:var(--accent)] text-white rounded-md transition-all duration-300 hover:bg-opacity-90 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  )
}