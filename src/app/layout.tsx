import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import Transition from "@/components/transition"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joaquimsnjr.tech"),
  title: {
    default: "~/Joaquim_Silva",
    template: "cd ~/%s",
  },
  description: "Meu cantinho na internet.",
  openGraph: {
    title: "Joaquim Silva",
    description: "Meu cantinho na internet.",
    url: "https://www.joaquimsnjr.tech",
    siteName: "Joaquim Silva",
    locale: "pt-BR",
    type: "website",
    images: ["https://www.joaquimsnjr.tech/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Joaquim Silva",
    card: "summary_large_image",
    creator: "@joaquimsnjunior",
  },
  alternates: {
    canonical: "https://www.joaquimsnjr.tech",
    types: {
      "application/rss+xml": "https://www.joaquimsnjr.tech/feed.xml",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joaquim Silva",
    url: "https://www.joaquimsnjr.tech",
    image: "https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png",
    sameAs: [
      "https://github.com/joaquimsnjunior",
      "https://twitter.com/joaquimsnjunior",
      "https://linkedin.com/in/joaquimsnjunior",
    ],
    jobTitle: "SRE & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "All Net Educação",
    },
    knowsAbout: ["Go", "Kubernetes", "Cloud Native", "AWS", "SRE", "DevOps"],
    alumniOf: {
      "@type": "Organization",
      name: "ETEC",
    },
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Joaquim Silva",
    alternateName: "joaquimsnjr.tech",
    url: "https://www.joaquimsnjr.tech",
    description: "Blog pessoal sobre engenharia de software, Cloud Native, Go e sistemas distribuídos.",
    author: {
      "@type": "Person",
      name: "Joaquim Silva",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.joaquimsnjr.tech/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono overflow-x-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 overflow-hidden md:overflow-visible">
          <Transition>{children}</Transition>
        </div>
      </body>
    </html>
  )
}
