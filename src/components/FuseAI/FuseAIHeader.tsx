
import React from 'react';

interface FuseAIHeaderProps {
  title: string;
}

export const FuseAIHeader: React.FC<FuseAIHeaderProps> = ({ title }) => {
  return (
    <header className="h-12 border-b px-6 py-4 border-gray-200 flex items-center justify-between">
      <h1 className="font-bold text-fuseai-black text-base">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="w-10 h-7 flex items-center justify-center bg-gray-100 rounded-md text-md  font-medium">⌘ I</div>
      </div>
    </header>
  );
};
