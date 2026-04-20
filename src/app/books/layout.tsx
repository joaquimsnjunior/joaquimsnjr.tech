import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </main>
  )
}