import React from 'react';

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

  // Assume the selected email is id:2 for this example
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
              <div className="flex-1 flex items-center">
                <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#676879" strokeWidth="1.5" />
                  <path d="M12 6V12L16 14" stroke="#676879" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-base font-medium text-black">Wait for {item.days} days then</span>
              </div>
              <button className="text-gray-500 hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                <div className="flex items-center flex-1 min-w-0">
                  <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="16" x="2" y="4" rx="2" stroke="#676879" strokeWidth="1.5" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="#676879" strokeWidth="1.5" />
                  </svg>
                  <span className="text-base font-bold text-black truncate">Email</span>
                </div>
                <button className="text-gray-500 hover:text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {item.content && (
                <span className="text-sm text-gray-700 font-normal truncate mt-0.5 ml-7">{item.content}</span>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
