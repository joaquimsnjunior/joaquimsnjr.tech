import Link from "next/link"
import { Metadata } from "next"
import { Home, ArrowLeft, Search, Terminal } from "lucide-react"

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
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in-up">
        {/* Terminal Window */}
        <div className="border border-gray-800/60 bg-[#161616]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-3 text-xs text-gray-400 font-mono">~/404 — bash</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <Terminal className="w-3 h-3" />
              <span>error</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-4 font-mono text-sm">
            {/* Command */}
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 select-none">❯</span>
              <span className="text-gray-400">cat</span>
              <span className="text-white">./requested-page</span>
            </div>

            {/* Error Output */}
            <div className="pl-5 space-y-2">
              <div className="text-red-400 flex items-center gap-2">
                <span>✗</span>
                <span>cat: ./requested-page: No such file or directory</span>
              </div>
            </div>

            {/* ASCII Art 404 */}
            <div className="py-6">
              <pre className="text-blue-400 text-center text-xs sm:text-sm leading-tight">
                {`
 ██╗  ██╗ ██████╗ ██╗  ██╗
 ██║  ██║██╔═══██╗██║  ██║
 ███████║██║   ██║███████║
 ╚════██║██║   ██║╚════██║
      ██║╚██████╔╝     ██║
      ╚═╝ ╚═════╝      ╚═╝
`}
              </pre>
            </div>

            {/* Error Message */}
            <div className="border-l-2 border-red-500/30 pl-4 py-2">
              <p className="text-gray-300">
                <span className="text-red-400 font-semibold">Error:</span> A página que você está procurando não existe ou foi movida.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Código de status: <span className="text-gray-400">404 NOT_FOUND</span>
              </p>
            </div>

            {/* Suggestions */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 select-none">❯</span>
                <span className="text-gray-400">echo</span>
                <span className="text-gray-300">"Talvez você queira:"</span>
              </div>

              <div className="pl-5 space-y-3 mt-4">
                <Link
                  href="/"
                  className="group flex items-center gap-3 p-3 border border-gray-800/60 bg-[#1a1a1a] hover:border-blue-400/50 hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center border border-gray-700/50 bg-gray-800/30 text-blue-400 group-hover:border-blue-400/50">
                    <Home className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      Ir para a página inicial
                    </p>
                    <p className="text-xs text-gray-500">cd ~/home</p>
                  </div>
                </Link>

                <Link
                  href="/blog"
                  className="group flex items-center gap-3 p-3 border border-gray-800/60 bg-[#1a1a1a] hover:border-blue-400/50 hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center border border-gray-700/50 bg-gray-800/30 text-blue-400 group-hover:border-blue-400/50">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      Explorar o blog
                    </p>
                    <p className="text-xs text-gray-500">ls ~/blog</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Footer Prompt */}
            <div className="mt-6 pt-4 border-t border-gray-800/40">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">❯</span>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>cd ..</span>
                </Link>
                <span className="animate-pulse text-gray-400">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Glitch Effect Text */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600 font-mono">
            process exited with code <span className="text-red-400">1</span>
          </p>
        </div>
      </div>
    </div>
  )
}
