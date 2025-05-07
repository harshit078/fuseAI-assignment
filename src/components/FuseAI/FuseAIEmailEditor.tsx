import React from 'react';
import { 
  RefreshCw, AlignLeft, AlignCenter, AlignRight,
  ListOrdered, CheckSquare, Image as ImageIcon,
  Code, Bold, Italic, Link as LinkIcon,
  Underline, Strikethrough, ChevronDown,
  Copy, Trash2, RefreshCcw, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipPortal } from '@/components/ui/tooltip';

interface EmailRecipient {
  name: string;
  email: string;
  initial: string;
}

interface FuseAIEmailEditorProps {
  isSecondEmail?: boolean;
  recipient: EmailRecipient;
  subject: string;
  content: {
    greeting: string;
    body: string[];
    signature?: {
      name: string;
      title: string;
    };
  };
  onCopy?: () => void;
  onDelete?: () => void;
  selected?: boolean;
  variant?: 'first' | 'second';
}

const EditorToolbarButton: React.FC<{
  icon: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}> = ({ icon, tooltip, onClick, className }) => {
  const button = (
    <Button
      variant="icon"
      size="icon"
      className={className}
      onClick={onClick}
      aria-label={tooltip}
    >
      {icon}
    </Button>
  );

  if (!tooltip) return button;

  return (
    <TooltipProvider delayDuration={300}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          {button}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            <p>{tooltip}</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};

const WaitForDays: React.FC<{ days: number; dashedTop?: boolean }> = ({ days, dashedTop }) => (
  <div className="flex flex-col items-center">
    {dashedTop && <div className="h-12 w-0.5 bg-[repeating-linear-gradient(to_bottom,_#6B7280_0px,_#6B7280_4px,_transparent_4px,_transparent_10px)]" />}
    <div className="bg-white border border-gray-200 rounded-md shadow-sm flex items-center py-1.5 px-3">
      <span className="text-sm text-black mr-2">Wait for</span>
      <div className="relative">
        <button className="flex items-center bg-white border border-gray-200 rounded-3xl px-2 py-1 text-sm">
          <span className="font-medium">{days} days</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>
      <span className="text-sm text-black ml-2">then</span>
    </div>
    <div className="h-12 w-0.5 bg-[repeating-linear-gradient(to_bottom,_#6B7280_0px,_#6B7280_4px,_transparent_4px,_transparent_10px)]" />
  </div>
);

const AIGeneratedToggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`flex items-center gap-2 focus:outline-none`}
  >
    <Sparkles className={`h-5 w-5 ${checked ? 'text-[#407986]' : 'text-gray-500'}`} />
    <span className={`font-medium text-base ${checked ? 'text-[#407986]' : 'text-gray-700'}`}>AI Generated</span>
    <span
      className={`relative inline-block w-10 h-6 transition-colors duration-200 ${checked ? 'bg-[#407986]' : 'bg-gray-300'} rounded`}
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded shadow transform transition-transform duration-200 ${checked ? 'translate-x-4' : ''}`}
      />
    </span>
  </button>
);

export const FuseAIEmailEditor: React.FC<FuseAIEmailEditorProps> = ({
  onCopy,
  onDelete,
  selected = false,
  variant = 'first',
}) => {
  const cardText = variant === 'first'
    ? {
        greeting: 'Hi John,',
        body: [
          "I hope this message finds you well! As a CPA and owner of your firm, I know that supporting the mental wellness of both your team and clients is crucial, especially during busy periods.",
          "Talkhappi offers innovative AI-powered therapy that can unlock instant mental wellness. Our platform provides fast, personalized counseling—eliminating long wait times and delivering tailored feedback to empower the mental health of your staff."
        ],
        signature: null
      }
    : {
        greeting: 'Hi Eva,',
        body: [
          "As a leader at Tai Tung Pharmacy, I can imagine supporting your team through challenges like isolation and stress might be closely aligned with your company's commitment to wellness. At Talkhappi, we've designed an AI-based therapy platform specifically for personalized mental health support, helping tackle feelings of isolation and empowering individuals to unlock their full potential.",
          "Could we explore how Talkhappi might support your team's well-being goals? I'd love to connect soon—here's my calendar to find a convenient time: <calendarLink>https://calendly.com/app/intro/meetings</calendarLink>"
        ],
        signature: {
          name: 'Ethan Parkinson',
          title: 'Founder, Talkhappi'
        }
      };
  const [aiGenerated, setAIGenerated] = React.useState(variant === 'first');
  return (
    <TooltipProvider>
      <div className="bg-relative">
        {variant === 'first' && <WaitForDays days={3} />}
        {variant === 'second' && <WaitForDays days={3} dashedTop />}
        {/* Email Editor */}
        <div className="flex justify-center items-center w-full h-full">
        <div className={`rounded-lg bg-white shadow-md ${variant === 'first' && selected ? 'border border-[#2D7A89]' : ''} w-[50vw]`}>
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-[#e7e7e734]">
            <div className="flex items-center">
              <div className="rounded-sm mr-2 flex items-center justify-center text-white text-xs font-bold">
              <img src="/Gmail Logo Icon.svg" alt="Gmail logo" className='w-5 h-5' />
              </div>
              <span className="font-medium text-gray-800">Email</span>
              <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
            </div>
            <div className="flex  gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={onCopy}
                className="text-gray-500 hover:text-gray-700"
              >
                <Copy className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onDelete}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="px-4 pt-4">
            <div className="flex items-start mb-4">
              <span className="text-sm text-gray-700 mr-2 mt-1.5">To:</span>
              <div className="flex-1 flex">
                <div className="inline-flex items-center border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-1.5 flex items-center justify-center text-white text-xs font-semibold">
                    J
                  </div>
                  <span className="mr-1 font-semibold">{variant === 'first' ? 'John Smith' : 'John Smith'}</span>
                  <span className="text-xs">john@domain.com</span>
                  <button className="ml-2 text-gray-400 hover:text-gray-600">
                    <RefreshCcw className="ml-1 h-4 w-4 text-cyan-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 w-full mb-4" />
            <div className="mb-4 border-b border-gray-200 pb-3">
              <p className="mb-1 text-gray-800">Transforming Mental Wellness for Your Team</p>
            </div>
            <div className="mb-6 prose prose-sm max-w-none">
              <p className="mb-4 text-gray-800">{cardText.greeting}</p>
              {cardText.body.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">{paragraph}</p>
              ))}
              {cardText.signature && (
                <>
                  <p className="mb-1 text-gray-800">Warm regards,</p>
                  <p className="mb-1 text-gray-800">{cardText.signature.name}</p>
                  <p className="text-gray-800">{cardText.signature.title}</p>
                </>
              )}
            </div>
          </div>
          {/* Editor Toolbar */}
          <div className="border-t rounded-b-lg border-gray-200 bg-[#E7E7E7] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button className="text-sm  border border-gray-200 rounded px-2 py-1 flex items-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium">Normal text</span>
                <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
              </button>
              <div className="flex items-center ml-1">
                <EditorToolbarButton icon={<Bold size={18} />} tooltip="Bold" />
                <EditorToolbarButton icon={<Italic size={18} />} tooltip="Italic" />
                <EditorToolbarButton icon={<Underline size={18} />} tooltip="Underline" />
                <EditorToolbarButton icon={<Strikethrough size={18} />} tooltip="Strikethrough" />
                <EditorToolbarButton icon={<LinkIcon size={18} />} tooltip="Insert link" />
              </div>
              <div className="flex items-center ml-1 border-l border-gray-200 pl-1">
                <EditorToolbarButton icon={<AlignLeft size={18} />} tooltip="Align left" />
                <EditorToolbarButton icon={<AlignCenter size={18} />} tooltip="Center" />
                <EditorToolbarButton icon={<AlignRight size={18} />} tooltip="Align right" />
              </div>
              <div className="flex items-center ml-1 border-l border-gray-200 pl-1">
                <EditorToolbarButton icon={<ListOrdered size={18} />} tooltip="Numbered list" />
                <EditorToolbarButton icon={<CheckSquare size={18} />} tooltip="Checklist" />
              </div>
              <div className="flex items-center ml-1 border-l border-gray-200 pl-1">
                <EditorToolbarButton icon={<ImageIcon size={18} />} tooltip="Insert image" />
                <EditorToolbarButton icon={<Code size={18} />} tooltip="Insert code" />
              </div>
            </div>
            <AIGeneratedToggle checked={aiGenerated} onChange={() => setAIGenerated((v) => !v)} />
          </div>
        </div>
        </div>
        {/* Message Topic */}
        {variant === 'second' && (
          <div className="flex justify-center items-center w-full h-full">
          <div className="border w-[50vw] bg-[#E7E7E7] border-t px-4 py-3 flex flex-col gap-2 relative -mt-1">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-sm">Message Topic</span>
              <div className="relative group ml-2">
                <span className="text-xs bg-black text-white w-80 rounded-md px-2 py-1 absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 transition-opacity">AI generated this prompt as a topic based on the data found about the leads, but you can edit if needed.</span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">i</text></svg>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-2 text-sm bg-gray-50 mb-2">
              Unlock Your Potential: Discover AI-Powered Therapy: Embark on a journey of self-discovery with Talkhappi's groundbreaking AI-based therapy platform. Designed for those feeling isolated, our technology offers personalized mental health assistance, combining innovative AI with compassionate counseling. I
            </div>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <Button className="bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-1 text-xs font-medium hover:bg-gray-100">Write in spanish</Button>
                <Button className="bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-1 text-xs font-medium hover:bg-gray-100">Use bullet points</Button>
                <Button className="bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-1 text-xs font-medium hover:bg-gray-100">Make it more casual</Button>
              </div>
              <Button className="bg-black text-white rounded px-3 py-1 text-xs font-medium hover:bg-gray-800">Regenerate</Button>
            </div>
          </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};
