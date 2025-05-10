import React from 'react';
import { Clock, Mail, Trash, Route } from 'lucide-react';

export const FuseAIJourney: React.FC = () => {
  const journeyItems = [
    { 
      id: 1, 
      type: 'wait', 
      days: 3 
    },
    { 
      id: 2, 
      type: 'email'
    },
    { 
      id: 3, 
      type: 'wait', 
      days: 6 
    },
    { 
      id: 4, 
      type: 'email',
      content: 'Transforming Mental Wellness for your team' 
    },
    { 
      id: 5, 
      type: 'wait', 
      days: 9
    },
    { 
      id: 6, 
      type: 'email'
    }
  ];

  const selectedId = 2;
  return (
    <div className="space-y-2">
      {journeyItems.map((item) => {
        const isSelected = item.id === selectedId && item.type === 'email';
        if (item.type === 'wait') {
          return (
            <div
              key={item.id}
              className="flex items-center py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-[#F4F4F4] transition-colors"
            >
              <div className="flex-1 gap-2 flex items-center">
                <Route className='w-4 h-4'/>
                <span className="font-inter font-medium text-sm leading-normal tracking-normal text-left text-black">Wait for {item.days} days then</span>
              </div>
              <button className="text-gray-500 hover:text-black">
                <Trash className='w-4 h-4'/>
              </button>
            </div>
          );
        }
        if (item.type === 'email') {
          return (
            <div
              key={item.id}
              className={`flex flex-col gap-0.5 py-3 px-4 rounded-xl border transition-colors ${isSelected ? 'border-[#2D7A89] bg-[#F6FAFB]' : 'border-gray-200 bg-white hover:bg-[#F4F4F4]'} group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center flex-1 min-w-0">
                  <Mail className='w-4 h-4'/>
                  <span className="font-inter font-medium text-sm leading-normal tracking-normal text-left text-black truncate">Email</span>
                </div>
                <button className="text-gray-500 hover:text-black">
                <Trash className='w-4 h-4'/>
                </button>
              </div>
              {item.content && (
                <span className="text-sm text-gray-700 font-normal truncate ">{item.content}</span>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
