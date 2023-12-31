'use client'

import { useStore } from '~/store/useStore'
import { SearchBox } from '../ui/search-box'
import { observer } from 'mobx-react-lite'

export const ManageSearchBox = observer(() => {
  const store = useStore()
  console.log(store.managePage)
  return (
    <SearchBox
      entityName=''
      value={store.managePage.searchBoxControl.control.get()}
      onSearch={store.managePage.searchBoxControl.control.set}
    />
  )
})

export const ConnectionsSearchBox = observer(() => {
  const store = useStore()
  console.log(store.managePage)
  return (
    <SearchBox
      entityName=''
      value={store.managePage.searchBoxControl.control.get()}
      onSearch={store.managePage.searchBoxControl.control.set}
    />
  )
})


export const SearchBoxController = observer(() => {
  const store = useStore()
  console.log(store.managePage)
  return (
    <SearchBox
      entityName=''
      value={store.managePage.searchBoxControl.control.get()}
      onSearch={store.managePage.searchBoxControl.control.set}
    />
  )
})
