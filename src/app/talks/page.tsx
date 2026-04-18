import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"
import Link from "next/link"

type Talk = {
  title: string
  event: string
  date: string
  location: string
  description: string
  href: string
  type: "palestra" | "workshop" | "lightning"
  status: "upcoming" | "past"
  audience?: number
  slides?: string
  video?: string
}

const talks: Talk[] = [
  {
    title: "Quem Criou Tudo Antes do GitHub Existir",
    event: "All Net 2025",
    date: "Novembro 2025",
    location: "Sao Paulo, BR",
    description: "Uma homenagem aos pioneiros do software livre e codigo aberto, destacando suas contribuicoes fundamentais para a tecnologia moderna.",
    href: "/presentations/genios-ocultos",
    type: "palestra",
    status: "past",
    audience: 47,
  },
]

const TYPE_LABEL = {
  palestra: "palestra",
  workshop: "workshop",
  lightning: "lightning",
}

function TalkCard({ talk }: { talk: Talk }) {
  return (
    <Link href={talk.href} className="surface surface-hover block p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
          {talk.title}
        </h3>
        <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {TYPE_LABEL[talk.type]}
        </span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
        {talk.event}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[color:var(--muted)]">
        <span>{talk.date}</span>
        <span className="text-[color:var(--border)]">•</span>
        <span>{talk.location}</span>
        {talk.audience && (
          <>
            <span className="text-[color:var(--border)]">•</span>
            <span>{talk.audience} pessoas</span>
          </>
        )}
      </div>
      <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
        {talk.description}
      </p>
      {(talk.slides || talk.video) && (
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          {talk.slides && (
            <span className="link-accent">slides</span>
          )}
          {talk.video && (
            <span className="link-accent">video</span>
          )}
        </div>
      )}
    </Link>
  )
}

function TalksPage() {
  const upcomingTalks = talks.filter((talk) => talk.status === "upcoming")
  const pastTalks = talks.filter((talk) => talk.status === "past")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Palestras e Apresentações  ",
    description: "Palestras sobre Cloud Native, Go, SRE e Open Source.",
    url: "https://www.joaquimsnjr.tech/talks",
    author: {
      "@type": "Person",
      name: "Joaquim Silva",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: talks.map((talk, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: talk.title,
          description: talk.description,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: talk.status === "upcoming"
            ? "https://schema.org/EventScheduled"
            : "https://schema.org/EventCompleted",
          location: {
            "@type": "Place",
            name: talk.location,
          },
          organizer: {
            "@type": "Organization",
            name: talk.event,
          },
          performer: {
            "@type": "Person",
            name: "Joaquim Silva",
          },
        },
      })),
    },
  }

  return (
    <div className="animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-10">
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          <ScrambleText className="font-semibold leading-none" text="Palestras e Apresentações" />
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
          Apresentacoes sobre Cloud Native, Go, SRE e Open Source. Compartilhando conhecimento e conectando comunidades.
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
          {talks.length} talks
        </p>
      </div>

      {upcomingTalks.length > 0 && (
        <div className="mb-10">
          <p className="kicker">Proximas</p>
          <div className="mt-4 space-y-4">
            {upcomingTalks.map((talk) => (
              <TalkCard key={talk.title} talk={talk} />
            ))}
          </div>
        </div>
      )}

      {pastTalks.length > 0 && (
        <div className="mb-10">
          <p className="kicker">Realizadas</p>
          <div className="mt-4 space-y-4">
            {pastTalks.map((talk) => (
              <TalkCard key={talk.title} talk={talk} />
            ))}
          </div>
        </div>
      )}

      <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
        Quer me convidar para palestrar? Entre em contato.
      </p>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Palestras e Apresentações",
  description: "Palestras sobre Cloud Native, Go, SRE e Open Source. Compartilhando conhecimento e conectando comunidades.",
  keywords: ["palestras", "talks", "apresentacoes", "Go", "Cloud Native", "SRE", "Open Source", "engenharia de software", "sistemas distribuídos"],
  openGraph: {
    title: "Palestras e Apresentações | Joaquim Silva",
    description: "Palestras sobre Cloud Native, Go, SRE e Open Source. Compartilhando conhecimento e conectando comunidades.",
    url: "https://www.joaquimsnjr.tech/talks",
    siteName: "Joaquim Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.joaquimsnjr.tech/og/home?title=talks",
        width: 1200,
        height: 630,
        alt: "Palestras e Apresentacoes - Joaquim Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palestras e Apresentacoes | Joaquim Silva",
    description: "Palestras sobre Cloud Native, Go, SRE e Open Source.",
    creator: "@joaquimsnjunior",
    images: ["https://www.joaquimsnjr.tech/og/home?title=talks"],
  },
}

export default TalksPage
