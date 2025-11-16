import { ScrambleText } from '@/components/scramble-text'
import { Item } from '@/components/section-list'
import { SectionListNotGrouped } from '@/components/section-list-not-grouped'
import { Metadata } from 'next'
import React from 'react'

const workItems: Item[] = [
  {
    title: "ZinwellCorp",
    role: "Suporte Técnico",
    period: "jul 2023 - jan 2024",
    description: "Execução de testes completos em produtos e elaboração de relatórios técnicos, suporte a clientes e treinamento sobre uso de sistemas e tecnologias.",
    href: "https://www.tbsmart.com.br/",
  },
  {
    title: "ZinwellCorp - TB Smart",
    role: "Suporte Técnico | Autônomo",
    period: "jan 2024 - jan 2025",
    description: "Durante minha atuação na Zinwell, desenvolvi e mantive sistemas backend, aplicando princípios de Clean Architecture e microserviços para garantir alto desempenho e escalabilidade. Atuei fortemente em Cloud Computing, com foco em Terraform, EKS e pipelines CI/CD voltadas a ambientes de missão crítica e com grande volume de chamados. Além disso, implementei automações de deploy utilizando Docker e Kubernetes, assegurando eficiência operacional, segurança e alta disponibilidade das aplicações.",
    href: "https://www.tbsmart.com.br/",
  },
  {
    title: "All Net Educação",
    role: "Educador | Programação | Marketing & Projetos Web",
    period: "jan 2025 - atual",
    description:
      "Atuo como educador e mentor técnico, formando novos profissionais em programação backend, arquitetura de software e boas práticas de desenvolvimento. Lidero projetos práticos com Golang e tecnologias web modernas, conectando teoria e desafios reais do mercado. Responsável por materiais técnicos e ambientes de simulação, promovendo aprendizado aplicado e foco em qualidade e escalabilidade.",
    href: "https://allneteducacao.com.br/",
  },
]

function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">
        <ScrambleText className="font-semibold" text="Sobre" />
      </h1>
      <p className="leading-relaxed animate-fade-in-up">
        Possuo experiência sólida em Cloud Computing, com foco em Terraform, EKS, clusters e esteiras CI/CD voltadas para ambientes de missão crítica e alto volume de operações. Atuo no desenvolvimento backend em Golang, aplicando Clean Architecture e microserviços, além de criar automações de deploy com Docker e Kubernetes, garantindo segurança, escalabilidade e alta disponibilidade.
        Otimizei integrações com PostgreSQL e gRPC, reduzindo significativamente os tempos de resposta e aumentando a eficiência operacional dos sistemas. Também realizo testes completos, relatórios técnicos, suporte a clientes e treinamentos sobre o uso de tecnologias aplicadas no dia a dia da engenharia de software.
        Atuo ainda como educador e mentor técnico, formando novos profissionais em programação backend, arquitetura de software e boas práticas de desenvolvimento. Lidero projetos práticos com Golang e tecnologias web modernas, conectando teoria a desafios reais do mercado. Sou responsável pela criação de materiais técnicos e pela manutenção de ambientes de simulação, sempre com foco em qualidade, escalabilidade e performance.
      </p>
      <div className="mt-8">
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