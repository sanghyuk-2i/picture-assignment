import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from '@repo/ui';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
    },
    alignItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: ['start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'],
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = Array.from({ length: 3 }, (_, index) => (
  <div
    key={index}
    className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-400 p-3 text-2xl font-bold text-white"
  >
    {index}
  </div>
));

export const Row: Story = {
  args: {
    direction: 'row',
    className: 'gap-2',
    children,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    className: 'gap-2',
    children,
  },
};

export const RowReverse: Story = {
  args: {
    direction: 'rowReverse',
    className: 'gap-2',
    children,
  },
};

export const ColumnReverse: Story = {
  args: {
    direction: 'columnReverse',
    className: 'gap-2',
    children,
  },
};
