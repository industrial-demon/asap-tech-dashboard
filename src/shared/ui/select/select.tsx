import { ComponentPropsWithRef, useEffect, useRef, useState } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  ScrollArea,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area'

import { cva } from 'class-variance-authority'
import { ArrowDownIcon } from '~/icons'

import { SelectItem, SelectItemProps } from './select-item'

const selectTrigger = cva([
  'select-trigger',
  'inline-flex items-center justify-between',
  'h-[60px] min-w-[150px] w-full gap-[5px]',
  'rounded-lg border border-grey-20',
  'text-lg font-medium',

  'focus:border-green-60',
  'dark:bg-grey-60',
  'dark:border-none',
  'dark:text-white-1',

  'hover:bg-grey-20',
  'px-[15px] text-[13px] leading-none',
  'bg-white',
  'shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3',
  'data-[placeholder]:text-violet9 outline-none',
  '[&>svg]:data-[state="open"]:rotate-180',
  "placeholder:text-grey-20"
])

const selectContent = cva([
  'select-content',
  'dark:bg-grey-60 dark:text-white-1',
  'overflow-hidden z-50 bg-white rounded',
  'shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
])

const selectViewport = cva(['select-viewport', 'p-1 pb-0', 'mb-1'], {
  variants: {
    position: {
      popper: [
        'w-full min-w-[var(--radix-select-trigger-width)] max-h-[204px]',
      ],
      'item-aligned': [],
    },
  },
})

const scrollAreaRoot = cva([
  'scroll-area-root',
  'w-full h-full overflow-hidden',
])

const scrollBar = cva([
  'scroll-area-scroll-bar',
  'flex touch-none',
  'p-0.5 bg-slate-300',
  'transition-colors duration-[160ms] ease-out',
  'data-[orientation=vertical]:w-2.5',
])

const scrollThumb = cva([
  'scroll-area-thumb',
  'flex-1 bg-slate-400',
  'rounded-[10px] relative',
  'before:content-[""]',
  'before:absolute before:top-1/2 before:left-1/2',
  'before:-translate-x-1/2 before:-translate-y-1/2',
  'before:w-full before:h-full',
  'before:min-w-[44px] before:min-h-[44px]',
])

export type SelectProps = {
  options: Array<Omit<SelectItemProps, 'isScroll'>>
  placeholder?: SelectPrimitive.SelectValueProps['placeholder']
  label?: string
  triggerRef?: ComponentPropsWithRef<
    typeof SelectPrimitive.SelectTrigger
  >['ref']
} & SelectPrimitive.SelectProps &
  Pick<SelectPrimitive.SelectContentProps, 'position'>

export function Select({
  placeholder,
  position = 'popper',
  open,
  onOpenChange,
  onValueChange,
  options = [],
  triggerRef,
}: SelectProps) {
  const [isScroll, setScroll] = useState(false)

  return (
    <SelectPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger ref={triggerRef} className={selectTrigger()}>
        <SelectPrimitive.Value placeholder={placeholder || <span className='text-grey-30'>Select item</span>} />
        <SelectPrimitive.Icon
          asChild
          className="trigger-indicator  dark:text-grey-40"
        >
          <ArrowDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position={position}
          sideOffset={position === 'popper' ? 3 : 0}
          className={selectContent()}
        >
          <ScrollArea className={scrollAreaRoot()} type="auto">
            <SelectPrimitive.Viewport
              asChild
              style={{ overflowX: undefined, overflowY: undefined }}
              className={selectViewport({ position: position })}
            >
              <Viewport>
                {options.map(option => {
                  return (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      addon={option.addon}
                      disabled={option.disabled}
                      isScroll={isScroll}
                    />
                  )
                })}
              </Viewport>
            </SelectPrimitive.Viewport>

            <Scrollbar
              ref={el => {
                if (Boolean(el)) {
                  setScroll(true)
                }
                return el
              }}
              className={scrollBar()}
              orientation="vertical"
            >
              <Thumb className={scrollThumb()} />
            </Scrollbar>
          </ScrollArea>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export default Select
