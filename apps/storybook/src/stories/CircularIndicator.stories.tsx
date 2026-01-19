import type { Meta, StoryObj } from '@storybook/react-vite';

import { CircularIndicator } from '@repo/ui';

const meta = {
  title: 'Components/Circular Indicator',
  component: CircularIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 48,
    },
    startColor: {
      control: 'color',
    },
    endColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof CircularIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
