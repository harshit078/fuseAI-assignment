
import type { Meta, StoryObj } from '@storybook/react';
import { FuseAIHeader } from '../components/FuseAI/FuseAIHeader';

const meta = {
  title: 'FuseAI/FuseAIHeader',
  component: FuseAIHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FuseAIHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'AI Engagement',
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'AI Engagement with a Very Long Title That Might Truncate',
  },
};
