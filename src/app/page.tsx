import { Header } from "@/components/header"
import { BlogSection } from "@/components/blog-section"
import { ProjectsSection, type Project } from "@/components/projects-section"
import { Navbar } from '../components/navbar';
import { Footer } from "@/components/footer";

const projects: Project[] = [
  {
    title: "JoaquimSNJR Tech",
    slug: "joaquimsnjr-tech",
    description:
      "Meu site pessoal onde compartilho meus projetos, posts de blog e informações sobre mim. Construído com Next.js 15, TypeScript e Tailwind CSS.",
    role: "Website Pessoal",
    status: "live",
    technologies: ["react", "next.js", "tailwind css", "typescript", "vercel"],
    href: "https://joaquimsnjr.tech",
    github: "https://github.com/joaquimsnjunior/joaquimsnjr.tech",
    icon: "terminal",
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogSection />
      <ProjectsSection projects={projects} showFeatured={true} />
      <Footer />
    </>
  )
}
