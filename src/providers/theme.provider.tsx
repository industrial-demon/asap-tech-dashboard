'use client'
import { ReactNode, useEffect, useState } from 'react'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider as NextThehemeProvider } from 'next-themes'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Theme>{children}</Theme>
  }

  return (
    <NextThehemeProvider
      defaultTheme="dark"
      enableColorScheme={false}
      attribute="class"
    >
      <Theme className='h-full'>{children}</Theme>
    </NextThehemeProvider>
  )
}
