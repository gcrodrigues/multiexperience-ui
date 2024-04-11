import React, { HTMLAttributes, ReactNode } from 'react'
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  type?: 'outlined' | 'solid',
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'alert' | 'ghost',
  size?: 'sm' | 'md' | 'lg',
  rounded?: 'full' | 'md' | 'none'
}

export const buttonVariants = tv({
  base: 'py-2 px-4 text-center relative flex items-center gap-4',
  variants: {
    type:{
      outlined: 'bg-opacity-15 hover:bg-opacity-25 border-solid border-2 text-neutral-800 dark:text-neutral-100',
      solid: 'bg-opacity-100 border-transparent text-neutral-100',
    },
    variant: {
      primary: 'bg-blue-600 border-blue-600',
      secondary: 'bg-gray-500 border-gray-500',
      success: 'bg-green-600 border-green-600',
      error: 'bg-red-600 border-red-600',
      alert:'bg-yellow-600 border-yellow-600',
      ghost:'bg-transparent dark:border-neutral-400 border-neutral-500'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-5 text-lg'
    },
    rounded: {
      full: 'rounded-full',
      md: 'rounded-md',
      none: 'rounded'
    }
  },
  compoundVariants: [
    {
      type: 'outlined',
      variant: 'ghost',
      class: 'hover:dark:border-neutral-100 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 hover:dark:text-neutral-50'
    },
    {
      type: 'solid',
      variant: 'ghost',
      class: 'text-neutral-600 hover:text-neutral-500 dark:text-neutral-400 hover:dark:text-neutral-500'
    },
    {
      type: 'solid',
      variant: ['alert', 'error', 'primary', 'secondary', 'success'],
      class: 'hover:bg-opacity-90'
    }
  ],
  defaultVariants: { type: 'solid', size: 'md', variant: 'ghost', rounded: 'none'}
});

function Button(props: ButtonProps) {
  const { className, children } = props
  return <button className={twMerge('btn', buttonVariants(props), className)}>{children}</button>
}

export default Button