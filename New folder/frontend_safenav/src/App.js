import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import SafeMap from "./components/safemap.jsx";
import RouteCard from "./components/RouteCard.jsx";
import SearchBox from "./components/SearchBox.jsx";
import MoodAnalysis from "./components/MoodAnalysis.jsx";
import Hero from "./components/Hero.jsx"; // Import the modern Hero component
import Navbar from "./components/Navbar.jsx"; // Import the modern Navbar component
import Footer from "./components/Footer.jsx"; // Import the Footer component
import FAQ from "./components/FAQ.jsx"; // Import the FAQ component
import PhoneFrame from './components/PhoneFrame.jsx';
import Features from './components/Features.jsx';
import AboutUs from "./components/AboutUs.jsx";

// import the component

// We've removed the old Navbar and HeroSection components
// as we're now importing them from separate files

const Dashboard = () => (
  <div className="mobile-dashboard">
    <div className="mobile-hero" style={{ maxHeight: '30vh', overflow: 'hidden' }}>
      <Hero />
    </div>
    <Features />
    
    {/* How It Works Section - Mobile Optimized */}
    <section className="py-8 px-4 bg-gradient-to-b from-white to-gray-50">
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">How It Works</h2>
          <p className="text-gray-600 text-sm">Our algorithm prioritizes your safety</p>
        </div>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm mr-3">1</div>
              <h3 className="text-lg font-bold text-gray-800">Data Collection</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">We gather crime reports, emergency data, and safety incidents from trusted sources.</p>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                 alt="Data Collection" 
                 className="rounded-lg shadow-sm w-full h-24 object-cover" />
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm mr-3">2</div>
              <h3 className="text-lg font-bold text-gray-800">Risk Analysis</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Our AI identifies high-risk areas and safer alternatives based on time of day.</p>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuYWx5c2lzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                 alt="Analysis" 
                 className="rounded-lg shadow-sm w-full h-24 object-cover" />
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm mr-3">3</div>
              <h3 className="text-lg font-bold text-gray-800">Route Recommendation</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">We generate route options prioritizing safety with clear risk indicators.</p>
            <img src="https://images.unsplash.com/photo-1502810365585-56ffa361fdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                 alt="Route Recommendation" 
                 className="rounded-lg shadow-sm w-full h-24 object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    {/* FAQ Section - Mobile Optimized */}
    <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">FAQs</h2>
          <p className="text-gray-600 text-sm">Learn how we prioritize safety</p>
        </div>
        
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-md font-semibold text-gray-900 mb-2">How does SafeNav prioritize routes?</h3>
            <p className="text-xs text-gray-700">Unlike traditional navigation apps that prioritize speed, SafeNav analyzes crime data, lighting, and pedestrian activity to recommend safer routes, even if they take longer.</p>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-md font-semibold text-gray-900 mb-2">What do route colors mean?</h3>
            <ul className="text-xs text-gray-700 space-y-1 pl-4 list-disc">
              <li><span className="text-green-600 font-medium">Green</span>: Safest routes</li>
              <li><span className="text-yellow-600 font-medium">Yellow</span>: Moderate safety</li>
              <li><span className="text-red-600 font-medium">Red</span>: Higher risk routes</li>
            </ul>
          </div>
          
          <div className="text-center mt-6">
            <a href="/faq" className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg shadow-sm">View All FAQs</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
const SOS = () => {
  const handleSendSOS = () => {
    alert("SOS Sent! Authorities have been notified.");
    // You can also call backend here later
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">SOS</h2>
        <p className="text-gray-700 mb-8">Click the SOS button in case of emergency. Authorities will be notified.</p>
        <button
          onClick={handleSendSOS}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out button-with-label"
        >
          Send SOS
        </button>
      </div>
    </div>
  );
};

const RouteFinder = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState("");

  const fetchRoutes = async () => {
    if (!start || !end) {
      setError("Start and end locations are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/routes", {
        start,
        end,
      });
      setRoutes(response.data.routes);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setRoutes([]);
    }
  };

  return (
    <div className="px-6 pt-24 pb-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">SafeNav Route Finder</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <SearchBox
            placeholder="Enter Start Location"
            onSelect={(location) => setStart({ lat: location.lat, lng: location.lng })}
          />
          <SearchBox
            placeholder="Enter End Location"
            onSelect={(location) => setEnd({ lat: location.lat, lng: location.lng })}
          />
        </div>

        <button
          onClick={fetchRoutes}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full"
        >
          Find Safe Route
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>

      {routes.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Available Routes:</h3>

          <div className="grid md:grid-cols-2 gap-6">
          {routes.slice(0, 2).map((route, idx) => (
  <RouteCard
    key={idx}
    route={route}
    index={idx}
    label={idx === 0 ? "Safest Route" : "Fastest Route"}
  />
))}


          </div>

          <div className="mt-10">
            <SafeMap routes={routes} />
          </div>
        </div>
      )}
    </div>
  );
};




function App() {
  return (
    <div className="App">
      <Router>
        <PhoneFrame>
          <div className="phone-content">
            <Navbar />
            <div className="phone-body" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/route" element={<RouteFinder />} />
                <Route path="/mood-analysis" element={<MoodAnalysis />} />
                <Route path="/sos" element={<SOS />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<AboutUs />} />


              </Routes>
            </div>
            <Footer />
          </div>
        </PhoneFrame>
      </Router>
    </div>
  );
}

export default App;
