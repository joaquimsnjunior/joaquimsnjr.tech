import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"
import Link from "next/link"
import { Terminal, Code2, Server, Zap, ExternalLink, Github, Star, GitFork } from "lucide-react"

type Project = {
  title: string
  slug: string
  description: string
  role: string
  status: "live" | "development" | "archived"
  featured?: boolean
  technologies: string[]
  achievements: string[]
  href: string
  github?: string
  stars?: number
  forks?: number
  icon?: "terminal" | "code" | "server" | "zap"
}

const projects: Project[] = [
  {
    title: "JoaquimSNJR Tech",
    slug: "joaquimsnjr-tech",
    description: "Meu site pessoal onde compartilho meus projetos, posts de blog e informações sobre mim.",
    role: "Website Pessoal",
    status: "live",
    featured: true,
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "MDX"],
    achievements: [
      "Design terminal-style único",
      "SEO otimizado com sitemap dinâmico",
      "Performance score 100 no Lighthouse",
    ],
    href: "https://joaquimsnjr.tech",
    github: "https://github.com/joaquimsnjunior/joaquimsnjr.tech",
    icon: "terminal",
  },
   {
    title: "Awesome SRE",
    slug: "awesome-sre",
    description: "Uma lista curada de recursos incríveis sobre Site Reliability Engineering (SRE), incluindo livros, artigos, ferramentas, cursos e comunidades.",
    role: "Curadoria Open Source",
    status: "live",
    featured: false,
    technologies: ["Markdown", "SRE", "DevOps", "Observability", "Kubernetes"],
    achievements: [
      "Recursos curados sobre SRE",
      "Contribuição para a comunidade",
      "Referência para engenheiros",
    ],
    href: "https://github.com/joaquimsnjunior/awesome-sre",
    github: "https://github.com/joaquimsnjunior/awesome-sre",
    icon: "server",
  },
]

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
  code: Code2,
  server: Server,
  zap: Zap,
}

function FeaturedProject({ project }: { project: Project }) {
  const statusConfig = STATUS_CONFIG[project.status]
  const IconComponent = ICON_MAP[project.icon || "code"]

  return (
    <div className="group border border-gray-800/60 bg-[#161616] hover:border-blue-400/50 transition-all duration-300">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
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

      {/* Content Grid */}
      <div className="grid gap-6 p-6 lg:grid-cols-2">
        {/* Left Column: Info */}
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center border border-blue-400/30 bg-blue-400/5 text-blue-400">
              <IconComponent className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
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

          {/* Stats */}
          {(project.stars !== undefined || project.forks !== undefined) && (
            <div className="flex items-center gap-4 mb-5 text-sm text-gray-400">
              {project.stars !== undefined && (
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
              )}
              {project.forks !== undefined && (
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-5">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:gap-3 hover:underline transition-all duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              <span>ver projeto</span>
            </Link>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${project.title} no GitHub`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:gap-3 hover:text-white transition-all duration-200"
              >
                <Github className="h-4 w-4" />
                <span>source code</span>
              </Link>
            )}
          </div>
        </div>

        {/* Right Column: Tech Stack + Achievements */}
        <div className="space-y-4">
          {/* Tech Stack - JSON Style */}
          <div className="border border-gray-800/40 bg-[#111] p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>stack.config</span>
            </div>

            <div className="font-mono text-sm">
              <p className="text-gray-500">{'{'}</p>
              <p className="ml-4 text-gray-500">
                <span className="text-blue-400">"technologies"</span>: [
              </p>
              {project.technologies.map((tech, i) => (
                <p key={tech} className="ml-8 text-gray-400">
                  <span className="text-emerald-400">"{tech.toLowerCase()}"</span>
                  {i < project.technologies.length - 1 && ","}
                </p>
              ))}
              <p className="ml-4 text-gray-500">]</p>
              <p className="text-gray-500">{'}'}</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="border border-gray-800/40 bg-[#111] p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
              <Zap className="h-3.5 w-3.5" />
              <span>destaques</span>
            </div>

            <ul className="space-y-2">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-emerald-400 select-none">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const statusConfig = STATUS_CONFIG[project.status]
  const IconComponent = ICON_MAP[project.icon || "code"]

  return (
    <div className="group border border-gray-800/60 bg-[#161616] hover:border-blue-400/50 hover:bg-[#1a1a1a] transition-all duration-300">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/40 bg-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-gray-400">
            ~/projects/{project.slug}
          </span>
        </div>

        <div className={`flex items-center gap-1.5 border px-2 py-0.5 text-[10px] ${statusConfig.className}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dot} animate-pulse`} />
          {statusConfig.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-gray-700/50 bg-gray-800/30 text-blue-400">
            <IconComponent className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-gray-400">{project.role}</p>
          </div>
        </div>

        <div className="mb-5 border-l-2 border-gray-700/50 pl-3">
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="text-gray-500">// </span>
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="border border-gray-700/50 bg-gray-800/20 px-2 py-0.5 text-[11px] text-gray-400 hover:border-blue-400/30 hover:text-blue-400 transition-colors"
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

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-gray-800/40 pt-4">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:gap-2 hover:text-blue-400 transition-all duration-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>ver projeto</span>
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:gap-2 hover:text-white transition-all duration-200"
            >
              <Github className="h-3.5 w-3.5" />
              <span>código</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projetos",
    description: "Projetos de código aberto e ferramentas desenvolvidas por Joaquim Silva.",
    url: "https://www.joaquimsnjr.tech/projects",
    author: {
      "@type": "Person",
      name: "Joaquim Silva",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.description,
          url: project.href,
          codeRepository: project.github,
          programmingLanguage: project.technologies,
          author: {
            "@type": "Person",
            name: "Joaquim Silva",
          },
        },
      })),
    },
  }

  return (
    <main className="animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Terminal Window Header */}
      <div className="border border-gray-800/60 bg-[#161616] mb-8">
        {/* Terminal Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">~/projects</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Code2 className="w-3 h-3" />
            <span>{projects.length} projeto{projects.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <ScrambleText className="font-bold leading-none" text="Projetos" />
          </h1>

          {/* Command Line Intro */}
          <div className="font-mono text-sm space-y-2 text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">ls</span>
              <span className="text-white">-la ./projects</span>
            </div>
            <div className="pl-5 text-gray-300 leading-relaxed border-l-2 border-gray-800">
              Aqui estão alguns dos projetos em que trabalhei. Adoro construir
              <span className="text-blue-400"> ferramentas</span> que facilitam a vida dos desenvolvedores
              e explorar <span className="text-blue-400">novas tecnologias</span> ao longo do caminho.
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-blue-400">
              <Star className="w-4 h-4" />
              <h2 className="text-xl font-semibold">Destaque</h2>
            </div>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold text-white">Outros Projetos</h2>
            <span className="text-xs text-gray-500 font-mono">({otherProjects.length})</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Footer Terminal */}
      <div className="border border-gray-800/60 bg-[#161616] p-4">
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
          <span className="text-emerald-400">❯</span>
          <span className="text-gray-500">echo</span>
          <span className="text-gray-400">"Mais projetos em breve..."</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de código aberto e ferramentas que desenvolvo. Construindo soluções com Go, TypeScript, Kubernetes e muito mais.",
  keywords: ["projetos", "projects", "open source", "Go", "TypeScript", "Kubernetes", "portfolio"],
  openGraph: {
    title: "Projetos | Joaquim Silva",
    description: "Projetos de código aberto e ferramentas que desenvolvo. Construindo soluções com Go, TypeScript, Kubernetes e muito mais.",
    url: "https://www.joaquimsnjr.tech/projects",
    siteName: "Joaquim Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=projects",
        width: 1200,
        height: 630,
        alt: "Projetos - Joaquim Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos | Joaquim Silva",
    description: "Projetos de código aberto e ferramentas que desenvolvo.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home?title=projects"],
  },
}
