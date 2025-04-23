import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-4 pb-6 overflow-y-auto">
      <div className="px-4">
        <div className="mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h1>
            <p className="text-sm text-gray-600">Everything you need to know about SafeNav</p>
          </div>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="rounded-xl shadow-lg overflow-hidden" style={{background: 'linear-gradient(90deg, #ede7f6 0%, #ffe0b2 100%)'}}>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">How does SafeNav prioritize routes?</h3>
                <p className="text-sm text-gray-700">
                  Unlike traditional navigation apps that prioritize the fastest route, SafeNav prioritizes your safety. 
                  We analyze crime data, time of day, and safety reports to recommend routes with the 
                  lowest safety risks. Our recommended route might not always be the fastest, but it will be 
                  the safest option available.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="rounded-xl shadow-lg overflow-hidden" style={{background: 'linear-gradient(90deg, #ede7f6 0%, #ffe0b2 100%)'}}>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">What data determines route safety?</h3>
                <p className="text-sm text-gray-700">
                  SafeNav uses multiple data sources:
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-0.5">
                  <li>Crime reports from local law enforcement</li>
                  <li>Time-of-day safety patterns</li>
                  <li>Street lighting information</li>
                  <li>Population density data</li>
                  <li>User-reported incidents</li>
                </ul>
                <p className="text-sm text-gray-700 mt-1">
                  Our algorithm analyzes this data to generate a safety score for each route.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">What do route colors mean?</h3>
                <p className="text-sm text-gray-700">
                  Routes are color-coded by safety level:
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-0.5">
                  <li><span className="text-green-600 font-semibold">Green</span>: Highest safety rating</li>
                  <li><span className="text-yellow-500 font-semibold">Yellow</span>: Moderate safety concerns</li>
                  <li><span className="text-red-600 font-semibold">Red</span>: Safety concerns, not recommended</li>
                </ul>
                <p className="text-sm text-gray-700 mt-1">
                  The safest route is always our primary recommendation.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">How accurate is the safety information?</h3>
                <p className="text-sm text-gray-700">
                  We ensure accuracy by:
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-0.5">
                  <li>Regular data updates from official sources</li>
                  <li>Incorporating user feedback</li>
                  <li>Using machine learning to improve over time</li>
                </ul>
                <p className="text-sm text-gray-700 mt-1">
                  Safety conditions can change rapidly. Always remain aware of your surroundings.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">What to do in an emergency?</h3>
                <p className="text-sm text-gray-700">
                  In an emergency:
                </p>
                <ol className="list-decimal pl-5 mt-1 text-sm text-gray-700 space-y-0.5">
                  <li>Use our SOS feature to alert contacts</li>
                  <li>Call emergency services (911)</li>
                  <li>Move to a safe location if possible</li>
                  <li>Report the incident when safe</li>
                </ol>
              </div>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">Can I choose a faster but less safe route?</h3>
                <p className="text-sm text-gray-700">
                  Yes, we show alternative routes including the fastest option. Each route displays its safety score so you can make an informed decision.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Routes with safety concerns will show additional safety tips specific to that route.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 7 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">How can I help improve SafeNav?</h3>
                <p className="text-sm text-gray-700">
                  You can help by:
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-0.5">
                  <li>Reporting safety concerns or incidents</li>
                  <li>Providing feedback on routes</li>
                  <li>Suggesting new features</li>
                  <li>Sharing SafeNav with others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
