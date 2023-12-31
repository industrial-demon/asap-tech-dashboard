import type { Meta, StoryObj } from '@storybook/react'
import { TabFilter } from './tab-filter'
import { observer } from 'mobx-react-lite'
import { TabFilterControl } from './model/tab-filter.model'

const meta: Meta<typeof TabFilter> = {
  component: TabFilter,
  tags: ['filters'],
}

export default meta
type Story = StoryObj<typeof TabFilter>


const Component = observer(() => {

  return <TabFilter control={new TabFilterControl()}></TabFilter>
})

export const Default: Story = {
  render: () => <Component />,
}
