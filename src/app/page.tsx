import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"



const projectItems = [
  {
    title: "JoaquimSNJR Tech",
    role: "Website Pessoal",
    description:
      "Meu site pessoal onde compartilho meus projetos, posts de blog e informações sobre mim.",
    href: "https://github.com/joaquimsnjunior/joaquimsnjr.tech",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <BlogSection />
      <SectionList
        title="Projetos"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="todos os projetos"
      />
    </>
  )
}
