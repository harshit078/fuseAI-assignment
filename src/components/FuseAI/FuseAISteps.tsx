import React from 'react';

export const FuseAISteps: React.FC = () => {
  const steps = [
    { 
      id: 1, 
      title: 'Target Customer Persona', 
      status: 'completed' 
    },
    { 
      id: 2, 
      title: 'Campaign Push', 
      status: 'completed' 
    },
    { 
      id: 3, 
      title: 'Sequence', 
      status: 'completed' 
    },
    { 
      id: 4, 
      title: 'Schedule', 
      status: 'pending' 
    }
  ];

  return (
    <div className="flex h-8 items-center gap-6 mb-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center">
            <div className={`fuseai-step-circle ${step.status}`}> 
              {step.status === 'completed' ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : step.id}
            </div>
            <span className="ml-2 text-sm font-medium text-fuseai-black">{step.title}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
