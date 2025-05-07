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

const WaitForDays: React.FC<{ days: number }> = ({ days }) => (
  <div className="flex flex-col items-center mb-4">
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
    <div className="h-16 border-l-2 border-dashed border-slate-500" />
  </div>
);

export const FuseAIEmailEditor: React.FC<FuseAIEmailEditorProps> = ({
  recipient,
  subject,
  content,
  onCopy,
  onDelete
}) => {
  return (
    <TooltipProvider>
      <div className=" bg-relative">
        { <WaitForDays days={3} />}
        
        <div className="border border-[#2D7A89] rounded-lg bg-white overflow-hidden shadow-sm">
          {/* Email Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-[#e7e7e734]">
            <div className="flex items-center">
              <div className=" rounded-sm mr-2 flex items-center justify-center text-white text-xs font-bold">
              <img src="/public/Gmail Logo Icon.svg" alt ="Gmail logo" className='w-5 h-5' />
              </div>
              <span className="font-medium text-gray-800">Email</span>
              <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
            </div>
            <div className="flex gap-3">
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
          
          {/* Email Content */}
          <div className="p-4 ">
            <div className="flex border-b border-gray-200 items-start mb-4">
              <span className="text-sm   text-gray-700 mr-2 mt-1.5">To:</span>
              <div className="flex-1  flex">
                <div className="inline-flex items-center  border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-1.5 flex items-center justify-center text-white text-xs font-semibold">
                    J
                  </div>
                  <span className="mr-1 font-semibold">John smith</span>
                  <span className=" text-xs">John@domain.com</span>
                  <button className="ml-2 text-gray-400 hover:text-gray-600">
                  <RefreshCcw className="ml-1 h-4 w-4 text-cyan-600" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-4 border-b border-gray-200 pb-3">
            <p className="mb-1  text-gray-800">Transforming Mental Wellness for Your Team</p>
            </div>
            
            <div className="mb-6 prose prose-sm max-w-none">
              <p className="mb-4 text-gray-800">{content.greeting}</p>
              {content.body.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">{paragraph}</p>
              ))}
              {content.signature && (
                <>
                  <p className="mb-1 text-gray-800">Hi John,
I hope this message finds you well! As a CPA and owner of your firm, I know that supporting the mental wellness of both your team and clients is crucial, especially during busy periods.
Talkhappi offers innovative AI-powered therapy that can unlock instant mental wellness. Our platform provides fast, personalized counseling—eliminating long wait times and delivering tailored feedback to empower the mental health of your staff.</p>
                  <p className="mb-1 text-gray-800">{content.signature.name}</p>
                  <p className="text-gray-800">{content.signature.title}</p>
                </>
              )}
            </div>
          </div>

          {/* Editor Toolbar */}
          <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button className="text-sm bg-gray-50 border border-gray-200 rounded px-2 py-1 flex items-center hover:bg-gray-100 transition-colors">
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
            
            <div className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
              <Sparkles className="ml-1 h-4 w-4 text-gray-500" />
                <span className="text-sm  font-medium">AI Generated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
