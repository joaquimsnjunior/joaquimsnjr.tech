import { ScrambleText } from '@/components/scramble-text'
import { Metadata } from 'next'
import { Briefcase, GraduationCap, Code2, ArrowUpRight, MapPin, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
    title: "All Net Educação",
    role: "Educador & Mentor Técnico",
    period: "jan 2025 - atual",
    description: "Liderança técnica e formação de talentos em Backend (Go) e Arquitetura de Software. Responsável por traduzir desafios reais de mercado em projetos práticos, focando em Clean Code, escalabilidade e boas práticas de desenvolvimento moderno.",
    href: "https://allneteducacao.com.br/",
    technologies: ["Go", "Clean Architecture", "Mentoria"],
    current: true,
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Software Engineer | DevOps",
    period: "jan 2024 - jan 2025",
    description: "Arquitetura e desenvolvimento de sistemas de missão crítica em Go e Clean Architecture. Implementação de infraestrutura como código (Terraform) e orquestração de containers (Kubernetes/EKS), otimizando pipelines CI/CD para operações de alto volume.",
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
  { category: "Languages", items: ["Go", "TypeScript", "Python", "Bash"] },
  { category: "Cloud & Infra", items: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform"] },
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
      description: "Engenheiro de Software & SRE. Especialista em projetar sistemas de alto volume onde disponibilidade e performance são inegociáveis.",
      image: "https://res.cloudinary.com/dy5xyare1/image/upload/v1767414405/Profile_01_t8clcl.jpg",
      url: "https://www.joaquimsnjr.tech",
      sameAs: [
        "https://github.com/joaquimsnjunior",
        "https://twitter.com/joaquimsnjunior",
      ],
      knowsAbout: ["Go", "TypeScript", "Python", "AWS", "Kubernetes", "Docker", "Terraform", "PostgreSQL", "Redis"],
      worksFor: {
        "@type": "Organization",
        name: "All Net Educação",
        url: "https://allneteducacao.com.br/",
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Educador & Mentor Técnico",
          occupationLocation: {
            "@type": "City",
            name: "São Paulo",
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
      {/* Terminal Window - About Header */}
      <div className="border border-gray-800/60 bg-[#161616] mb-8">
        {/* Terminal Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">~/sobre</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <MapPin className="w-3 h-3" />
            São Paulo, BR
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <ScrambleText className="font-bold leading-none" text="Sobre mim" />
          </h1>

          {/* Command Line Bio */}
          <div className="font-mono text-sm space-y-3 text-gray-400 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">whoami</span>
            </div>
            <div className="pl-5 text-gray-300 leading-relaxed">
              Engenheiro de Software & SRE
            </div>

            <div className="flex items-start gap-2 mt-4">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">cat</span>
              <span className="text-white">bio.md</span>
            </div>
            <div className="pl-5 text-gray-300 leading-relaxed border-l-2 border-gray-800">
              Especialista em projetar sistemas de alto volume onde disponibilidade e performance são inegociáveis.
              Unindo arquitetura limpa à automação de infraestrutura, entrego soluções que escalam e mentoro times que buscam excelência técnica.
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid - JSON Style */}
      <div className="border border-gray-800/60 bg-[#161616] mb-8">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <Code2 className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400 font-mono">skills.json</span>
        </div>

        <div className="p-5 font-mono text-sm">
          <p className="text-gray-600">{'{'}</p>
          {skills.map((skill, idx) => (
            <div key={skill.category} className="ml-4">
              <span className="text-blue-400">"{skill.category}"</span>
              <span className="text-gray-600">: [</span>
              <div className="ml-4">
                {skill.items.map((item, i) => (
                  <span key={item}>
                    <span className="text-emerald-400">"{item}"</span>
                    {i < skill.items.length - 1 && <span className="text-gray-600">, </span>}
                  </span>
                ))}
              </div>
              <span className="text-gray-600">]{idx < skills.length - 1 ? ',' : ''}</span>
            </div>
          ))}
          <p className="text-gray-600">{'}'}</p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl font-semibold text-white">Experiência</h2>
        </div>

        <div className="space-y-4">
          {workItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-800/60 bg-[#161616] hover:border-blue-400/50 hover:bg-[#1a1a1a] transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/40 bg-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-500" />
                    <span className="w-2 h-2 rounded-full bg-gray-500" />
                    <span className="w-2 h-2 rounded-full bg-gray-500" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono ml-2">work/{index + 1}</span>
                </div>

                {item.current && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] border border-green-400/30 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    atual
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.description}
                </p>

                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] border border-gray-700/50 text-gray-400 bg-gray-800/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Terminal */}
      <div className="border border-gray-800/60 bg-[#161616] p-4">
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
          <span className="text-emerald-400">❯</span>
          <span className="text-gray-500">echo</span>
          <span className="text-gray-400">"Obrigado por visitar!"</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Conheça minha trajetória e experiência profissional.",
  keywords: ["sobre", "about", "Joaquim Silva", "SRE", "Software Engineer", "experiência", "carreira"],
  openGraph: {
    title: "Sobre mim | Joaquim Silva",
    description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Conheça minha trajetória e experiência profissional.",
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