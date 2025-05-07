
import type { Meta, StoryObj } from '@storybook/react';
import { FuseAISteps } from '../components/FuseAI/FuseAISteps';

const meta = {
  title: 'FuseAI/FuseAISteps',
  component: FuseAISteps,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FuseAISteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
