import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BOT MASTER PRO - Sinais de Trading",
  description: "Plataforma profissional de sinais de trading integrada com Telegram",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
