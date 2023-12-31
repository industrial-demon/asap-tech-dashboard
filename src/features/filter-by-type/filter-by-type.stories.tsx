import type { Meta, StoryObj } from '@storybook/react'
import { FilterByType } from './filter-by-type'
import {
  FilterByTypeControl,
  createFilterControl,
} from './model/filter-by-type.model'
import { BooleanStore } from '~/shared/lib/mobx'
import { observer } from 'mobx-react-lite'

const meta: Meta<typeof FilterByType> = {
  component: FilterByType,
  tags: ['filters'],
}

export default meta
type Story = StoryObj<typeof FilterByType>

const filters = [
  createFilterControl({
    title: 'All',
    name: 'All',
    value: '',
    isActive: true,
  }),
  createFilterControl({
    title: 'Informatica Tier A Connectors',
    value: 'ATier',
    name: 'A',
  }),
  createFilterControl({
    title: 'Informatica Tier B Connectors',
    name: 'B',
    value: 'BTier',
  }),
  createFilterControl({
    title: 'Informatica Tier C Connectors',
    name: 'C',
    value: 'CTier',
  }),
  createFilterControl({
    title: 'Informatica Tier D Connectors',
    name: 'D',
    value: 'DTier',
  }),
  createFilterControl({
    title: 'Informatica Tier F Connectors',
    name: 'F',
    value: 'FTier',
  }),
  createFilterControl({
    title: 'Informatica Tier T Connectors',
    name: 'T',
    value: 'TTier',
  }),
  createFilterControl({
    title: 'Informatica Tier F Connectors',
    name: 'Z',
    value: 'ZTier',
  }),
]

const filterByTypesControl = new FilterByTypeControl(filters)

const Component = observer(() => {
  console.log(filterByTypesControl.selectedTypes)
  return <FilterByType control={filterByTypesControl}></FilterByType>
})

export const Default: Story = {
  render: () => <Component />,
}
