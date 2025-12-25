import { ScrambleText } from '@/components/scramble-text'
import { Item } from '@/components/section-list'
import { SectionListNotGrouped } from '@/components/section-list-not-grouped'
import { Metadata } from 'next'
import React from 'react'

const workItems: Item[] = [
  {
    title: "All Net Educação",
    role: "Educador & Mentor Técnico",
    period: "jan 2025 - atual",
    description: "Liderança técnica e formação de talentos em Backend (Go) e Arquitetura de Software. Responsável por traduzir desafios reais de mercado em projetos práticos, focando em Clean Code, escalabilidade e boas práticas de desenvolvimento moderno.",
    href: "https://allneteducacao.com.br/",
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Software Engineer | DevOps",
    period: "jan 2024 - jan 2025",
    description: "Arquitetura e desenvolvimento de sistemas de missão crítica em Go e Clean Architecture. Implementação de infraestrutura como código (Terraform) e orquestração de containers (Kubernetes/EKS), otimizando pipelines CI/CD para operações de alto volume.",
    href: "https://www.tbsmart.com.br/",
  },
  {
    title: "ZinwellCorp",
    role: "Suporte Técnico Especializado",
    period: "jul 2023 - jan 2024",
    description: "Garantia de qualidade e eficiência operacional através de testes rigorosos, elaboração de relatórios técnicos e suporte estratégico a clientes em tecnologias de hardware e software.",
    href: "https://www.tbsmart.com.br/",
  },
]

function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white underline decoration-blue-400 decoration-4">
        <ScrambleText className="font-semibold leading-none" text="Sobre mim" />
      </h1>
      <p className="leading-relaxed animate-fade-in-up">
       Engenheiro de Software & SRE. Foco em Cloud Native, Go e Kubernetes. Especialista em projetar sistemas de alto volume onde disponibilidade e performance são inegociáveis. Unindo arquitetura limpa à automação de infraestrutura, entrego soluções que escalam e mentoro times que buscam excelência técnica.
      </p>
      <div className="mt-10">
        <SectionListNotGrouped title="Work" items={workItems} />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Alguns dos projetos em que trabalhei.",
}

export default page