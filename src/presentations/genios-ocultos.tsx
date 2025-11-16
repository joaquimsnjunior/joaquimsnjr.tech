import React from "react"

/**
 * Demo presentation
 * Exporta um array `slides` contendo JSX. Também exporta `notes` e `meta`.
 * Você pode criar novas apresentações adicionando um novo arquivo em `src/presentations/`.
 */
export const meta = {
  title: "Quem Criou Tudo Antes do GitHub Existir",
}

export const notes: (string | undefined)[] = [
  "Boas-vindas — Essa palestra é sobre gênios ocultos que criaram tudo antes do GitHub.",
]

export const slides: React.ReactNode[] = [
  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763253397/6b58fe28-a8c8-4fce-8a3a-8e7899fee856.png" alt="Gênios Ocultos" width={250} height={250}/>
        <p className="text-2xl">Como mentes pouco conhecidas moldaram o mundo digital que vivemos hoje.</p>
      </div>
    </section>
  ),

  (
    <section>
      <h1 className="text-lg font-semibold">Por que falar deles?</h1>
      <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
        <li>A maioria das inovações veio de pessoas fora dos holofotes</li>
        <li>Ideias revolucionárias começaram com problemas reais</li>
        <li>Sem esses nomes, o mundo digital moderno não existiria</li>
      </ul>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div>
          <h1 className="text-lg font-semibold">A Base da Inovação</h1>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763265304/giphy_1_zx1jie.gif" alt="meme linux" width={310} height={310} />
        </div>
      </div>
      <span className="text-2xl">O Linux nasceu como um hobby…</span>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Linus Torvalds</h1>
          <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
            <li>Criador do Linux, base da infraestrutura mundial</li>
            <li>Criador do Git, pilar do desenvolvimento moderno</li>
            <li>Defensor ferrenho de código limpo e discussões diretas</li>
          </ul>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763255310/6cb4debd-0788-4802-8ca5-09c34d131342.png" alt="Linus Torvalds" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763256731/f6d632f1-cc83-4b7e-b0e5-a419f5ecbc35.png" alt="Margaret Hamilton" width={290} height={290} />
        </div>
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Margaret Hamilton</h1>
          <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
            <li>Criou o termo Engenharia de Software</li>
            <li>Líder do Software do Programa Espacial da NASA</li>
            <li>Desenvolveu o software de navegação do Apollo</li>
          </ul>
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763257049/126b3dd1-a2c7-4486-8570-57737f083a35.png" alt="Margaret Hamilton" width={380} height={380} />
        <p className="text-2xl">Seu trabalho salvou as missões Apollo de falhas catastróficas.</p>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex justify-between items-center gap-8">
        <h1 className="text-lg font-semibold">vem aí...</h1>
      </div>
    </section>
  ),

  (
    <section>
      <h1 className="text-lg font-semibold">Os Pais do C</h1>
      <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
        <li>Desenvolveram a linguagem C, base de muitas tecnologias modernas</li>
        <li>Contribuíram para o desenvolvimento do Unix, precursor dos sistemas operacionais atuais</li>
        <li>Suas inovações influenciaram diretamente o design de linguagens como C++, Java e Python</li>
      </ul>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763256891/e9023954-ed4d-4a03-aacc-04c49ae4d882.png" alt="Chris e Greg" width={370} height={370} />
        <h1 className="text-lg text-blue-400 font-semibold">Ken Thompson & Dennis Ritchie</h1>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763257840/10a4a533-f43c-42f1-839f-e273a8ddc488.png" alt="Ken Thompson & Dennis Ritchie" />
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg text-red-600 font-semibold">Spoiler</h1>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763258247/9b91956e-eb2b-4afe-908b-d49b1b3b6d21.png" alt="Python" />
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Guido van Rossum</h1>
          <p>O Criador do Python, a linguagem que democratizou a programação</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763258651/b527e8e2-d55d-4749-b152-1ce7f080b4b6.png" alt="Guido van Rossum" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Legado</h1>
        <pre className="bg-gray-800 p-4 rounded mt-3 overflow-auto text-2xl">{`print("hello world!")`}</pre>
        <p className="text-lg text-blue-400">IA · Ciência de Dados · Automação · Backend · Educação · DevOps</p>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763259804/344151a7-ed2d-4736-82c5-a3819e880310.png" alt="Nome Python" width={490} height={490} />
        <p className="text-2xl">Monty Python</p>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Com vocês...</h1>
      </div>
    </section>
  ),

   (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763260596/7da14880-e25d-4f26-83f4-e5fc22343ef3.png" alt="Grace Hopper" />
        </div>
        <div className="max-w-lg p-8">
          <h1 className="text-lg font-semibold text-blue-400">Grace Hopper</h1>
          <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
            <li>Desenvolveu o primeiro compilador, traduzindo linguagem humana para código de máquina</li>
            <li>Popularizou o termo "bug" após remover um inseto real de um computador</li>
          </ul>
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold">A mulher que ensinou o computador a falar com humanos</h1>
        <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763261504/d2b368f7-1e88-44ee-b153-904116c1ff02.png" alt="Grace Hopper" width={490} height={490} />
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">A Internet em pessoa</h1>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Tim Berners-Lee</h1>
          <p>Criador da World Wide Web. HTTP, HTML, a própria ideia de hiperlinks.</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763262691/25532165-c7e1-42fb-974d-5fcddd5ee59b.png" alt="Tim Berners-Lee" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Os Desconhecidos do Open Source</h1>
        <p className="text-lg font-semibold">O maior exército de inovação do planeta não tem uniforme, chefe, nem crachá. E você usa o trabalho deles todos os dias.</p>
      </div>
    </section>
  ),

  (
    <section>
      <h1 className="text-lg font-semibold">Desconhecidos do open source</h1>
      <ul className="mt-3 list-disc ml-6 text-[1.25rem] space-y-2">
        <li>Pessoas que contribuem para bibliotecas, frameworks, protocolos e ferramentas essenciais</li>
        <li>Sem salário, sem aplausos, sem tela azul de crédito no final</li>
        <li>Apenas vontade de melhorar o mundo através do código</li>
      </ul>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Algumas dessas feras</h1>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Daniel Stenberg</h1>
          <p>Mantém o cURL sozinho há décadas</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763263669/9378363d-a87c-43fb-8cd2-4efbaa87ac6f.png" alt="Daniel Stenberg" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Gavin Andresen</h1>
          <p>Um dos primeiros mantenedores do Bitcoin Core</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763263796/45484fbe-8860-41b5-8e84-f53fb7e8f0f7.png" alt="Gavin Andresen" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Paul Vixie</h1>
          <p>Criador do BIND, que até hoje é o coração do DNS mundial.</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763264092/92c4689d-1bcd-41ee-b3d6-092147460584.png" alt="Paul Vixie" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg space-x-2">
          <h1 className="text-lg font-semibold text-blue-400">Max Howell</h1>
          <p>Criador do Homebrew, o gerenciador de pacotes que literalmente sustenta a vida de devs no macOS.</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763264227/7011749c-cc45-4a2c-94a3-2af4dd88a6fd.png" alt="Max Howell" width={290} height={290} className="p-4" />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold">Sam Altman</h1>
          <p className="text-2xl">Ops...</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763264405/43b4f8ff-62b0-4cbd-90c5-8e688b76c286.png" alt="Sam Altman" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div className="max-w-lg">
          <h1 className="text-lg font-semibold text-blue-400">Ludovic Courtès</h1>
          <p>Criador e mantenedor do GNU Guix, referência em reproducibility.</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763264597/a7831e77-001c-428d-bbfa-0986b07439a6.png" alt="Ludovic Courtès" width={290} height={290} className="p-4"/>
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex md:flex-row items-center gap-8 justify-between">
        <div>
          <h1 className="text-lg font-semibold">Reflexão</h1>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dy5xyare1/image/upload/v1763264898/giphy_icq5j1.gif" alt="meme batman" width={290} height={290} />
        </div>
      </div>
    </section>
  ),

  (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Muito Thanks</h1>
      </div>
    </section>
  ),

]

export default { slides, notes, meta }
