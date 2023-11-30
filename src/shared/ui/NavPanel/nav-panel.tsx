'use client'

import { ComponentProps } from 'react'

import { NavLink } from '~/shared/ui/NavLink'
import { NavigationMenu } from '../../../../ui-kit/lib/navigation-menu'


type Props = {
  routes: Array<ComponentProps<typeof NavLink>>
}

export const NavPanel = ({ routes }: Props) => (
  <NavigationMenu
    createStyles={() => ({
      root: '[&>div]:h-full',
      list: 'gap-12 h-full',
    })}
  >
    {routes.map(route => (
      <NavigationMenu.Item className="h-full" value={route.id} key={route.id}>
        <NavLink {...route} />
      </NavigationMenu.Item>
    ))}
  </NavigationMenu>
)
