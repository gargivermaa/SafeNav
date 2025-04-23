import React from 'react';

const PhoneFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-4 px-4">
      <div className="relative mx-auto" style={{ width: '375px', height: '812px' }}>
        {/* Phone frame */}
        <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
            <div className="w-16 h-4 bg-black rounded-lg relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="h-6 bg-black text-white flex items-center justify-between px-4 pt-2">
            <div className="text-[10px] font-medium">9:41</div>
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-.5a1 1 0 011-1h3.5a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
              </svg>
            </div>
          </div>
          
          {/* Content area */}
          <div className="absolute inset-0 pt-10 overflow-y-auto bg-white" 
               style={{ 
                 borderRadius: '32px',
                 top: '16px',
                 bottom: '8px',
                 left: '8px',
                 right: '8px',
                 maxHeight: 'calc(100% - 24px)',
                 transform: 'scale(0.98)'
               }}>
            {children}
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
