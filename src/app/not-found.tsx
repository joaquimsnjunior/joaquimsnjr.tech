import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Página não encontrada",
  description: "A página que você está procurando não foi encontrada.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl animate-fade-in-up">
        <div className="surface px-8 py-10 sm:px-12 sm:py-12">
          <p className="kicker">404</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold text-[color:var(--foreground)]">
            Pagina nao encontrada
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
            A pagina que voce tentou acessar nao existe ou foi movida. Use um dos caminhos abaixo para continuar.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link href="/" className="surface surface-hover p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                inicio
              </p>
              <p className="mt-2 text-sm font-medium text-[color:var(--foreground)]">
                Voltar para a home
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">/</p>
            </Link>
            <Link href="/blog" className="surface surface-hover p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                blog
              </p>
              <p className="mt-2 text-sm font-medium text-[color:var(--foreground)]">
                Explorar os posts
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">/blog</p>
            </Link>
          </div>

          <div className="mt-8 border-t border-[color:var(--border)] pt-4 text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
            codigo 404
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
          tente novamente ou volte para a home
        </p>
      </div>
    </div>
  )
}
