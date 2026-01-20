import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from '@repo/ui';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: `https://picsum.photos/400/300?random=${Date.now()}`,
    alt: 'test',
    aspectRatio: '4 / 3',
    className: 'rounded-2xl',
  },
};

export const Loading: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300.png?text=Loading...',
    alt: 'Loading example',
    aspectRatio: '4 / 3',
    className: 'rounded-2xl',
  },
};
