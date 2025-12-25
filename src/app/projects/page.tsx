import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "JoaquimSNJR Tech",
    description:
      "Meu site pessoal onde compartilho meus projetos, posts de blog e informações sobre mim.",
    role: "Website Pessoal",
    period: "set 2025",
    achievements: [
      "Desenvolvimento de um site responsivo",
      "Implementação de funcionalidades interativas",
      "Otimização para SEO e performance",
    ],
    technologies: [
      "react",
      "next.js",
      "tailwind css",
      "typescript",
      "vercel",
    ],
    href: "https://github.com/joaquimsnjunior/joaquimsnjr.tech",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-semibold mb-8 text-white underline decoration-blue-400 decoration-4">
        <ScrambleText className="font-semibold" text="Projetos" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        aqui estão alguns dos projetos em que trabalhei. eu adoro construir ferramentas
        que facilitam a vida dos desenvolvedores e explorar novas tecnologias
        ao longo do caminho.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projetos",
  description: "Alguns dos projetos em que trabalhei.",
  openGraph: {
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=projects",
      },
    ],
  },
}
