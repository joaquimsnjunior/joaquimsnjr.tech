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

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `https://www.joaquimsnjr.tech/blog/${post.slug}`,
      images: [
        {
          url: `https://www.joaquimsnjr.tech/og/blog?title=${post.metadata.title}`,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@joaquimsnjunior",
      images: [
        `https://www.joaquimsnjr.tech/og/blog?title=${post.metadata.title}&top=${publishedTime}`,
      ],
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
    <section className="animate-fade-in-up">
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

      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-blue-400 mr-2">*</span>
        {post.metadata.title}
      </h1>

      <div className="mb-8 flex items-center justify-between text-sm text-gray-400">
        <span>{formatDate(post.metadata.date)}</span>
      </div>

      <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-white hover:prose-a:underline">
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
