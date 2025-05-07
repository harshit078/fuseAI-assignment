import type { Meta, StoryObj } from '@storybook/react';
import { FuseAIEmailEditor } from '../components/FuseAI/FuseAIEmailEditor';

const meta: Meta<typeof FuseAIEmailEditor> = {
  title: 'FuseAI/FuseAIEmailEditor',
  component: FuseAIEmailEditor,
  tags: ['autodocs'],
  argTypes: {
    recipient: { control: 'object' },
    subject: { control: 'text' },
    content: { control: 'object' },
    selected: { control: 'boolean' },
    variant: { control: { type: 'select', options: ['first', 'second'] } },
    isSecondEmail: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const FullScreenContainer = (props: { children: React.ReactNode }) => (
  <div className="w-full h-screen bg-[#F6F6F6] flex items-center justify-center">
    <div className="w-full h-full">{props.children}</div>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <FullScreenContainer>
      <FuseAIEmailEditor {...args} />
    </FullScreenContainer>
  ),
  args: {
    recipient: { name: 'John Smith', email: 'john@domain.com', initial: 'J' },
    subject: 'Transforming Mental Wellness for Your Team',
    content: {
      greeting: 'Hi John,',
      body: [
        'I hope this message finds you well! As a CPA and owner of your firm, I know that supporting the mental wellness of both your team and clients is crucial, especially during busy periods.',
        'Talkhappi offers innovative AI-powered therapy that can unlock instant mental wellness. Our platform provides fast, personalized counseling—eliminating long wait times and delivering tailored feedback to empower the mental health of your staff.'
      ],
      signature: { name: '', title: '' }
    },
    selected: true,
    variant: 'first',
  },
};

export const SecondEmail: Story = {
  render: (args) => (
    <FullScreenContainer>
      <FuseAIEmailEditor {...args} />
    </FullScreenContainer>
  ),
  args: {
    recipient: { name: 'Eva', email: 'eva@domain.com', initial: 'E' },
    subject: 'Transforming Mental Wellness for Your Team',
    content: {
      greeting: 'Hi Eva,',
      body: [
        "As a leader at Tai Tung Pharmacy, I can imagine supporting your team through challenges like isolation and stress might be closely aligned with your company's commitment to wellness. At Talkhappi, we've designed an AI-based therapy platform specifically for personalized mental health support, helping tackle feelings of isolation and empowering individuals to unlock their full potential.",
        "Could we explore how Talkhappi might support your team's well-being goals? I'd love to connect soon—here's my calendar to find a convenient time: <calendarLink>https://calendly.com/app/intro/meetings</calendarLink>"
      ],
      signature: { name: 'Ethan Parkinson', title: 'Founder, Talkhappi' }
    },
    selected: false,
    variant: 'second',
    isSecondEmail: true,
  },
};

export const WaitForDaysDemo: Story = {
  render: () => (
    <div className="w-full h-screen bg-[#F6F6F6] flex flex-col items-center justify-center gap-12">
      {/* Top WaitForDays (no dashed line above) */}
      <div className="w-full flex justify-center">
        <div className="w-full h-full">
          <FuseAIEmailEditor
            recipient={{ name: 'John Smith', email: 'john@domain.com', initial: 'J' }}
            subject="Transforming Mental Wellness for Your Team"
            content={{
              greeting: 'Hi John,',
              body: [
                'I hope this message finds you well! As a CPA and owner of your firm, I know that supporting the mental wellness of both your team and clients is crucial, especially during busy periods.',
                'Talkhappi offers innovative AI-powered therapy that can unlock instant mental wellness. Our platform provides fast, personalized counseling—eliminating long wait times and delivering tailored feedback to empower the mental health of your staff.'
              ],
              signature: { name: '', title: '' }
            }}
            selected={true}
            variant="first"
          />
        </div>
      </div>
      {/* Between cards WaitForDays (with dashed line above) */}
      <div className="w-full flex justify-center">
        <div className="w-full h-full">
          <FuseAIEmailEditor
            recipient={{ name: 'Eva', email: 'eva@domain.com', initial: 'E' }}
            subject="Transforming Mental Wellness for Your Team"
            content={{
              greeting: 'Hi Eva,',
              body: [
                "As a leader at Tai Tung Pharmacy, I can imagine supporting your team through challenges like isolation and stress might be closely aligned with your company's commitment to wellness. At Talkhappi, we've designed an AI-based therapy platform specifically for personalized mental health support, helping tackle feelings of isolation and empowering individuals to unlock their full potential.",
                "Could we explore how Talkhappi might support your team's well-being goals? I'd love to connect soon—here's my calendar to find a convenient time: <calendarLink>https://calendly.com/app/intro/meetings</calendarLink>"
              ],
              signature: { name: 'Ethan Parkinson', title: 'Founder, Talkhappi' }
            }}
            selected={false}
            variant="second"
            isSecondEmail={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates WaitForDays at the top (no dashed line above) and between cards (with dashed line above), matching the new design.'
      }
    }
  }
};

export const Playground: Story = {
  render: (args) => (
    <FullScreenContainer>
      <FuseAIEmailEditor {...args} />
    </FullScreenContainer>
  ),
  args: {
    recipient: { name: 'John Smith', email: 'john@domain.com', initial: 'J' },
    subject: 'Transforming Mental Wellness for Your Team',
    content: {
      greeting: 'Hi John,',
      body: ['Body paragraph 1', 'Body paragraph 2'],
      signature: { name: '', title: '' }
    },
    selected: false,
    variant: 'first',
    isSecondEmail: false,
  },
};
