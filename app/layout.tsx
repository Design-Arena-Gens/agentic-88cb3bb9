import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITAFCOUTURE — Brandboard',
  description: 'Luxury Digital Fashion Maison',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
