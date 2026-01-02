import Link from "next/link"
import { Mail, Twitter, Github, Linkedin, BookOpen } from "lucide-react"

const socialLinks = [
  {
    title: "Email",
    href: "mailto:joaquimsilvanetojunior@gmail.com",
    icon: Mail,
  },
  {
    title: "X",
    href: "https://x.com/joaquimsnjunior",
    icon: Twitter,
  },
  {
    title: "GitHub",
    href: "https://github.com/joaquimsnjunior",
    icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/joaquimsnjr/",
    icon: Linkedin,
  },
  {
    title: "Medium",
    href: "https://medium.com/@joaquimsilvanetojunior",
    icon: BookOpen,
  },
]

const navLinks = [
  { title: "blog", href: "/blog" },
  { title: "projetos", href: "/projects" },
  { title: "sobre", href: "/sobre" },
  { title: "talks", href: "/talks" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 relative overflow-hidden">
      {/* Gradient line separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-500">disponível para projetos</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Construindo software com propósito e compartilhando conhecimento pelo caminho.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Navegação</h4>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-all duration-300"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social links */}
        <div className="space-y-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Conecte-se</h4>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-[#1a1a1a] border border-gray-800/60 text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300"
                aria-label={link.title}
              >
                <link.icon className="w-5 h-5 relative z-10" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section with giant text */}
      <div className="relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-xs text-gray-600">
          <p>© {currentYear} · Feito com café e código</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-700" />
            São Paulo, Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
