import type { Meta, StoryObj } from '@storybook/react'
import { Button }  from './src'

const meta = {
  title: 'Packages/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Let's code",
  },
}

export const Outlined: Story = {
  args: {
    children: "Let's code",
    size: 'sm',
    rounded: 'md',
    type: 'outlined',
    variant: 'ghost'
  },
}

export const Solid: Story = {
  args: {
    children: "Let's code",
    size: 'lg',
    rounded: 'full',
    type: 'solid',
    variant: 'primary'
  },
}