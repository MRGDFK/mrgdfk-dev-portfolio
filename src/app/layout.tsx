import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sharjil | Full-Stack Developer',
  description: 'Portfolio of Sharjil — Full-Stack Developer & AI/RL Enthusiast from Bangladesh',
  keywords: ['Sharjil', 'Full-Stack Developer', 'Next.js', 'React', 'Bangladesh', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="scanlines">{children}</body>
    </html>
  )
}
