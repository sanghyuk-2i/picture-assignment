import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from '@repo/ui';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'circle', 'square'],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    variant: 'square',
  },
};