import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Readit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased light')}>
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        {/* <ClerkProvider> */}
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
        {/* </ClerkProvider> */}
        <Toaster />
      </body>
    </html>
  )
}
