import { Button } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: "버튼 형태 (primary: 기본, secondary: 보조)",
      table: {
        defaultValue: {
          summary: 'primary',
        },
      }
    },
    fullWidth: {
      control: 'boolean',
      description: "버튼의 너비를 100%로 설정",
      table: {
        defaultValue: {
          summary: 'false',
        },
      }
    },
    loading: {
      control: 'boolean',
      description: "버튼에 로딩 스피너를 표시",
      table: {
        defaultValue: {
          summary: 'false',
        },
      }
    },
    loadingText: {
      control: 'text',
      description: "로딩 스피너 옆에 표시될 텍스트",
      table: {
        defaultValue: {
          summary: '로딩중',
        },
      }
    },
    leftDecorator: {
      control: 'object',
      description: "버튼 왼쪽에 표시될 아이콘 또는 컴포넌트",
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      }
    },
    rightDecorator: {
      control: "object",
      description: "버튼 오른쪽에 표시될 아이콘 또는 컴포넌트",
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      }
    },
    disabled: {
      control: 'boolean',
      description: "버튼을 비활성화 상태로 설정",
      table: {
        defaultValue: {
          summary: 'false',
        },
      }
    },
  },
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
