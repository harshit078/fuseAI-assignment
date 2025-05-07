import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

import { FuseAISidebar } from './FuseAISidebar';
import { FuseAIHeader } from './FuseAIHeader';
import { FuseAISteps } from './FuseAISteps';
import { FuseAIJourney } from './FuseAIJourney';
import { FuseAIEmailEditor } from './FuseAIEmailEditor';

export interface FuseAIEngagementProps {
  className?: string;
}

export const FuseAIEngagement: React.FC<FuseAIEngagementProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState('Email Inbox');
  
  const tabs = [
    'Email Inbox',
    'LinkedIn Inbox',
    'LinkedIn Network',
    'Campaigns',
    'Analytics',
    'Queue'
  ];

  return (
    <div className={`flex h-screen bg-white ${className}`}>
      <FuseAISidebar />
      
      <div className="flex flex-col flex-1">
        <FuseAIHeader title="AI Engagement" />
        {/* Tabs*/}
        <div className="w-full mt-3 border-b border-gray-200">
          <div className="flex max-w-screen mx-auto px-6 ">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`fuseai-tab mr-6 pb-4 border-b-2 ${activeTab === tab && tab === 'Email Inbox' ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        {/* Steps*/}
        <div className="w-full mt-3 border-b border-gray-200">
          <div className="flex items-center justify-between max-w-screen mx-auto px-6 py-2">
            <FuseAISteps />
            <div className="flex mb-3 gap-3">
              <Button className="rounded-xl w-24 font-medium">Back</Button>
              <Button className="bg-black rounded-xl w-24 text-white hover:bg-gray-800 font-medium">Next</Button>
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-auto">
          <div className="max-w-screen mx-auto">
            {/* Main Content */}
            <div className="flex h-[calc(100vh-160px)]">
              {/* Left panel */}
              <div className="w-[350px] p-4 shrink-0 border-r border-gray-200 pr-6 sticky top-[112px] h-[calc(100vh-160px)] bg-white z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-fuseai-black text-base">Add Step</h3>
                </div>
                {/* Email/LinkedIn buttons */}
                <div className="flex gap-3 mb-6">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors">
                  <img src="/Gmail Logo Icon.svg" alt="Gmail logo" className='w-5 h-5' />
                    <span className="text-sm font-medium">Email</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors">
                    <img src="/LinkedIn Icons.svg" alt="Linkedin Icon" className='w-5 h-5' />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-fuseai-black mb-3">Journey</h3>
                  <FuseAIJourney />
                </div>
              </div>
              {/* Right panel */}
              <div className="flex-1 bg-[#F6F6F6] p-12 overflow-y-auto h-[calc(100vh-160px)]">
                <FuseAIEmailEditor 
                  recipient={undefined} 
                  subject={''} 
                  content={{ greeting: '', body: [], signature: { name: '', title: '' } }}
                  selected={true}
                  variant="first"
                />
                <div className="mt-8">
                  <FuseAIEmailEditor 
                    isSecondEmail={true} 
                    recipient={undefined} 
                    subject={''} 
                    content={{ greeting: '', body: [], signature: { name: '', title: '' } }}
                    selected={false}
                    variant="second"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FuseAIEngagement;
