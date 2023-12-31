'use client'

import { SidebarFilterLayout } from '../../layouts/sidebar-filter.layout'
import { observer } from 'mobx-react-lite'
import { SearchIcon } from '~/icons'
import { Input } from '~/shared/ui/input'

export type SearchBoxProps = {
  entityName: string
  value: string
  onSearch: (value: string) => void
}

export const SearchBox = ({ entityName, value, onSearch }: SearchBoxProps) => {
  return (
    <SidebarFilterLayout className="gap-5" heading={`Search ${entityName}`}>
      <Input
        className="h-[55px] font-normal"
        value={value}
        onChange={e => onSearch(e.target.value)}
        addonRight={<SearchIcon />}
      />
    </SidebarFilterLayout>
  )
}
