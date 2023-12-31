import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const scrollAreaRoot = cva([
  'scroll-area-root',
  'flex',
  'flex-col',
  'overflow-hidden',
  'w-full',
  'h-full',
])

const scrollAreaViewPort = cva([
  'scroll-area-root-viewport',
  'w-full',
  'h-full',
  'overscroll-x-contain',
])

const scrollBar = cva([
  'rounded-[2px]',
  'scroll-bar',
  'flex select-none touch-none',
  'p-0.5 bg-grey-20 dark:bg-gray-400 transition-colors duration-[160ms] ease-out',
  'data-[orientation=horizontal]:flex-col',
  'data-[orientation=vertical]:w-2',
  'data-[orientation=horizontal]:h-2',
])

const scrollThumb = cva([
  'scroll-thumb',
  'flex-1 bg-grey-50 dark:bg-grey-60 rounded-[10px]',
  'relative',
  'before:content-[""]',
  'before:w-full before:h-full',
  'before:min-w-[44px] before:min-h-[44px]',
  'before:absolute before:top-1/2 before:left-1/2',
  'before:-translate-x-1/2 before:-translate-y-1/2',
])

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root
      type="auto"
      className={twMerge(scrollAreaRoot({ className }))}
    >
      <ScrollAreaPrimitive.Viewport className={scrollAreaViewPort()}>
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        className={scrollBar()}
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className={scrollThumb()} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Scrollbar
        className={scrollBar()}
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb className={scrollThumb()} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Corner className="bg-slate-300" />
    </ScrollAreaPrimitive.Root>
  )
}

export { ScrollArea, type ScrollAreaProps }
