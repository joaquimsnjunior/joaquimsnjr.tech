/**
 * ProjectsSection - Seção de projetos para a homepage.
 *
 * @description Design criativo com cards estilo terminal/código,
 * apresentando projetos de forma visual e interativa.
 * Harmonizado com a estética minimalista do site.
 *
 * @features
 * - Cards com visual de código/terminal
 * - Indicadores de status (live, em desenvolvimento, etc)
 * - Tags de tecnologias estilizadas
 * - Animações suaves no hover
 * - Totalmente responsivo
 */

import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Terminal, Zap, Code2, Server } from "lucide-react"

/* ============================================================================
   TYPES
   ============================================================================ */

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

/* ============================================================================
   CONSTANTS
   ============================================================================ */

const STATUS_CONFIG = {
  live: {
    label: "online",
    className: "text-green-400 border-green-400/30",
    dot: "bg-green-400",
  },
  development: {
    label: "dev",
    className: "text-yellow-400 border-yellow-400/30",
    dot: "bg-yellow-400",
  },
  archived: {
    label: "archived",
    className: "text-gray-500 border-gray-500/30",
    dot: "bg-gray-500",
  },
}

const ICON_MAP = {
  terminal: Terminal,
  zap: Zap,
  code: Code2,
  server: Server,
}

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const statusConfig = STATUS_CONFIG[project.status]
  const IconComponent = ICON_MAP[project.icon || "code"]

  return (
    <div
      className="group relative border border-gray-800/60 bg-[#161616] transition-all duration-300 hover:border-blue-400/50 hover:bg-[#1a1a1a]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header do card estilo terminal */}
      <div className="flex items-center justify-between border-b border-gray-800/40 px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Dots estilo macOS */}
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>

          {/* Título no estilo path */}
          <span className="text-xs text-gray-400">
            ~/projects/{project.slug}
          </span>
        </div>

        {/* Status badge */}
        <div className={`flex items-center gap-1.5 border px-2 py-0.5 text-[10px] ${statusConfig.className}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dot} animate-pulse`} />
          {statusConfig.label}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="p-5">
        {/* Ícone e título */}
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-gray-700/50 bg-gray-800/30 text-blue-400">
            <IconComponent className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-blue-400">
              {project.title}
            </h3>
            <p className="text-xs text-gray-400">{project.role}</p>
          </div>
        </div>

        {/* Descrição estilo código */}
        <div className="mb-5 border-l-2 border-gray-700/50 pl-3">
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="text-gray-500">// </span>
            {project.description}
          </p>
        </div>

        {/* Tecnologias */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="border border-gray-700/50 bg-gray-800/20 px-2 py-0.5 text-[11px] text-gray-400 transition-colors duration-200 hover:border-blue-400/30 hover:text-blue-400"
              >
                {tech.toLowerCase()}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 text-[11px] text-gray-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Links de ação */}
        <div className="flex items-center gap-4 border-t border-gray-800/40 pt-4">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 transition-all duration-200 hover:gap-2 hover:text-blue-400"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>ver projeto</span>
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-all duration-200 hover:gap-2 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              <span>código</span>
            </Link>
          )}
        </div>
      </div>

      {/* Decoração: linha de código no canto */}
      <div className="absolute bottom-2 right-3 text-[10px] text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        &lt;/&gt;
      </div>
    </div>
  )
}

/* ============================================================================
   FEATURED PROJECT - Card maior para projeto em destaque
   ============================================================================ */

interface FeaturedProjectProps {
  project: Project
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const statusConfig = STATUS_CONFIG[project.status]
  const IconComponent = ICON_MAP[project.icon || "code"]

  return (
    <div className="group relative border border-gray-800/60 bg-[#161616] transition-all duration-300 hover:border-blue-400/50 hover:bg-[#1a1a1a]">
      {/* Header estilo terminal expandido */}
      <div className="flex items-center justify-between border-b border-gray-800/40 px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-xs text-gray-400">
            ~/projects/{project.slug} — zsh
          </span>
        </div>

        <div className={`flex items-center gap-2 border px-3 py-1 text-xs ${statusConfig.className}`}>
          <span className={`h-2 w-2 rounded-full ${statusConfig.dot} animate-pulse`} />
          {statusConfig.label}
        </div>
      </div>

      {/* Conteúdo com layout expandido */}
      <div className="grid gap-6 p-6 md:grid-cols-2">
        {/* Coluna esquerda: Info */}
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center border border-blue-400/30 bg-blue-400/5 text-blue-400">
              <IconComponent className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-blue-400">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">{project.role}</p>
            </div>
          </div>

          <div className="mb-5 border-l-2 border-blue-400/30 pl-4">
            <p className="leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 transition-all duration-200 hover:gap-3 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              <span>ver projeto ao vivo</span>
            </Link>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-200 hover:gap-3 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>source code</span>
              </Link>
            )}
          </div>
        </div>

        {/* Coluna direita: Techs estilo código */}
        <div className="border border-gray-800/40 bg-[#111] p-4">
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>stack.config</span>
          </div>

          <div className="font-mono text-sm">
            <p className="text-gray-600">{'{'}</p>
            <p className="ml-4 text-gray-500">
              <span className="text-blue-400">"technologies"</span>: [
            </p>
            {project.technologies.map((tech, i) => (
              <p key={tech} className="ml-8 text-gray-400">
                <span className="text-green-400">"{tech.toLowerCase()}"</span>
                {i < project.technologies.length - 1 && ","}
              </p>
            ))}
            <p className="ml-4 text-gray-500">]</p>
            <p className="text-gray-600">{'}'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   MAIN COMPONENT
   ============================================================================ */

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
    <section className="mb-16 animate-fade-in-up" aria-labelledby="projects-section-title">
      {/* Cabeçalho */}
      <h2
        id="projects-section-title"
        className="mb-6 text-3xl font-semibold leading-none text-white underline decoration-blue-400 decoration-4"
      >
        Projetos
      </h2>

      {/* Projeto em destaque */}
      {showFeatured && featured && (
        <div className="mb-4">
          <FeaturedProject project={featured} />
        </div>
      )}

      {/* Grid de projetos menores */}
      {displayProjects.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}

      {/* Link para ver todos */}
      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-1 text-blue-400 transition-all duration-200 hover:gap-2 hover:underline"
      >
        todos os projetos
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
