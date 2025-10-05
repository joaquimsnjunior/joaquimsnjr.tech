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
    description: "Desenvolvimento de novas funcionalidades em sistemas backend com Golang e PostgreSQL. implementação de microservices com Docker e Kubernetes, aplicando boas práticas de segurança.",
    href: "https://www.tbsmart.com.br/",
  },
  {
    title: "All Net Educação",
    role: "Educador | Programação | Marketing & Projetos Web",
    period: "jan 2025 - atual",
    description:
      "Lidero projetos educacionais em tecnologia, preparando alunos para o mercado de TI, ensino fundamentos de programação, backend e boas práticas de desenvolvimento.",
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
