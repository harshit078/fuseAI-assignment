
import type { Meta, StoryObj } from '@storybook/react';
import FuseAIEngagement from '../components/FuseAI/FuseAIEngagement';

const meta = {
  title: 'FuseAI/FuseAIEngagement',
  component: FuseAIEngagement,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'This is the main FuseAI Engagement page that combines all components to create a complete AI engagement workflow.'
      },
    },
  },
} satisfies Meta<typeof FuseAIEngagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClassName: Story = {
  args: {
    className: 'bg-gray-50',
  },
};
