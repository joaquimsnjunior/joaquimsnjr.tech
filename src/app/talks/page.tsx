import { ScrambleText } from '@/components/scramble-text'
import { Metadata } from 'next'
import Link from 'next/link'
import { Mic2, Calendar, MapPin, ArrowUpRight, Play, Users, ExternalLink } from 'lucide-react'

type Talk = {
  title: string
  event: string
  date: string
  location: string
  description: string
  href: string
  type: 'palestra' | 'workshop' | 'lightning'
  status: 'upcoming' | 'past'
  audience?: number
  slides?: string
  video?: string
}

const talks: Talk[] = [
  {
    title: "Quem Criou Tudo Antes do GitHub Existir",
    event: "All Net 2025",
    date: "Novembro 2025",
    location: "São Paulo, BR",
    description: "Uma homenagem aos pioneiros do software livre e código aberto, destacando suas contribuições fundamentais para a tecnologia moderna.",
    href: "/presentations/genios-ocultos",
    type: "palestra",
    status: "past",
    audience: 150,
  },
]

const TYPE_CONFIG = {
  palestra: { label: "palestra", className: "text-blue-400 border-blue-400/30" },
  workshop: { label: "workshop", className: "text-emerald-400 border-emerald-400/30" },
  lightning: { label: "lightning", className: "text-yellow-400 border-yellow-400/30" },
}

function TalkCard({ talk, index }: { talk: Talk; index: number }) {
  const typeConfig = TYPE_CONFIG[talk.type]

  return (
    <Link
      href={talk.href}
      className="group block border border-gray-800/60 bg-[#161616] hover:border-blue-400/50 hover:bg-[#1a1a1a] transition-all duration-300"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/40 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[10px] text-gray-400 font-mono ml-2">talks/{index + 1}</span>
        </div>

        <div className="flex items-center gap-2">
          {talk.status === 'upcoming' && (
            <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] border border-emerald-400/30 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              em breve
            </span>
          )}
          <span className={`px-2 py-0.5 text-[10px] border ${typeConfig.className}`}>
            [{typeConfig.label}]
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Arrow */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-gray-700/50 bg-gray-800/30 text-blue-400 flex-shrink-0">
              <Mic2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {talk.title}
              </h3>
              <p className="text-sm text-blue-400 mt-0.5">{talk.event}</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{talk.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{talk.location}</span>
          </div>
          {talk.audience && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{talk.audience} pessoas</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="border-l-2 border-gray-700/50 pl-3 mb-4">
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="text-gray-500">// </span>
            {talk.description}
          </p>
        </div>

        {/* Action Links */}
        {(talk.slides || talk.video) && (
          <div className="flex items-center gap-4 pt-4 border-t border-gray-800/40">
            {talk.slides && (
              <span className="flex items-center gap-1.5 text-sm text-gray-400 group-hover:text-blue-400">
                <ExternalLink className="w-3.5 h-3.5" />
                slides
              </span>
            )}
            {talk.video && (
              <span className="flex items-center gap-1.5 text-sm text-gray-400 group-hover:text-blue-400">
                <Play className="w-3.5 h-3.5" />
                vídeo
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}

function TalksPage() {
  const upcomingTalks = talks.filter(t => t.status === 'upcoming')
  const pastTalks = talks.filter(t => t.status === 'past')

  return (
    <div className="animate-fade-in-up">
      {/* Terminal Window Header */}
      <div className="border border-gray-800/60 bg-[#161616] mb-8">
        {/* Terminal Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">~/talks</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Mic2 className="w-3 h-3" />
            <span>{talks.length} talk{talks.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <ScrambleText className="font-bold leading-none" text="Palestras & Apresentações" />
          </h1>

          {/* Command Line Intro */}
          <div className="font-mono text-sm space-y-2 text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">ls</span>
              <span className="text-white">./talks</span>
            </div>
            <div className="pl-5 text-gray-300 leading-relaxed border-l-2 border-gray-800">
              Apresentações sobre <span className="text-blue-400">Cloud Native</span>,
              <span className="text-blue-400"> Go</span>,
              <span className="text-blue-400"> SRE</span> e
              <span className="text-blue-400"> Open Source</span>.
              Compartilhando conhecimento e conectando comunidades.
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Talks */}
      {upcomingTalks.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-xl font-semibold">Próximas</h2>
            </div>
          </div>
          <div className="space-y-4">
            {upcomingTalks.map((talk, index) => (
              <TalkCard key={talk.title} talk={talk} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Past Talks */}
      {pastTalks.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold text-white">Realizadas</h2>
            <span className="text-xs text-gray-500 font-mono">({pastTalks.length})</span>
          </div>
          <div className="space-y-4">
            {pastTalks.map((talk, index) => (
              <TalkCard key={talk.title} talk={talk} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Footer Terminal */}
      <div className="border border-gray-800/60 bg-[#161616] p-4">
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
          <span className="text-emerald-400">❯</span>
          <span className="text-gray-500">echo</span>
          <span className="text-gray-400">"Quer me convidar para palestrar? Entre em contato!"</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Palestras & Apresentações",
  description: "Veja as palestras e apresentações que já fiz ao longo do tempo.",
}

export default TalksPage