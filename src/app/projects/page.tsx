import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"
import Link from "next/link"

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
}

const projects: Project[] = [
  {
    title: "JoaquimSNJR Tech",
    slug: "joaquimsnjr-tech",
    description: "Meu site pessoal onde compartilho meus projetos, posts de blog e informacoes sobre mim.",
    role: "Website Pessoal",
    status: "live",
    featured: true,
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "MDX"],
    achievements: [
      "Design terminal-style unico",
      "SEO otimizado com sitemap dinamico",
      "Performance score 100 no Lighthouse",
    ],
    href: "https://joaquimsnjr.tech",
    github: "https://github.com/joaquimsnjunior/joaquimsnjr.tech",
  },
  {
    title: "Awesome SRE",
    slug: "awesome-sre",
    description: "Uma lista curada de recursos sobre Site Reliability Engineering (SRE), incluindo livros, artigos, ferramentas, cursos e comunidades.",
    role: "Curadoria Open Source",
    status: "live",
    featured: false,
    technologies: ["Markdown", "SRE", "DevOps", "Observability", "Kubernetes"],
    achievements: [
      "Recursos curados sobre SRE",
      "Contribuicao para a comunidade",
      "Referencia para engenheiros",
    ],
    href: "https://github.com/joaquimsnjunior/awesome-sre",
    github: "https://github.com/joaquimsnjunior/awesome-sre",
  },
]

const STATUS_LABEL = {
  live: "online",
  development: "em desenvolvimento",
  archived: "arquivado",
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="surface surface-hover p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">
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

      {(project.stars !== undefined || project.forks !== undefined) && (
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[color:var(--muted)] uppercase tracking-[0.28em]">
          {project.stars !== undefined && <span>stars: {project.stars}</span>}
          {project.forks !== undefined && <span>forks: {project.forks}</span>}
        </div>
      )}

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
            tecnologias
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
            {project.technologies.map((tech) => (
              <span key={tech} className="border border-[color:var(--border)] px-2 py-0.5">
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
            destaques
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="surface surface-hover p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
          {project.title}
        </h3>
        <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
        {project.role}
      </p>
      <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
        {project.technologies.slice(0, 6).map((tech) => (
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

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projetos",
    description: "Projetos de codigo aberto e ferramentas desenvolvidas por Joaquim Silva.",
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
      <div className="mb-10">
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          <ScrambleText className="font-semibold leading-none" text="Projetos" />
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
          Aqui estao alguns dos projetos em que trabalhei. Adoro construir ferramentas que
          facilitam a vida dos desenvolvedores e explorar novas tecnologias ao longo do caminho.
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
          {projects.length} projetos
        </p>
      </div>

      {featuredProjects.length > 0 && (
        <div className="mb-10">
          <p className="kicker">Destaque</p>
          <div className="mt-4 space-y-6">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {otherProjects.length > 0 && (
        <div className="mb-10">
          <p className="kicker">Outros projetos</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
        Mais projetos em breve.
      </p>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de codigo aberto e ferramentas que desenvolvo. Construindo solucoes com Go, TypeScript, Kubernetes e muito mais.",
  keywords: ["projetos", "projects", "open source", "Go", "TypeScript", "Kubernetes", "portfolio"],
  openGraph: {
    title: "Projetos | Joaquim Silva",
    description: "Projetos de codigo aberto e ferramentas que desenvolvo. Construindo solucoes com Go, TypeScript, Kubernetes e muito mais.",
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
    description: "Projetos de codigo aberto e ferramentas que desenvolvo.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home?title=projects"],
  },
}
