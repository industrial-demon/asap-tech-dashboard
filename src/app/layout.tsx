import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from '~/providers/theme.provider'

import './globals.css'
import { Header } from '~/components/header/header'
// import '@radix-ui/themes/styles.css';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asap Tech',
  description: 'dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider>
          <main className="h-full dark:bg-green-300">
            <Header/>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
