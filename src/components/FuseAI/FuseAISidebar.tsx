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
  User,
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
    { title: 'Profile', icon: <User size={18} />, section: null },
  ];

  return (
    <aside className="w-[200px] bg-[#F4F3F0] flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-1">
          <img src="/FuseAi logo.svg" alt="FuseAI" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {sidebarItems.map((item, index) => {
          if (item.section) {
            return (
              <div key={index} className="px-4 py-2 text-xs font-semibold text-[#888888]">
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
              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer"
            >
              {item.icon && (
                <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                  {item.icon}
                </div>
              )}
              <span className="text-sm text-[#888888]">{item.title}</span>
            </div>
          );
        })}
      </div>

      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs">295K Credits</span>
        </div>
      </div>

      <div className="mb-3 px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer">
        <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-xs text-white">
          S
        </div>
        <span className="text-sm">Profile</span>
      </div>
    </aside>
  );
};
