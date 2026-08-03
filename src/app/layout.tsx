import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CommandPalette } from "@/components/CommandPalette"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AxioVital Support Center",
  description: "Official support portal for AxioVital Enterprise Digital Healthcare Platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-900 antialiased`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <CookieConsent />
      </body>
    </html>
  )
}

