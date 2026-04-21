import { notFound } from "next/navigation"
import { MDX } from "./mdx"
import { getPostBySlug } from "@/lib/blog"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    return
  }

  const publishedTime = formatDate(post.metadata.date)
  
  // Usa coverImage do post se existir, senão gera dinamicamente
  const ogImageUrl = post.metadata.coverImage 
    ? post.metadata.coverImage 
    : `https://www.joaquimsnjr.tech/og/blog?title=${encodeURIComponent(post.metadata.title)}`

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `https://www.joaquimsnjr.tech/blog/${post.slug}`,
      siteName: "Joaquim Silva",
      locale: "pt_BR",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@joaquimsnjunior",
      images: [ogImageUrl],
    },
  }
}

export default async function Post({ params }: PageProps) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  // console.log(post) joaquimsnjr.tech
  return (
    <section className="animate-fade-in-up max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: `https://www.joaquimsnjr.tech/og/blog?title=${
              post.metadata.title
            }&top=${formatDate(post.metadata.date)}`,
            url: `https://www.joaquimsnjr.tech/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Joaquim S. N. Junior",
            },
          }),
        }}
      />

      <header className="mb-10">
        <p className="kicker">Post</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          {post.metadata.title}
        </h1>
        {post.metadata.description && (
          <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
            {post.metadata.description}
          </p>
        )}
        <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
          {formatDate(post.metadata.date)}
        </div>
      </header>

      <article className="prose max-w-none prose-headings:text-[color:var(--foreground)] prose-p:text-[color:var(--muted)] prose-strong:text-[color:var(--foreground)] prose-a:text-[color:var(--accent)]">
        <MDX source={post.content} />
      </article>
    </section>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
