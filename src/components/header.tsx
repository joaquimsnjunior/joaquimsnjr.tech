import { ScrambleText } from "@/components/scramble-text"
import { MapPin, FolderGit2 } from "lucide-react"
import Image from "next/image"
// import Profile  from "../../public/joaquimsnjr.jpg"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="flex items-center gap-4">
          <Image
            width={80}
            height={80}
            src="https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png"
            alt="Profile"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png"
            priority
          />
          <div className="flex justify-end flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
            <ScrambleText className="font-semibold sm:text-[1.7rem] md:text-[2.5rem] leading-none flex-auto" text="Joaquim Silva" />
            <h3 className="text-[0.80rem] text-gray-400 leading-none sm:flex-wrap mt-2">~/Development/joaquimsnjr.tech</h3>
          </div>
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-350 group border p-4 border-gray-800/40 bg-[#161616]">
        <div className="flex items-center gap-2 text-[0.95rem]">
          <MapPin className="w-4 h-4"/>
          São Paulo, Brasil
        </div>
        <div className="flex items-center gap-2 text-[0.95rem]">
            SRE & Software Engineer | Mission Critical Systems
        </div>
        <div className="mt-2 group border p-2 border-gray-800/50">
          <Link href="/talks">
            <span className="text-white/85 hover:text-blue-400 transition-colors duration-200 text-[0.80rem]">[t] talks</span>
          </Link>
          <Link href="/projects" className="ml-4 group border p-2 border-gray-800 transition-colors hover:border-blue-400/50">
            <span className="text-white/85 hover:text-blue-400 transition-colors duration-200 text-[0.80rem]"><FolderGit2 className="w-4 h-4 inline-block" /> projetos</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
