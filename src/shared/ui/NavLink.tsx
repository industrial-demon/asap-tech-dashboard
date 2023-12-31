'use client'

import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cx } from 'class-variance-authority'
import { usePathname } from 'next/navigation'

type Props = { id: string; title: string; icon: ReactNode } & Pick<
  LinkProps,
  'href'
>

export const NavLink = ({ href, title, icon, ...props }: Props) => {
  const path = usePathname()
  const isActive = path === href
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className={cx(
          'flex items-center h-full gap-4',
          'hover:text-green-60 dark:hover:text-green-60',
          isActive
            ? 'text-green-60 dark:text-green-60 pb-1 border-t-4 border-t-green-60'
            : 'dark:text-grey-40',
        )}
        active={isActive}
        {...props}
      >
        {title}
        {icon}
      </NavigationMenu.Link>
    </Link>
  )
}
