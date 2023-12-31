import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react'
import { cva, cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  addonRight?: ReactNode
}

export const Input = forwardRef(
  (
    { name, className, addonRight, ...props }: InputProps,
    forwardRef: Ref<HTMLInputElement>,
  ) => {
    return (
      <div
        className={twMerge(
          'relative flex',
          props.disabled && 'hover:cursor-not-allowed',
        )}
      >
        <input
          autoComplete="off"
          type="text"
          className={twMerge(
            inputClass({ addonRight: Boolean(addonRight), className }),
          )}
          name={name}
          ref={forwardRef}
          {...props}
        />
        <div className={addonClass({ addonRight: Boolean(addonRight) })}>
          {addonRight}
        </div>
      </div>
    )
  },
)

const inputClass = cva(
  [
    'input',
    'w-full h-[60px]',
    'rounded-lg border border-grey-20',
    'text-lg font-medium',

    'focus:border-green-60',
    'dark:bg-grey-60',
    'dark:border-none',
    'dark:text-white-1',

    'px-[15px] text-[14px] leading-none',

    'outline-none',
    'flex',
    'bg-white',
    'placeholder:text-slate-500 placeholder:font-thin',
    'disabled:bg-gray-100 disabled:pointer-events-none',
  ],
  {
    variants: {
      addonRight: {
        true: ['pr-[42px]'],
        false: [''],
      },
    },
  },
)

const addonClass = cva(
  ['input-addon', 'absolute right-4 top-1/2 -translate-y-1/2 transform'],
  {
    variants: {
      addonRight: {
        true: [''],
        false: ['hidden'],
      },
      addonLeft: {},
    },
  },
)

Input.displayName = 'Input'
