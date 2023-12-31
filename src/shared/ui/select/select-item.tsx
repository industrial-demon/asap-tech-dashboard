import { ElementRef, ReactNode, Ref, forwardRef } from 'react'

import {
  SelectItem as RdxSelectItem,
  SelectItemProps as RdxSelectItemProps,
  SelectItemText,
  SelectItemIndicator,
} from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'
import { CheckIcon } from '~/icons'

export type SelectItemProps = Pick<
  RdxSelectItemProps,
  'value' | 'children' | 'className' | 'disabled'
> & {
  addon?: ReactNode
  label: string
  isScroll: boolean
}

export const SelectItem = forwardRef(
  (
    { children, className, label, addon, isScroll, ...props }: SelectItemProps,
    forwardedRef: Ref<ElementRef<typeof RdxSelectItem>>,
  ) => {
    return (
      <RdxSelectItem
        ref={forwardedRef}
        className={twMerge(selectItem({ className }), isScroll ? 'mr-[10px]' : '')}
        {...props}
      >
        <SelectItemText asChild>
          <div className="flex items-center gap-1">
            {addon}
            {label}
          </div>
        </SelectItemText>

        <SelectItemIndicator className="select-indicator inline-flex items-center justify-center">
          <CheckIcon className="dark:text-grey-40" />
        </SelectItemIndicator>
      </RdxSelectItem>
    )
  },
)

const selectItem = cva([
  'relative',
  'flex items-center justify-between',
  'h-10 px-4',
  'text-[13px] leading-none',
  'rounded-sm',
  'select-none',
  'data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none',
  'data-[highlighted]:outline-none',
  'data-[highlighted]:bg-grey-20',
  'dark:text-white-1',
  'dark:data-[highlighted]:bg-green-60',
  '[&>.select-indicator>svg]:data-[state="checked"]:dark:focus:!text-white-1',
])

SelectItem.displayName = RdxSelectItem.displayName
