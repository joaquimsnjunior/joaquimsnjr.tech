import { ScrambleText } from "@/components/scramble-text"
import { MapPin, CodeXml } from "lucide-react"
// import Profile  from "../../public/joaquimsnjr.jpg"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="flex items-center gap-4">
          <img
            width={65}
            height={65}
            src="https://res.cloudinary.com/dy5xyare1/image/upload/v1762122802/Profile_Joaquim_akpq89.jpg"
            alt="Profile"
            className="rounded-sm object-cover"
          />
          <ScrambleText className="font-semibold flex-auto" text="Joaquim Silva" />
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
        <div>
          <Link href="/talks">
            <span className="text-white/85 hover:text-blue-400 transition-colors duration-200 text-sm">[t] palestras & apresentações</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
