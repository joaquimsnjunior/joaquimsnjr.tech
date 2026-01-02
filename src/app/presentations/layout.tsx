import { Metadata } from "next"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen bg-[#111]">
      {children}
    </main>
  )
}

export const metadata: Metadata = {
  title: "Apresentação",
  description: "Veja as palestras e apresentações que já fiz ao longo do tempo.",
}

