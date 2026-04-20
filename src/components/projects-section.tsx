import Link from "next/link"
import { ArrowRight } from "lucide-react"

export type Project = {
  title: string
  slug: string
  description: string
  role: string
  status: "live" | "development" | "archived"
  technologies: string[]
  href: string
  github?: string
  icon?: "terminal" | "zap" | "code" | "server"
}

const STATUS_LABEL = {
  live: "online",
  development: "em desenvolvimento",
  archived: "arquivado",
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="surface p-6 rounded-lg">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
            {project.role}
          </p>
        </div>
        <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <p className="mt-4 text-sm text-[color:var(--muted)] leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
        {project.technologies.slice(0, 6).map((tech) => (
          <span key={tech} className="border border-[color:var(--border)] px-2 py-0.5">
            {tech.toLowerCase()}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-2"
        >
          ver projeto
        </Link>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-2"
          >
            codigo
          </Link>
        )}
      </div>
    </div>
  )
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-medium text-[color:var(--foreground)]">
          {project.title}
        </h3>
        <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
        {project.role}
      </p>
      <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="border border-[color:var(--border)] px-2 py-0.5">
            {tech.toLowerCase()}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-2"
        >
          ver projeto
        </Link>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-2"
          >
            codigo
          </Link>
        )}
      </div>
    </div>
  )
}

interface ProjectsSectionProps {
  projects: Project[]
  showFeatured?: boolean
}

export function ProjectsSection({ projects, showFeatured = true }: ProjectsSectionProps) {
  if (projects.length === 0) {
    return null
  }

  const [featured, ...rest] = projects
  const displayProjects = showFeatured ? rest : projects

  return (
    <section className="mb-16 animate-fade-in-up " aria-labelledby="projects-section-title">
      <div className="mb-6">
        <h2 id="projects-section-title" className="section-title">
          Projetos
        </h2>
      </div>

      {showFeatured && featured && (
        <div className="mb-6">
          <FeaturedProject project={featured} />
        </div>
      )}

      {displayProjects.length > 0 && (
        <div className="divide-y divide-[color:var(--border)]">
          {displayProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      )}

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
      >
        todos os projetos
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
