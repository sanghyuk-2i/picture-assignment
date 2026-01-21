import { Grid } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'number',
      description: "Grid 컨테이너의 열 개수",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
    },
    rows: {
      control: 'number',
      description: "Grid 컨테이너의 행 개수",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = Array.from({ length: 6 }, (_, index) => (
  <div
    key={index}
    className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-400 p-3 text-2xl font-bold text-white"
  >
    {index}
  </div>
));

export const Row: Story = {
  args: {
    rows: 3,
    className: 'gap-2',
    children,
  },
};

export const Column: Story = {
  args: {
    columns: 2,
    className: 'gap-2',
    children,
  },
};
