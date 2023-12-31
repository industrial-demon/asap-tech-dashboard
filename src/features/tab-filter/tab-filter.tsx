import { observer } from 'mobx-react-lite'
import * as Label from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { SidebarFilterLayout } from '../layouts/sidebar-filter.layout'
import * as Tabs from '@radix-ui/react-tabs'
import { TabFilterControl } from './model/tab-filter.model'

const options = [
  {
    value: 'summary',
    title: 'Summary',
  },
  {
    value: 'scheduled',
    title: 'Scheduled Workflows',
  },
]

export const TabFilter = observer(
  <T,>({ control }: { control: TabFilterControl }) => {
    return (
      <SidebarFilterLayout
        heading="Filter by Job Status"
        className="gap-[30px]"
      >
        <Tabs.Root>
          <Tabs.List className='flex flex-col px-8 bg-red-300' >
            {options.map((option, idx) => (
              <Tabs.Trigger value={option.value} title={option.title} key={idx}>
                {option.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </SidebarFilterLayout>
    )
  },
)
