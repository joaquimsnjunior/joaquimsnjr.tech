import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "default-github-profile",
    description:
      "github profile default",
    role: "default github profile",
    period: "jun 2022 - present",
    achievements: [
      "informação do perfil do github",
      "apenas meu perfil",
    ],
    technologies: [
      "golang",
      "postgresql",
      "docker",
      "kubernetes",
      "aws",
      "github actions",
    ],
    href: "https://github.com/joaquimsnjunior",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-blue-400 mr-2">*</span>
        <ScrambleText text="projetos" />
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
