import { ReactElement, cloneElement } from 'react'
import { useStore } from './useStore'

export const StoreWrapper = (component: ReactElement) => {
  const store = useStore()
  return cloneElement(component, { store })
}
