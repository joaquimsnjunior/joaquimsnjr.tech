import Link from "next/link"

const socialLinks = [
  {
    title: "Email",
    href: "mailto:joaquimsilvanetojunior@gmail.com",
  },
  {
    title: "X",
    href: "https://x.com/joaquimsnjunior",
  },
  {
    title: "GitHub",
    href: "https://github.com/joaquimsnjunior",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/joaquimsnjr/",
  },
  {
    title: "Medium",
    href: "https://medium.com/@joaquimsilvanetojunior",
  },
]

const navLinks = [
  { title: "blog", href: "/blog" },
  { title: "projetos", href: "/projects" },
  { title: "sobre", href: "/about" },
  { title: "talks", href: "/talks" },
  { title: "outros sites", href: "/sites" },
]

const llmsAndAccessibilityLinks = [
  { title: "LLMs.txt", href: "/llms.txt" },
  { title: "Humans.txt", href: "/humans.txt" },
  { title: "Security.txt", href: "/.well-known/security.txt" },
  { title: "Sitemap", href: "/sitemap.xml" },
  { title: "RSS", href: "/feed.xml" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[color:var(--border)] pt-8 pb-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3 max-w-sm">
          <p className="kicker">Disponível para projetos</p>
          <p className="text-sm text-[color:var(--muted)] leading-relaxed">
            Construindo software com propósito e compartilhando conhecimento pelo caminho.
          </p>
        </div>

        <div>
          <p className="kicker">Navegação</p>
          <nav className="mt-3" aria-label="Navegação do rodapé">
            <ul className="flex flex-col gap-2 text-sm" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-accent inline-flex">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <p className="kicker">Conexões</p>
          <nav className="mt-3" aria-label="Conexões">
            <ul className="flex flex-col gap-2 text-sm" role="list">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <p className="kicker">AI</p>
          <nav className="mt-3" aria-label="Conexões">
            <ul className="flex flex-col gap-2 text-sm" role="list">
              {llmsAndAccessibilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-[11px] text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <time dateTime={`${currentYear}`}>{currentYear}</time> · Feito com café e código
        </p>
        <p>São Paulo, Brasil</p>
      </div>
    </footer>
  )
}
