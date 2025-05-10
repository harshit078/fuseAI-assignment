import React from 'react';
import {
  Home,
  MessageSquareMore,
  Folder,
  Database,
  List,
  CloudUpload,
  Mail,
  Phone,
  Target,
  Users,
  ShoppingBag,
  LoaderCircle,
} from 'lucide-react';

export const FuseAISidebar: React.FC = () => {
  const sidebarItems = [
    { title: 'Home', icon: <Home size={18} />, section: null },
    { title: 'Fuse Agent', icon: <MessageSquareMore size={18} />, section: null },
    { title: 'Manage', icon: null, section: true },
    { title: 'Actions', icon: <Target size={18} />, section: null },
    { title: 'Records', icon: <Folder size={18} />, section: null },
    { title: 'Search', icon: null, section: true },
    { title: 'Contact Database', icon: <Database size={18} />, section: null },
    { title: 'Prospect Lists', icon: <List size={18} />, section: null },
    { title: 'CSV Enrichment', icon: <CloudUpload size={18} />, section: null },
    { title: 'Engage', icon: null, section: true },
    { title: 'Sequences', icon: <Mail size={18} />, section: null },
    { title: 'Conversations', icon: <Phone size={18} />, section: null },
    { title: 'Intent', icon: null, section: true },
    { title: 'Website Visitors', icon: <Users size={18} />, section: null },
    { title: 'Buyer Intent', icon: <ShoppingBag size={18} />, section: null },
    { title: '', icon: null, section: true },
  ];

  return (
    <aside className="flex flex-col w-[199px]  items-start gap-0 px-2 py-4 bg-[#F4F3F0]">
      <div className="p-2">
        <div className="flex mb-2 items-center gap-1">
        <img src="/FuseAI logo.svg" alt="FuseAI logo" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {sidebarItems.map((item, index) => {
          if (item.section) {
            return (
              <div key={index} className="px-4 mt-4 py-2 font-inter font-semibold text-sm tracking-normal leading-normal text-left text-[#888888]">
                {item.title}
              </div>
            );
          }

          if (item.title === '') {
            return <div key={index} className="flex-1" />;
          }

          return (
            <div
              key={index}
              className="px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 cursor-pointer"
            >
              {item.icon && (
                <div className="w-5 h-5 flex items-center justify-centers text-gray-500">
                  {item.icon}
                </div>
              )}
              <span className="font-sans font-normal text-[14px] leading-normal tracking-normal text-left text-[#888888]">{item.title}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center">
            <LoaderCircle  strokeWidth={2} color='#2D7A89' />
          </div>
          <span className="font-sans font-semibold text-[14px] leading-normal tracking-normal text-[#888888] text-left">295K Credits</span>
        </div>
      </div>
      <div className="mb-1 px-4 py-1 flex items-center gap-2 hover:bg-gray-200 cursor-pointer">
        <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-xs text-white">
          S
        </div>
        <span className="text-sm text-[#888888]">Profile</span>
      </div>
      </div>

    </aside>
  );
};
