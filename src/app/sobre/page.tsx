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
    role: "Educador & Mentor Técnico",
    period: "jan 2025 - atual",
    description: "Liderança técnica e formação de talentos em Backend (Go) e Arquitetura de Software. Responsável por traduzir desafios reais de mercado em projetos práticos, focando em Clean Code, escalabilidade e boas praticas de desenvolvimento moderno.",
    href: "https://allneteducacao.com.br/",
    technologies: ["Go", "Clean Architecture", "Mentoria"],
    current: true,
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Software Engineer | DevOps",
    period: "jan 2024 - jan 2025",
    description: "Arquitetura e desenvolvimento de sistemas de missão critica em Go e Clean Architecture. Implementação de infraestrutura como codigo (Terraform) e orquestração de containers (Kubernetes/EKS), otimizando pipelines CI/CD para operações de alto volume.",
    href: "https://www.tbsmart.com.br/",
    technologies: ["Go", "Kubernetes", "Terraform", "AWS"],
  },
  {
    title: "ZinwellCorp",
    role: "Suporte Técnico Especializado",
    period: "jul 2023 - jan 2024",
    description: "Garantia de qualidade e eficiência operacional através de testes rigorosos, elaboração de relatórios técnicos e suporte estratégico a clientes em tecnologias de hardware e software.",
    href: "https://www.tbsmart.com.br/",
    technologies: ["QA", "Documentação", "Suporte"],
  },
]

const skills = [
  { category: "Languages", items: ["Golang", "TypeScript"] },
  { category: "Cloud & Infra", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "Cassandra", "MongoDB"] },
  { category: "Practices", items: ["Clean Architecture", "CI/CD", "Observability", "SRE"] },
]

function SobrePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: "Joaquim Silva",
      jobTitle: "SRE & Software Engineer",
      description: "Engenheiro de Software. Especialista em projetar sistemas de alto volume onde disponibilidade e performance são inegociáveis.",
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
          Engenheiro de Software & SRE. Especialista em projetar sistemas de alto volume onde disponibilidade e performance são inegociáveis. Unindo arquitetura limpa a automação de infraestrutura, entrego soluções que escalam.
        </p>
      </div>

      <div className="mb-10">
        <p className="kicker">Skills</p>
        <div className="surface p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
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
        <p className="kicker">Experiencia</p>
        <div className="space-y-4">
          {workItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface surface-hover block p-5"
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
