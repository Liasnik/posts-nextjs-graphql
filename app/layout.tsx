import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posts-nextjs',
  description: 'Posts-nextjs dexcription',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <main className="flex min-h-screen justify-center gap-5 p-24"> */}
        <main className="container mx-auto mt-6">{children}</main>
      </body>
    </html>
  )
}
