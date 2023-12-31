'use client'

import { ReactNode, createContext } from 'react'
import { RootStore, initStore } from '~/store/root-store'

export const RootSoreContext = createContext<RootStore | null>(null)

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootSoreContext.Provider value={initStore()}>
      {children}
    </RootSoreContext.Provider>
  )
}
