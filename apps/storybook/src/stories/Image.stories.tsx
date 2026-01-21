import { Image } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onLoad: fn(),
  },
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['4 / 3', '16 / 9', '1 / 1'],
      description: "이미지의 비율",
      table: {
        defaultValue: {
          summary: "4 / 3",
        },
      }
    },
    src: {
      control: 'text',
      description: "이미지의 소스 URL",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
    },
    alt: {
      control: 'text',
      description: "이미지의 대체 텍스트",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
    },
    className: {
      control: 'text',
      description: "이미지의 클래스",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      }
    },
  },
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
