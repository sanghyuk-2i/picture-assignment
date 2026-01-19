import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@repo/ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '버튼 텍스트',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '버튼 텍스트',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: '버튼 텍스트',
  },
};

export const IconButton: Story = {
  args: {
    // leftDecorator: <img src="/bell.svg" alt="bell" width={24} height={24} />,
    leftDecorator: <img src="/bell.svg" alt="bell" />,
    children: '버튼 텍스트',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '버튼 텍스트',
  },
};
