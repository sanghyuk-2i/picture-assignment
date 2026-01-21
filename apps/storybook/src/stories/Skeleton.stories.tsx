import { Skeleton } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
      description: "스켈레톤의 형태",
      table: {
        defaultValue: {
          summary: "default",
        },
      }
    },
    className: {
      control: 'text',
      description: "스켈레톤의 클래스",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
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
