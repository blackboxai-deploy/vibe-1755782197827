import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Website | Your Business Name',
  description: 'A modern, professional website showcasing our services and expertise. Contact us today to learn more about what we can do for you.',
  keywords: 'business, professional services, consulting, solutions',
  authors: [{ name: 'Your Business Name' }],
  creator: 'Your Business Name',
  publisher: 'Your Business Name',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Professional Website | Your Business Name',
    description: 'A modern, professional website showcasing our services and expertise.',
    siteName: 'Your Business Name',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Website | Your Business Name',
    description: 'A modern, professional website showcasing our services and expertise.',
    creator: '@yourbusiness',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}