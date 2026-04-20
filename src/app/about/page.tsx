import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"
import Link from "next/link"

type WorkItem = {
  title: string
  role: string
  period: string
  description: string
  href: string
  technologies?: string[]
  current?: boolean
}

const workItems: WorkItem[] = [
  {
    title: "All Net Educacao",
    role: "Instrutor/Professor",
    period: "jan 2025 - atual",
    description: "Descomplicando o System Design, Descomplicando Golang, Arquitetura de Containers na AWS, Descomplicando o ECS Descomplicando o EKS Mentorias individuais e em turmas - (aulas de marketing) tópicos: Growth Hacking, Product Market Fit, Estratégias de Go To Market, etc.",
    href: "https://allneteducacao.com.br/",
    technologies: ["Workshops","Mentorias", "Cursos"],
    current: true,
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Suporte Técnico Especializado",
    period: "jan 2024 - jan 2025",
    description: "Implementação de soluções de monitoramento e automação, além de suporte técnico avançado para clientes corporativos, garantindo a estabilidade e eficiência dos serviços.",
    href: "https://www.zinwell.com.tw/us/",
    technologies: ["QA", "DevOps", "Documentação", "Suporte"],
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Suporte Técnico Especializado",
    period: "jul 2023 - jan 2024",
    description: "Garantia de qualidade e eficiência operacional através de testes rigorosos, elaboração de relatórios técnicos e suporte estratégico a clientes em tecnologias de hardware e software.",
    href: "https://www.tbsmart.com.br/",
    technologies: ["QA", "Python", "Documentação", "Suporte"],
  },
]

const skills = [
  { category: "Languages", items: ["Golang", "Python", "TypeScript"] },
  { category: "Cloud & Infra", items: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "Git", "Ansible", "Argo CD"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MySQL", "MongoDB"] },
  { category: "Operating Systems", items: ["Linux(Ubuntu, Debian, Arch)", "Windows"] },
  { category: "Methodologies", items: ["Cloud Native Apps & Containers", "DevOps, Automation, Pipelines, Infrastructure as Code & Simplify with efficiency", "Reliability Engineering, Observability and Disaster Recovery", "Microservices Architecture & Performance", "Agile Development & Technical Leadership"] },
]

function SobrePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: "Joaquim Silva",
      jobTitle: "Software Engineer",
      description: "Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.",
      image: "https://res.cloudinary.com/dy5xyare1/image/upload/v1767414405/Profile_01_t8clcl.jpg",
      url: "https://www.joaquimsnjr.tech",
      sameAs: [
        "https://github.com/joaquimsnjunior",
        "https://twitter.com/joaquimsnjunior",
      ],
      knowsAbout: ["Golang", "TypeScript", "AWS", "Kubernetes", "Docker", "Terraform", "PostgreSQL", "Redis"],
      worksFor: {
        "@type": "Organization",
        name: "All Net Educacao",
        url: "https://allneteducacao.com.br/",
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Educador & Mentor Técnico",
          occupationLocation: {
            "@type": "City",
            name: "Sao Paulo",
          },
        },
      ],
    },
  }

  return (
    <div className="animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-10">
        <p className="kicker">Perfil</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          <ScrambleText className="font-semibold leading-none" text="Sobre mim" />
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
          Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.
        </p>
      </div>

      <div className="mb-10">
        <p className="kicker mb-2">Skills</p>
        <div className="surface p-6 rounded-lg">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="text-white font-bold text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  {skill.category}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
                  {skill.items.map((item) => (
                    <span key={item} className="border border-[color:var(--border)] px-2 py-0.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <p className="kicker mb-2">Experiências</p>
        <div className="space-y-4">
          {workItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface block p-5 rounded-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {item.title}
                </h3>
                {item.current && (
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    atual
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                {item.role} · {item.period}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                {item.description}
              </p>
              {item.technologies && (
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="border border-[color:var(--border)] px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
        Obrigado por visitar.
      </p>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Conheça minha trajetória e experiencia profissional.",
  keywords: ["sobre", "about", "Joaquim Silva", "SRE", "Software Engineer", "experiencia", "carreira"],
  openGraph: {
    title: "Sobre mim | Joaquim Silva",
    description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Conheça minha trajetória e experiencia profissional.",
    url: "https://www.joaquimsnjr.tech/sobre",
    siteName: "Joaquim Silva",
    locale: "pt_BR",
    type: "profile",
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=sobre",
        width: 1200,
        height: 630,
        alt: "Sobre mim - Joaquim Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mim | Joaquim Silva",
    description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home?title=sobre"],
  },
}

export default SobrePage
