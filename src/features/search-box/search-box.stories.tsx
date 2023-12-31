import type { Meta, StoryObj } from '@storybook/react'
import { SearchBox } from './ui/search-box'
import { observer } from 'mobx-react-lite'
import { SearchBoxControl } from './model/search-box.control'

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  tags: ['filters'],
}

export default meta
type Story = StoryObj<typeof SearchBox>

const control = new SearchBoxControl()
const Component = observer(() => {
  return (
    <div>
      <SearchBox
        entityName="Tasks"
        value={control.value}
        onSearch={control.onSearch}
      />
    </div>
  )
})

export const Default: Story = {
  render: () => <Component />,
}
