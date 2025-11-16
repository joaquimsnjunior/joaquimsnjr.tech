import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joaquimsnjr.tech"),
  title: {
    default: "Joaquim Silva — Hello, world!",
    template: "%s | Joaquim Silva",
  },
  description: "Meu cantinho na internet.",
  openGraph: {
    title: "Joaquim Silva",
    description: "Meu cantinho na internet.",
    url: "https://www.joaquimsnjr.tech",
    siteName: "Joaquim Silva",
    locale: "pt-BR",
    type: "website",
    images: ["https://www.joaquimsnjr.tech/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Joaquim Silva",
    card: "summary_large_image",
    creator: "@joaquimsnjunior",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  )
}
