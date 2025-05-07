
import type { Meta, StoryObj } from '@storybook/react';
import { FuseAISidebar } from '../components/FuseAI/FuseAISidebar';

const meta = {
  title: 'FuseAI/FuseAISidebar',
  component: FuseAISidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FuseAISidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
