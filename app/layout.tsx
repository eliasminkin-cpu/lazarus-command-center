import type { Metadata } from "next"
import { JetBrains_Mono, Rajdhani } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-tactical',
})

export const metadata: Metadata = {
  title: "LAZARUS COMMAND CENTER",
  description: "⚫ Tactical Notion Command Center for the Lazarus Syndikat",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <body className={`${jetbrainsMono.variable} ${rajdhani.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}