import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { Navbar } from '../components/navbar';
import { Footer } from "@/components/footer";



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
      <Navbar />
      <Header />
      <BlogSection />
      <SectionList
        title="Projetos"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="todos os projetos"
      />
      <Footer />
    </>
  )
}
