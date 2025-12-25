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
      <h2 className="text-3xl leading-none font-semibold mb-6 flex items-center text-white underline decoration-blue-400 decoration-4">
         {title}
      </h2>
      <div className="space-y-8 group border border-gray-800 p-6 transition-colors hover:border-blue-400/50">
        {items.map((item, index) => (
          <div key={item.title} className="group">
            <Link href={item.href} target="_blank">
              <h3 className="text-xl font-semibold mb-1 text-white">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 mb-2">
                {item.role} {item.period && `(${item.period})`}
              </p>
              <p className="text-gray-300">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="mt-6 inline-flex items-center gap-1 text-blue-400 transition-all duration-200 hover:gap-2 hover:underline"
        >
          {viewAllText}{" "}
          <ArrowRight className="w-4 h-4"/>
        </Link>
      )}
    </section>
  )
}
