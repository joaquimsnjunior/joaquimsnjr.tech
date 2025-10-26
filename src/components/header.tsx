import { ScrambleText } from "@/components/scramble-text"
import { MapPin, CodeXml } from "lucide-react"
import Profile  from "../../public/joaquimsnjr.jpg"
import Image from "next/image"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="flex items-center gap-4">
          <Image
            src={Profile}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <ScrambleText text="joaquim silva" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          São Paulo, Brasil
        </div>
        <div className="flex items-center gap-2">
          <CodeXml className="w-4 h-4" />
          SRE | DevOps Engineer | Backend Developer
        </div>
      </div>
    </header>
  )
}
