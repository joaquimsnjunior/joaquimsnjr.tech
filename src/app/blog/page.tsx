import { ScrambleText } from "@/components/scramble-text"
import { PostsList } from "@/components/posts-list"
import { getPosts } from "@/lib/blog"
import { Metadata } from "next"

const posts = getPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog | Joaquim Silva",
    description: "Artigos sobre engenharia de software, Cloud Native, Go e sistemas distribuidos.",
    url: "https://www.joaquimsnjr.tech/blog",
    author: {
      "@type": "Person",
      name: "Joaquim Silva",
      url: "https://www.joaquimsnjr.tech",
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.metadata.title,
      description: post.metadata.description,
      datePublished: post.metadata.date,
      url: `https://www.joaquimsnjr.tech/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Joaquim Silva",
      },
    })),
  }

  return (
    <main className="animate-fade-in-up relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-10">
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          <ScrambleText className="font-semibold leading-none" text="Blog" />
        </h1>
        <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
          {posts.length} artigos
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-4 text-[11px] text-[color:var(--muted)]">
        <span className="uppercase tracking-[0.28em]">atalhos</span>
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 border border-[color:var(--border)]">/</kbd>
          <span>buscar</span>
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 border border-[color:var(--border)]">up</kbd>
          <kbd className="px-2 py-1 border border-[color:var(--border)]">down</kbd>
          <span>navegar</span>
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 border border-[color:var(--border)]">enter</kbd>
          <span>abrir</span>
        </div>
      </div>

      <PostsList posts={posts} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre engenharia de software, Cloud Native, Go e sistemas distribuidos. Compartilhando conhecimento e experiencias.",
  keywords: ["blog", "artigos", "Go", "Golang", "Cloud Native", "Kubernetes", "engenharia de software", "SRE"],
  openGraph: {
    title: "Blog | Joaquim Silva",
    description: "Artigos sobre engenharia de software, Cloud Native, Go e sistemas distribuidos.",
    url: "https://www.joaquimsnjr.tech/blog",
    siteName: "Joaquim Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=blog",
        width: 1200,
        height: 630,
        alt: "Blog - Joaquim Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Joaquim Silva",
    description: "Artigos sobre engenharia de software, Cloud Native, Go e sistemas distribuidos.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home?title=blog"],
  },
}
