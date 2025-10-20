import { ScrambleText } from '@/components/scramble-text'
import { Item, SectionList } from '@/components/section-list'
import React from 'react'

const workItems: Item[] = [
  {
    title: "ZinwellCorp",
    role: "Ajudante Geral",
    period: "jul 2023 - jan 2024",
    description: "Execução de testes completos em produtos e elaboração de relatórios técnicos, suporte a clientes e treinamento sobre uso de sistemas e tecnologias.",
    href: "https://www.tbsmart.com.br/",
  },
  {
    title: "Freelancer",
    role: "Desenvolvedor backend",
    period: "jan 2024 - jan 2025",
    description: "Desenvolvi sistemas backend em Golang com foco em clean architecture e alta performance. Implementei microserviços e automações de deploy com Docker e Kubernetes, garantindo segurança e escalabilidade. Otimizei integrações com PostgreSQL e gRPC, reduzindo tempo de resposta e aumentando a eficiência.",
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
        <span className="text-blue-400 mr-2">*</span>
        <ScrambleText text="sobre" />
      </h1>
      <p className="leading-relaxed animate-fade-in-up">
        Mais do que escrever código, gosto de resolver problemas de verdade.
        Construir sistemas que aguentam o crescimento, que são rápidos, estáveis e bem pensados.
        Trabalho com Golang e me encontrei no universo dos microserviços e das aplicações cloud-native.
        Mas o que mais me motiva é ensinar. Ver alguém entender um conceito complicado e soltar aquele “ah, agora entendi” é uma das melhores sensações que existem.
        Hoje, além de desenvolver, também ensino backend e boas práticas de desenvolvimento.
        Acredito que tecnologia boa é aquela que simplifica a vida das pessoas e que compartilhar conhecimento é o que move a comunidade.
      </p>
      <div className="mt-8">
        <SectionList title="work" items={workItems} />
      </div>
    </div>
  )
}

export default page