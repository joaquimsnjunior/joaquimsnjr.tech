import Link from "next/link"

const links = [
  { title: "email", href: "mailto:joaquimsilvanetojunior@gmail.com" },
  { title: "x.com", href: "https://x.com/joaquimsnjunior" },
  { title: "github", href: "https://github.com/joaquimsnjunior" },
  { title: "linkedin", href: "https://www.linkedin.com/in/joaquimsnjr/" },
]

export function Footer() {
  return (
    <footer className="mt-16 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-blue-400 mr-2">*</span>
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
        <div>
          <span className="text-gray-500">|</span>
        </div>
        <div>
          <span className="text-gray-400">{new Date().getFullYear()} &copy; joaquim silva</span>
        </div>
      </div>
    </footer>
  )
}
