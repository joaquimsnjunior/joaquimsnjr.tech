import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="mb-10">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="grid gap-8 border rounded-lg p-6 border-[color:var(--border)] pb-10 md:grid-cols-[120px,1fr] md:items-start">
        <div className="relative">
          <Image
            width={60}
            height={60}
            src="https://res.cloudinary.com/dy5xyare1/image/upload/v1777048991/Profile_tratamento_lhvfvz.jpg"
            alt="Joaquim Silva - SRE & Software Engineer"
            className="h-46 w-36 object-cover rounded-lg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dy5xyare1/image/upload/v1777048991/Profile_tratamento_lhvfvz.jpg"
            priority
            sizes="96px"  
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="kicker">Software Engineer</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-[color:var(--foreground)] leading-snug tracking-tight">
              Joaquim Silva
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed border-l-2 border-[color:var(--accent)] pl-2">
              Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            <span className="mt-2">São Paulo, Brasil</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/projects" className="link-accent">
              projetos
            </Link>
            <Link href="/talks" className="link-accent">
              talks
            </Link>
            <a
              href="https://github.com/joaquimsnjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent inline-flex items-center gap-1"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
