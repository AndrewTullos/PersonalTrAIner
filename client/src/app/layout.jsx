// Assuming you're using StarsCanvas in a page like pages/index.js
import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import the StarsCanvas component with SSR disabled
const StarsCanvasWithNoSSR = dynamic(
  () => import('../components/StarBackground'),
  {
    ssr: false,
  },
)

import { RootLayout } from '@/components/RootLayout'
// import StarsCanvas from '../components/StarBackground'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <StarsCanvasWithNoSSR />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
