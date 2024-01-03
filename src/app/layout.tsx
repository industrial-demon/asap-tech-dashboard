import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { RootStoreProvider } from '~/providers/store-provider'
import { ThemeProvider } from '~/providers/theme.provider'
import { Header } from '~/components/header/header'
import './globals.css'
import '@radix-ui/themes/styles.css'


const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asap Tech',
  description: 'dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        
          <RootStoreProvider>
            <ThemeProvider>
              <main className="h-full dark:bg-green-300">{children}</main>
            </ThemeProvider>
          </RootStoreProvider>
      </body>
    </html>
  )
}
