import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="mb-16">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="grid gap-8 border-b border-[color:var(--border)] pb-10 md:grid-cols-[120px,1fr] md:items-start">
        <div className="relative h-40 w-40 overflow-hidden">
          <Image
            width={90}
            height={90}
            src="https://res.cloudinary.com/dy5xyare1/image/upload/v1777035518/3d_lpeagj.png"
            alt="Joaquim Silva - SRE & Software Engineer"
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dy5xyare1/image/upload/v1777035518/3d_lpeagj.png"
            priority
            sizes="96px"  
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="kicker">Software Engineer</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[color:var(--foreground)]">
              Joaquim Silva
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed border-l-2 border-[color:var(--accent)] pl-2">
              Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            <span className="mt-8">São Paulo, Brasil</span>
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
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
