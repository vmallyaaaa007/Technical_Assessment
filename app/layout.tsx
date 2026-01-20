import React from "react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const satoshi = localFont({
  src: './fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'SDE-1 Assessment',
  description: 'Preparing Your Workforce & Leaders for the AI Era - An invite-only executive roundtable',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
