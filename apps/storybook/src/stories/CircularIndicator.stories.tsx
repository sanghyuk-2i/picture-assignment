import { CircularIndicator } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
      description: "스피너의 크기",
      table: {
        defaultValue: {
          summary: "48",
        },
      }
    },
    startColor: {
      control: 'color',
      description: "스피너의 시작 색상",
      table: {
        defaultValue: {
          summary: '#3b82f6',
        },
      }
    },
    endColor: {
      control: 'color',
      description: "스피너의 끝 색상",
      table: {
        defaultValue: {
          summary: '#93c5fd',
        },
      }
    },
  },
} satisfies Meta<typeof CircularIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
