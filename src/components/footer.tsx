import Image from "next/image"
import Link from "next/link"

const links = [
  { title: "email", href: "mailto:joaquimsilvanetojunior@gmail.com" },
  { title: "x.com", href: "https://x.com/joaquimsnjunior" },
  { title: "github", href: "https://github.com/joaquimsnjunior" },
  { title: "linkedin", href: "https://www.linkedin.com/in/joaquimsnjr/" },
  { title: "medium", href: "https://medium.com/@joaquimsilvanetojunior" },
]

export function Footer() {
  return (
    <footer className="mt-16 mb-8">
      
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
      </div>
      <h5 className="dark:text-[#161616] text-[#F4F4F3] text-[500px] leading-none text-center pointer-events-none">
        root
      </h5>
    </footer>
  )
}
