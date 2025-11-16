import { Metadata } from "next"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <div>
        {children}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Hora de Apresentar",
  description: "Veja as palestras e apresentações que já fiz ao longo do tempo.",
}

