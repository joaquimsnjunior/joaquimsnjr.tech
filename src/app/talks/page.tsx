import { ScrambleText } from '@/components/scramble-text'
import { Item, SectionList } from '@/components/section-list'
import { SectionListNotGrouped } from '@/components/section-list-not-grouped'
import { Metadata } from 'next'
import React from 'react'

const talksItems: Item[] = [
  {
    title: "Quem Criou Tudo Antes do GitHub Existir",
    role: "Palestra - All Net 2025",
    period: "Novembro 2025",
    description: "Uma homenagem aos pioneiros do software livre e código aberto, destacando suas contribuições fundamentais para a tecnologia moderna.",
    href: "/presentations/genios-ocultos",
  },
]

function Talks() {
  return (
    <div>
      <h1 className="text-4xl mb-8 text-white">
        <ScrambleText className="font-semibold" text="Palestras & Apresentações" />
      </h1>
      {/* Lista de palestras */}
      <div className="mt-8">
        <SectionListNotGrouped title='' items={talksItems} />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Palestras & Apresentações",
  description: "Veja as palestras e apresentações que já fiz ao longo do tempo.",
}


export default Talks