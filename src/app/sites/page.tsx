import { ScrambleText } from '@/components/scramble-text'
import { div } from 'framer-motion/client'
import React from 'react'

function Site() {
  return (
    <div className="container">
      <div className="mb-10">
        <p className="kicker">Sites</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
            <ScrambleText className="font-semibold leading-none" text="Outros lugares na web" />
          </h1>
          <p className="text-sm text-[color:var(--muted)]">
            Uma lista de sites que eu gosto de visitar.
          </p>
      </div>
      <div className="mb-5 space-y-6">
        <h1 className="text-sm leading-relaxed">
          Sites
        </h1>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)]">
          <li>
            <a href="http://www.duckduckgo.com" target="_blank" rel="noopener noreferrer" className="underline">
              duckduckgo.com
            </a> - Mecanismo de busca focado em privacidade, sem rastreamento de usuários.
          </li>
          <li>
            <a href="http://www.google.com/" target="_blank" rel="noopener noreferrer" className="underline">
              google.com
            </a> - Mecanismo de busca líder no mercado.
          </li>
          <li>
            <a href="http://news.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="underline">
              news.ycombinator.com
            </a> - Comunidade de empreendedores e desenvolvedores.
          </li>
          <li>
            <a href="http://www.reddit.com/" target="_blank" rel="noopener noreferrer" className="underline">
              reddit.com
            </a> - Plataforma de discussão e compartilhamento de conteúdo.
          </li>
          <li>
            <a href="http://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="underline">
              producthunt.com
            </a> - Descoberta de novos produtos e startups.
          </li>
          <li>
            <a href="http://www.hackernews.com/" target="_blank" rel="noopener noreferrer" className="underline">
              hackernews.com
            </a> - Notícias e discussões sobre tecnologia e startups.
          </li>
          <li>
            <a href="http://www.medium.com/" target="_blank" rel="noopener noreferrer" className="underline">
              medium.com
            </a> - Plataforma de publicação de artigos e histórias.
          </li>
          <li>
            <a href="http://www.github.com/" target="_blank" rel="noopener noreferrer" className="underline">
              github.com
            </a> - Hospedagem de código-fonte e colaboração em projetos de software.
          </li>
          <li>
            <a href="https://sre.google/" target="_blank" rel="noopener noreferrer" className="underline">
              sre.google
            </a> - Recursos e práticas de engenharia de confiabilidade.
          </li>
          <li>
            <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" className="underline">
              roadmap.sh
            </a> - Plataforma de planejamento de carreira em tecnologia.
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="underline">
              youtube.com
            </a> - Plataforma de vídeo e conteúdo multimídia.
          </li>
          <li>
            <a href="https://stackoverflow.blog/" target="_blank" rel="noopener noreferrer" className="underline">
              stackoverflow.blog
            </a> - Blog da comunidade Stack Overflow.
          </li>
          <li>
            <a href="https://www.geoguessr.com/" target="_blank" rel="noopener noreferrer" className="underline">
              geoguessr.com
            </a> - Jogo de adivinhação de localização.
          </li>
          <li>
            <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" className="underline">
              nature.com
            </a> - Revista científica de renome.
          </li>
          <li>
            <a href="https://futurism.com/" target="_blank" rel="noopener noreferrer" className="underline">
              futurism.com
            </a> - Notícias e conteúdos sobre tecnologia e ciência.
          </li>
          <li>
            <a href="https://netflix.com/" target="_blank" rel="noopener noreferrer" className="underline">
              netflix.com
            </a> - Plataforma de streaming de vídeo.
          </li>
          <li>
            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="underline">
              chatgpt.com
            </a> - Plataforma de inteligência artificial para conversas e assistentes virtuais.
          </li>
          <li>
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="underline">
              claude.ai
            </a> - Plataforma de inteligência artificial para conversas e assistentes virtuais.
          </li>
          <li>
            <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer" className="underline">
              notebooklm.google.com
            </a> - Plataforma de inteligência artificial para organização e gerenciamento de informações.
          </li>
        </ul>
      </div>

      <div className="mt-10 mb-5 space-y-6">
        <h1 className="text-sm leading-relaxed">
          Blogs
        </h1>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)]">
          <li>
            <a href="https://www.brendangregg.com/index.html" target="_blank" rel="noopener noreferrer" className="underline">
              brendangregg.com
            </a> - Site do Brendan Gregg, especialista em performance e sistemas.
          </li>
          <li>
            <a href="https://netflixtechblog.com/" target="_blank" rel="noopener noreferrer" className="underline">
              netflixtechblog.com
            </a> - Blog da comunidade de engenharia da Netflix.
          </li>
          <li>
            <a href="https://medium.com/mercadolibre-tech" target="_blank" rel="noopener noreferrer" className="underline">
              medium.com/mercadolibre-tech
            </a> - Blog da comunidade de engenharia da Mercado Livre.
          </li>
          <li>
            <a href="https://medium.com/picpay" target="_blank" rel="noopener noreferrer" className="underline">
              medium.com/picpay
            </a> - Blog da comunidade de engenharia da PicPay.
          </li> 
          <li>
            <a href="https://eltonminetto.dev/" target="_blank" rel="noopener noreferrer" className="underline">
              eltonminetto.dev
            </a> - Blog do Elton Minetto, desenvolvedor e pesquisador.
          </li>
          <li>
            <a href="https://akitaonrails.com/" target="_blank" rel="noopener noreferrer" className="underline">
              akitaonrails.com
            </a> - Blog do Akita on Rails, especialista em desenvolvimento com Ruby on Rails.
          </li>
          <li>
            <a href="https://zamariola.com.br/" target="_blank" rel="noopener noreferrer" className="underline">
              zamariola.com.br
            </a> - Site do Zamariola, especialista em desenvolvimento e tecnologia.
          </li>
        </ul>
      </div>

      <div className="mt-10 mb-5 space-y-6">
        <h1 className="text-sm leading-relaxed">
          Outros
        </h1>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)]">
          <li>
            <a href="https://www.twitch.tv/theprimeagen" target="_blank" rel="noopener noreferrer" className="underline">
              theprimeagen
            </a> - Canal da Twitch do ThePrimeagen, especialista em desenvolvimento e tecnologia.
          </li>
          <li>
            <a href="https://www.youtube.com/@Akitando" target="_blank" rel="noopener noreferrer" className="underline">
              Akitando
            </a> - Canal do YouTube do saudoso Akita, especialista em desenvolvimento e tecnologia.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Site