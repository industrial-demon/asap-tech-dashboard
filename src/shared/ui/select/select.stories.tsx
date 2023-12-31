import type { Meta, StoryObj } from '@storybook/react'
import Select, { SelectProps } from './select'

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

const options: SelectProps['options'] = Array.from(
  { length: 14},
  (_, idx) => idx + 1,
).map(item => ({
  label: `${item}-Label`,
  value: item.toString(),
  addon: item % 2 === 1 ? <span>Addo</span> : <span>KK</span> ,
}))

export const SelectStory: Story = {
  render: () => {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
       
        <div className="w-[400px]">
           <Select options={options}/>
        </div>
      </div>
    )
  },
}
