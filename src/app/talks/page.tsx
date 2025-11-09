import { ScrambleText } from '@/components/scramble-text'
import React from 'react'

function Talks() {
  return (
    <div>
      <h1 className="text-4xl mb-8 text-white">
        <ScrambleText className="font-semibold" text="Palestras & Apresentações" />
      </h1>
      <p className="leading-relaxed animate-fade-in-up">
        Em breve, esta seção será atualizada com minhas palestras e apresentações recentes. Fique atento para conteúdos sobre SRE, DevOps, Cloud Computing, Golang e muito mais!
      </p>
    </div>
  )
}

export default Talks