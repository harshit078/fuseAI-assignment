
import type { Meta, StoryObj } from '@storybook/react';
import { FuseAIJourney } from '../components/FuseAI/FuseAIJourney';

const meta = {
  title: 'FuseAI/FuseAIJourney',
  component: FuseAIJourney,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FuseAIJourney>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
