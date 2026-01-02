import { MapPin, Terminal, Zap, Coffee, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-16 animate-fade-in">
      {/* Terminal Window Container */}
      <div className="border border-gray-800/60 bg-[#161616] overflow-hidden">

        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono">zsh</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span className="hidden sm:inline">~/Development/joaquimsnjr.tech</span>
            <span className="sm:hidden">~/joaquimsnjr.tech</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8">

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">

            {/* Avatar with Status */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-75 blur transition duration-500" />
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  src="https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png"
                  alt="Joaquim Silva - SRE & Software Engineer"
                  className="rounded-full border-2 border-gray-800 group-hover:border-blue-400/50 transition-colors duration-300"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png"
                  priority
                />
                {/* Online Status */}
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#161616]">
                  <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">

              {/* Name & Title */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  Joaquim Silva
                </h1>
                <p className="text-gray-400 font-mono text-sm">
                  <span className="text-blue-400">const</span> role = <span className="text-emerald-400">"SRE & Software Engineer"</span>;
                </p>
              </div>

              {/* Location & Status */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Mission Critical Systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-400">Powered by coffee</span>
                </div>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-dashed border-gray-800/60" />

          {/* Command Line Style Bio */}
          <div className="font-mono text-sm space-y-2 text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">cat</span>
              <span className="text-white">about.md</span>
            </div>
            <div className="pl-5 text-gray-300 leading-relaxed">
              Engenheiro focado em <span className="text-blue-400">confiabilidade</span>,
              <span className="text-blue-400"> performance</span> e
              <span className="text-blue-400"> sistemas distribuídos</span>.
              Construindo infraestrutura que não dorme.
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-dashed border-gray-800/60" />

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-gray-800/60 hover:border-blue-400/50 transition-all duration-300"
            >
              <Terminal className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                projetos
              </span>
              <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>

            <Link
              href="/talks"
              className="group flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-gray-800/60 hover:border-blue-400/50 transition-all duration-300"
            >
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors font-mono text-sm">[t]</span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                talks
              </span>
              <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>

            <a
              href="https://github.com/joaquimsnjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-gray-800/60 hover:border-blue-400/50 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                github
              </span>
              <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 border-t border-gray-800/60 bg-[#1a1a1a]">
          <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span className="text-emerald-400">❯</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

      </div>
    </header>
  )
}
