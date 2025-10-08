import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

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

const projectItems = [
  {
    title: "github profile default",
    role: "profile github",
    description:
      "logo menos vai ter um projeto aqui",
    href: "https://github.com/joaquimsnjunior",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <BlogSection />
      <SectionList
        title="projetos"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="todos os projetos"
      />
      <LinksSection />
    </>
  )
}
