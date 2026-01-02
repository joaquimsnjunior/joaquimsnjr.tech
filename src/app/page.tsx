import { Header } from "@/components/header"
import { BlogSection } from "@/components/blog-section"
import { ProjectsSection, type Project } from "@/components/projects-section"
import { Navbar } from '../components/navbar'
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "~/Joaquim_Silva | SRE & Software Engineer",
  },
  description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Construindo infraestrutura que não dorme.",
  keywords: ["SRE", "Software Engineer", "Go", "Golang", "Kubernetes", "Cloud Native", "DevOps", "AWS"],
  authors: [{ name: "Joaquim Silva", url: "https://joaquimsnjr.tech" }],
  creator: "Joaquim Silva",
  openGraph: {
    title: "Joaquim Silva | SRE & Software Engineer",
    description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes. Construindo infraestrutura que não dorme.",
    url: "https://www.joaquimsnjr.tech",
    siteName: "Joaquim Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home",
        width: 1200,
        height: 630,
        alt: "Joaquim Silva - SRE & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joaquim Silva | SRE & Software Engineer",
    description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home"],
  },
}

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Joaquim Silva",
      alternateName: "joaquimsnjunior",
      description: "Engenheiro de Software & SRE focado em Cloud Native, Go e Kubernetes.",
      image: "https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png",
      url: "https://www.joaquimsnjr.tech",
      sameAs: [
        "https://github.com/joaquimsnjunior",
        "https://twitter.com/joaquimsnjunior",
      ],
      jobTitle: "SRE & Software Engineer",
      knowsAbout: ["Go", "Kubernetes", "Cloud Native", "AWS", "Terraform", "Docker"],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Header />
      <BlogSection />
      <ProjectsSection projects={projects} showFeatured={true} />
      <Footer />
    </>
  )
}
