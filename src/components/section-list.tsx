import Link from "next/link"
import { ArrowRight } from 'lucide-react';

export type Item = {
  title: string
  href: string
  role: string
  period?: string
  description: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-16">
      <h2 className="section-title mb-6">{title}</h2>
      <div className="surface divide-y divide-[color:var(--border)]">
        {items.map((item) => (
          <div key={item.title} className="py-5 px-6">
            <Link href={item.href} target="_blank" className="block">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                {item.role}{item.period ? ` · ${item.period}` : ""}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
        >
          {viewAllText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </section>
  )
}
