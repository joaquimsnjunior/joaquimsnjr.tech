import type { Metadata } from 'next'
import { ScrambleText } from '@/components/scramble-text'
import { BookCard } from './_components/book-card'

interface Book {
  id: string
  title: string
  author: string
  imageUrl: string
  amazonUrl: string
  stars?: number
}

export const metadata: Metadata = {
  title: 'Minha Biblioteca',
  description:
    'Descubra as melhores recomendações de livros técnicos e não-ficção. Uma coleção curada de 42 livros que influenciaram minha jornada como desenvolvedor e pensador.',
  keywords: [
    'livros',
    'recomendações',
    'desenvolvimento',
    'programação',
    'não-ficção',
    'arquitetura de software',
  ],
}

export default async function BooksPage() {

  const techBooks: Book[] = [
    {
      id: 'engineering-reliability-google',
      title: 'Engenharia de Confiabilidade do Google',
      author: 'Betsy Beyer, Jennifer Petoff',
      imageUrl: 'https://m.media-amazon.com/images/I/71a+SXho-TL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/3Qiy6Ck',
      stars: 4.8,
    },
    {
      id: 'manual-devops',
      title: 'Manual de DevOps',
      author: 'Gene Kim',
      imageUrl: 'https://m.media-amazon.com/images/I/61uelQAJ1SL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/3OBPuRY',
      stars: 4.8,
    },
    {
      id: 'engineering-platforms',
      title: 'Engenharia de Plataforma',
      author: 'Camille Fournier',
      imageUrl: 'https://m.media-amazon.com/images/I/51WWI4kVm-L._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4e55N4d',
      stars: 4.8,
    },
    {
      id: 'learning-git',
      title: 'Aprendendo Git',
      author: 'Anna Skoulikari',
      imageUrl: 'https://m.media-amazon.com/images/I/61SWzDjgG5L._SY425_.jpg',
      amazonUrl: 'https://amzn.to/3OBQWUq',
      stars: 4.8,
    },
    {
      id: 'learning-typescript',
      title: 'Aprendendo TypeScript',
      author: 'Josh Goldberg',
      imageUrl: 'https://m.media-amazon.com/images/I/81tK8zB3ZvL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4sPIGhA',
      stars: 4.9,
    },
    {
      id: 'system-programming-essentials-with-go',
      title: 'System Programming Essentials with Go',
      author: 'Alex Rios',
      imageUrl: 'https://m.media-amazon.com/images/I/81m6GtrEhzL._SY385_.jpg',
      amazonUrl: 'https://amzn.to/4cDDasv',
      stars: 5,
    },
    {
      id: 'infraestrutura-como-codigo',
      title: 'Infraestrutura como Código',
      author: 'Kief Morris',
      imageUrl: 'https://m.media-amazon.com/images/I/81OjchoN2sL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4mJ6qCz',
      stars: 5,
    },
    {
      id: 'cloud-finops',
      title: 'Cloud FinOps',
      author: 'J.R. Storment',
      imageUrl: 'https://m.media-amazon.com/images/I/61Fush7z4KL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4dTIiuK',
      stars: 4.7,
    },
    {
      id: 'entrega-continua',
      title: 'Entrega Contínua',
      author: 'David Farley',
      imageUrl: 'https://m.media-amazon.com/images/I/81sWqReEqDL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4mDBAv0',
      stars: 4.7,
    },
    {
      id: 'migrating-monoliths-to-microservices',
      title: 'Migrando Sistemas Monolíticos Para Microsserviços',
      author: 'Sam Newman',
      imageUrl: 'https://m.media-amazon.com/images/I/61ym5KnetOL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4vIiQP4',
      stars: 4.8,
    },
    {
      id: 'clean-code',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      imageUrl: 'https://m.media-amazon.com/images/I/71dH97FwGbL._SY385_.jpg',
      amazonUrl: 'https://amzn.to/48WWBew',
      stars: 4.9,
    },
    {
      id: 'refactoring-2nd-edition',
      title: 'Refatoração - 2ª Edição',
      author: 'Martin Fowler',
      imageUrl: 'https://m.media-amazon.com/images/I/81sTm5M7wjL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4tryI7g',
      stars: 4.9,
    },
    {
      id: 'pragmatic-programmer',
      title: 'O Programador Pragmático',
      author: 'David Thomas, Andrew Hunt',
      imageUrl: 'https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4cAjPbl',
      stars: 4.8,
    },
    {
      id: 'software-architecture',
      title: 'Fundamentos da Arquitetura de Software',
      author: 'Mark Richards, Neal Ford',
      imageUrl: 'https://m.media-amazon.com/images/I/81fGrAy3AYL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/41KO6Q0',
      stars: 4.9,
    },
    {
      id: 'building-microservices',
      title: 'Building Microservices',
      author: 'Sam Newman',
      imageUrl: 'https://m.media-amazon.com/images/I/81dmHMoJDjL._SY385_.jpg',
      amazonUrl: 'https://amzn.to/3KP8Ktj',
      stars: 4.7,
    },
    {
      id: 'designing-distributed-systems',
      title: 'Designing Distributed Systems',
      author: 'Brendan Burns',
      imageUrl: 'https://m.media-amazon.com/images/I/81rc3KtroJL._SX342_.jpg',
      amazonUrl: 'https://amzn.to/4cEbZh8',
      stars: 4.6,
    },
    {
      id: 'learning-go',
      title: 'Learning Go',
      author: 'Jon Bodner',
      imageUrl: 'https://m.media-amazon.com/images/I/81QaVrv6p4L._SY385_.jpg',
      amazonUrl: 'https://amzn.to/4vIthlT',
      stars: 4.7,
    },
  ]

  const nonTechBooks: Book[] = [
    {
      id: 'hobbit',
      title: 'O Hobbit',
      author: 'J.R.R. Tolkien',
      imageUrl: 'https://m.media-amazon.com/images/I/91M9xPIf10L._SY466_.jpg',
      amazonUrl: 'https://amzn.to/4tZo3k2',
      stars: 4.9,
    },
    {
      id: 'na-raca',
      title: 'Na raça: como Guilherme Benchimol criou a XP',
      author: 'Maria Luíza Filgueiras',
      imageUrl: 'https://m.media-amazon.com/images/I/51OYejt-U9L._SY342_.jpg',
      amazonUrl: 'https://amzn.to/4tZN0vK',
      stars: 4.5,
    },
    {
      id: 'memorias-da-segunda-guerra',
      title: 'Memórias da Segunda Guerra',
      author: 'Winston Churchill',
      imageUrl: 'https://m.media-amazon.com/images/I/91SPyKGlEbL._SY466_.jpg',
      amazonUrl: 'https://amzn.to/4cUKgKe',
      stars: 4.8,
    },
    {
      id: 'a-arte-da-guerra',
      title: 'A Arte da Guerra',
      author: 'Sun Tzu',
      imageUrl: 'https://m.media-amazon.com/images/I/71Xw-t2GVxL._SY342_.jpg',
      amazonUrl: 'https://amzn.to/4cBlDAS',
      stars: 4.7,
    },
    {
      id: 'o-fisico',
      title: 'O Físico',
      author: 'Noah Gordon',
      imageUrl: 'https://m.media-amazon.com/images/I/81ypPVmWXAL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4cDoLMY',
      stars: 4.8,
    },
    {
      id: 'uma-terra-prometida',
      title: 'Uma terra prometida',
      author: 'Barack Obama',
      imageUrl: 'https://m.media-amazon.com/images/I/71ZCGlZewLL._SY466_.jpg',
      amazonUrl: 'https://amzn.to/3OBSNIS',
      stars: 4.8,
    },
    {
      id: 'o-fim-do-mundo-e-so-o-comeco',
      title: 'O fim do mundo é só o começo',
      author: 'Peter Zeihan',
      imageUrl: 'https://m.media-amazon.com/images/I/61yLhPw7YxL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4mH0LwZ',
      stars: 4.8,
    },
    {
      id: 'comece-pelo-porque',
      title: 'Comece pelo porquê',
      author: 'Simon Sinek',
      imageUrl: 'https://m.media-amazon.com/images/I/71M6czhxmTL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4tTYxwp',
      stars: 4.7,
    },
    {
      id: 'a-marca-da-vitoria',
      title: 'A marca da vitória',
      author: 'Phil Knight',
      imageUrl: 'https://m.media-amazon.com/images/I/51PDs0RT7vL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/3OteL0H',
      stars: 4.8,
    },
    {
      id: 'antifragil',
      title: 'Antifrágil',
      author: 'Nassim Nicholas Taleb',
      imageUrl: 'https://m.media-amazon.com/images/I/8119xmkJ3IL._SY425_.jpg',
      amazonUrl: 'https://amzn.to/4mMo34G',
      stars: 4.7,
    },
    {
      id: 'a-sutil-arte-de-ligar-o-f*da-se',
      title: 'A Sutil Arte de Ligar o F*da-Se',
      author: 'Mark MansonMark Manson',
      imageUrl: 'https://m.media-amazon.com/images/I/6175IU0qFgL._SY466_.jpg',
      amazonUrl: 'https://amzn.to/3QpxESI',
      stars: 4.6,
    },
  ]

  const sortedTechBooks = [...techBooks].sort((a, b) => (b.stars || 0) - (a.stars || 0))
  const sortedNonTechBooks = [...nonTechBooks].sort((a, b) => (b.stars || 0) - (a.stars || 0))

  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto mb-10 space-y-3">
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          <ScrambleText className="font-semibold leading-none" text="Minha Biblioteca" />
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Tech Books Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left text-[color:var(--muted)] leading-relaxed">
              Livros Técnicos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sortedTechBooks.map((book) => (
                <BookCard
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  imageUrl={book.imageUrl}
                  amazonUrl={book.amazonUrl}
                  ctaText="Comprar na Amazon"
                  stars={book.stars}
                />
              ))}
            </div>
          </section>

          {/* Non-Tech Books Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left text-[color:var(--muted)] leading-relaxed">
              Livros de Não-Ficção
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sortedNonTechBooks.map((book) => (
                <BookCard
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  imageUrl={book.imageUrl}
                  amazonUrl={book.amazonUrl}
                  ctaText="Comprar na Amazon"
                  stars={book.stars}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}