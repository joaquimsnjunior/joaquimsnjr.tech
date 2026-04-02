import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  role: string
  period?: string
  achievements: string[]
  technologies: string[]
  href: string
}

export function ProjectCard({
  title,
  description,
  role,
  period,
  achievements,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <div className="surface surface-hover">
      <Link href={href} target="_blank" className="block">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
            {title}
          </h2>
          <ArrowUpRight className="w-5 h-5 text-[color:var(--muted)]" />
        </div>
      </Link>

      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
        {role}{period ? ` · ${period}` : ""}
      </p>

      <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
        {description}
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)] mb-2">
            Resultados
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-[color:var(--muted)]">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)] mb-2">
            tecnologias
          </h3>
          <div className="flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
            {technologies.map((tech) => (
              <span key={tech} className="border border-[color:var(--border)] px-2 py-0.5">
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
