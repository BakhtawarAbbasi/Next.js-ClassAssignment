import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'React-Hook-Form',
  description: 'react-hook-form and zod',
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
