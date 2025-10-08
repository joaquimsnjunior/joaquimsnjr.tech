import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="joaquim silva" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          São Paulo, Brasil
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Educador | All Net Educação
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        Desenvolvedor Golang com experiência sólida em arquitetura de sistemas escaláveis, 
        microserviços e aplicações cloud-native. Apaixonado por ensinar e compartilhar conhecimento,
        atuo como educador técnico, formando novos profissionais em programação backend e boas práticas de desenvolvimento.
      </p>
    </header>
  )
}
