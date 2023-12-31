import { observer } from 'mobx-react-lite'
import * as Label from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { SidebarFilterLayout } from '../layouts/sidebar-filter.layout'

import { FilterByTypeControl } from './model/filter-by-type.model'
import { Checkbox, CheckboxProps } from '~/shared/ui/checkbox'
import { ScrollArea } from '~/shared/ui/scroll-area'


type Props<T> = {
  control: FilterByTypeControl<T>
}

const FilterTypeItem = ({
  id,
  checked,
  title,
  onCheckedChange,
}: CheckboxProps & { title: string }) => {
  return (
    <li className="flex items-center gap-5">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label.Root
        htmlFor={id}
        className={cx(
          'whitespace-nowrap overflow-hidden text-ellipsis',
          checked && 'text-green-60',
        )}
      >
        {title}
      </Label.Root>
    </li>
  )
}

const FilterByType = observer(<T,>({ control }: Props<T>) => {
  return (
    <SidebarFilterLayout
      heading="Filter by Type"
      className="gap-[30px]"
    >
      <ScrollArea className='max-h-44' >
        <ul className="flex flex-col gap-5 whitespace-nowrap overflow-hidden text-ellipsis">
          {control.controlsList.map(({ value, title, checkboxControl }) => (
            <FilterTypeItem
              id={value}
              key={value}
              title={title}
              checked={checkboxControl.get()}
              onCheckedChange={checked => {
                if (value === control.defaultValue) {
                  control.allOn()
                } else {
                  if (
                    control.selectedTypes.length < 2 &&
                    control.selectedTypes.includes(value as T) &&
                    checked === false
                  ) {
                    control.allOn()
                  } else {
                    control.allOff()
                  }
                }

                typeof checked === 'boolean' && checkboxControl.set?.(checked)
              }}
            />
          ))}
        </ul>
      </ScrollArea>
    </SidebarFilterLayout>
  )
})

export { FilterByType, type Props as FilterByTypeProps }
