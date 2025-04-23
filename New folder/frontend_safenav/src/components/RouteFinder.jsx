import React, { useState, useRef } from 'react';
import MaterialButton from './MaterialButton';
import { useNavigate } from 'react-router-dom';
import { IoTimeOutline, IoWalk, IoBicycle, IoCar, IoCamera, IoHappy, IoSearch } from 'react-icons/io5';

const RouteFinder = () => {
  const navigate = useNavigate();
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [travelMode, setTravelMode] = useState('walking');
  const [timeOfDay, setTimeOfDay] = useState('now');
  const [isLoading, setIsLoading] = useState(false);
  const [routes, setRoutes] = useState(null);

  const [showCamera, setShowCamera] = useState(false);
  const [capturedMood, setCapturedMood] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  // Mock data for routes
  const mockRoutes = {
    safest: {
      id: 1,
      name: "Safest Route",
      duration: "25 mins",
      distance: "1.8 km",
      moodAnalysis: "Happy",
      moodScore: 95,
      moodFactors: ["Well-lit streets", "High foot traffic", "Vibrant atmosphere"],
      color: "green",
      startAddress: "123 Main St",
      endAddress: "456 Market St",
      path: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 40.7138, lng: -74.007 },
        { lat: 40.7148, lng: -74.008 }
      ]
    },
    fastest: {
      id: 2,
      name: "Fastest Route",
      duration: "15 mins",
      distance: "1.2 km",
      moodAnalysis: "Neutral",
      moodScore: 65,
      moodFactors: ["Mixed lighting", "Moderate activity", "Some green spaces"],
      color: "yellow",
      startAddress: "123 Main St",
      endAddress: "456 Market St",
      path: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 40.7135, lng: -74.010 },
        { lat: 40.7145, lng: -74.012 }
      ]
    },
    balanced: {
      id: 3,
      name: "Balanced Route",
      duration: "20 mins",
      distance: "1.5 km",
      moodAnalysis: "Calm",
      moodScore: 80,
      moodFactors: ["Peaceful environment", "Nature elements", "Moderate foot traffic"],
      color: "blue",
      startAddress: "123 Main St",
      endAddress: "456 Market St",
      path: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 40.7136, lng: -74.008 },
        { lat: 40.7146, lng: -74.010 }
      ]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    
    // If camera is not shown, show it first
    if (!showCamera && !capturedMood) {
      setIsLoading(false);
      setShowCamera(true);
      // Start camera
      setTimeout(() => {
        if (videoRef.current) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
              videoRef.current.srcObject = stream;
              setCameraActive(true);
            })
            .catch(err => {
              console.error("Error accessing camera:", err);
            });
        }
      }, 100);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      if (startLocation && endLocation) {
        setRoutes(mockRoutes);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, 1000);
  };
  
  const handleSelectRoute = (route) => {
    // Navigate to route details page with the selected route data
    navigate('/route-details', { state: { routeData: route } });
  };

  return (
    <div className="min-h-screen pb-16 flex flex-col items-center justify-center bg-white">
      {/* GIF */}
      <div className="w-full flex justify-center mt-10 mb-6">
        <img
          src="/load.gif"
          alt="Loading animation"
          style={{ maxWidth: '120px', marginBottom: '1.5rem', display: 'block' }}
        />
      </div>
      {/* Header */}
      <div className="p-6 animate-fadeIn rounded-xl shadow bg-white mt-2 mb-4 w-full max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif', borderBottom: 'none' }}>
        <h1 className="text-2xl font-extrabold text-center tracking-tight text-black" style={{ letterSpacing: '0.05em' }}>Find Safe Route</h1>
      </div>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 mt-4 max-w-md mx-auto flex flex-col gap-5 animate-fadeIn border border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter Start"
            value={startLocation}
            onChange={e => setStartLocation(e.target.value)}
            className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-black text-base bg-[#f5f5f5] transition-all duration-200 placeholder:text-gray-400"
            style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f5', border: '1px solid #e5e5e5' }}
          />
          <input
            type="text"
            placeholder="Enter End"
            value={endLocation}
            onChange={e => setEndLocation(e.target.value)}
            className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-black text-base bg-[#f5f5f5] transition-all duration-200 placeholder:text-gray-400"
            style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f5', border: '1px solid #e5e5e5' }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg shadow-none transition-all duration-200 text-base mt-2"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em', boxShadow: 'none' }}
          disabled={isLoading}
        >
          {isLoading ? 'Finding...' : 'Find Safe Route'}
        </button>
      </form>
      {/* Travel Mode Selector */}
      <div className="flex space-x-3 overflow-x-auto py-3 scrollbar-hide">
        <button
          type="button"
          className={`flex flex-col items-center px-4 py-2 rounded-lg border-2 ${travelMode === 'walking' ? 'border-black bg-[#f5f5f5]' : 'border-gray-200 bg-white'} shadow-none transition-all duration-200`}
          onClick={() => setTravelMode('walking')}
        >
          <IoWalk size={24} className={travelMode === 'walking' ? 'text-black' : 'text-gray-600'} />
          <span className="text-xs mt-1 text-black">Walk</span>
        </button>
        <button
          type="button"
          className={`flex flex-col items-center px-4 py-2 rounded-lg border-2 ${travelMode === 'bicycle' ? 'border-black bg-[#f5f5f5]' : 'border-gray-200 bg-white'} shadow-none transition-all duration-200`}
          onClick={() => setTravelMode('bicycle')}
        >
          <IoBicycle size={24} className={travelMode === 'bicycle' ? 'text-black' : 'text-gray-600'} />
          <span className="text-xs mt-1 text-black">Bike</span>
        </button>
        <button
          type="button"
          className={`flex flex-col items-center px-4 py-2 rounded-lg border-2 ${travelMode === 'car' ? 'border-black bg-[#f5f5f5]' : 'border-gray-200 bg-white'} shadow-none transition-all duration-200`}
          onClick={() => setTravelMode('car')}
        >
          <IoCar size={24} className={travelMode === 'car' ? 'text-black' : 'text-gray-600'} />
          <span className="text-xs mt-1 text-black">Car</span>
        </button>
      </div>
      {/* Time Selector */}
      <div className="flex space-x-2 items-center text-sm">
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2 opacity-80">When do you want to leave?</label>
          <select
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value)}
            className="w-full p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              color: 'white',
              boxShadow: 'var(--shadow-sm)',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%238b5cf6\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1em'
            }}
          >
            <option value="now" style={{ backgroundColor: 'var(--bg-card)' }}>Leave now</option>
            <option value="morning" style={{ backgroundColor: 'var(--bg-card)' }}>Morning (8 AM - 12 PM)</option>
            <option value="afternoon" style={{ backgroundColor: 'var(--bg-card)' }}>Afternoon (12 PM - 5 PM)</option>
            <option value="evening" style={{ backgroundColor: 'var(--bg-card)' }}>Evening (5 PM - 9 PM)</option>
            <option value="night" style={{ backgroundColor: 'var(--bg-card)' }}>Night (9 PM - 5 AM)</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-4 mt-4 text-white font-medium rounded-xl flex items-center justify-center space-x-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-pulse"
        style={{
          background: 'linear-gradient(135deg, var(--primary-dark), var(--secondary-color))',
          boxShadow: 'var(--shadow-md)',
          letterSpacing: '0.05em',
          fontWeight: '600',
          border: 'none'
        }}
        disabled={isLoading}
      >
        <IoSearch size={20} />
        <span>{isLoading ? 'Finding Routes...' : 'Find Safe Routes'}</span>
      </button>
    {/* Results */}
    {isLoading && (
      <div className="flex justify-center items-center p-16">
        <div className="relative">
          <div className="animate-spin rounded-full h-14 w-14 border-b-2" style={{ borderColor: 'var(--primary-color)' }}></div>
          <div className="animate-spin rounded-full h-14 w-14 border-r-2 absolute top-0 left-0" 
            style={{
              borderColor: 'var(--secondary-color)',
              animationDirection: 'reverse', 
              animationDuration: '1.5s'
            }}>
          </div>
        </div>
      </div>
    )}
    
    {routes && !isLoading && (
      <div className="p-5 space-y-5 animate-fadeIn">
        <h2 className="text-lg font-semibold px-1 flex items-center" style={{ letterSpacing: '0.05em', color: '#222' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="#222">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Available Routes
        </h2>
        {Object.values(routes).map((route, index) => (
          <div 
            key={route.id} 
            className="card p-5 rounded-xl relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg" 
            onClick={() => handleSelectRoute(route)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-black text-base">{route.name}</h3>
              <div style={{
                backgroundColor: '#f5f5f5',
                color: '#222',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '600',
                border: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <IoHappy size={14} color="#222" />
                {route.moodAnalysis} Mood
              </div>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <div className="flex items-center">
                <IoTimeOutline style={{ color: '#222', marginRight: '0.5rem' }} size={18} />
                <span className="text-black font-medium">{route.duration}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="#222">
                </svg>
                <span className="text-black opacity-90">{route.distance}</span>
              </div>
            </div>
            {/* Mood Analysis Minimalist Card */}
            <div className="p-4 rounded-lg bg-white border border-gray-200 mb-2">
              <div className="flex items-center mb-2">
                <IoHappy size={18} color="#222" className="mr-2" />
                <span className="text-base font-semibold text-black mr-2">{route.moodAnalysis}</span>
                <span className="text-xs text-gray-500">Mood</span>
              </div>
              <div className="mb-1">
                <span className="text-xs text-gray-600 font-medium">Mood Factors:</span>
              </div>
              <ul className="space-y-1">
                {route.moodFactors.map((factor, i) => (
                  <li key={i} className="text-xs flex items-start">
                    <span style={{ color: '#888', marginRight: '0.5rem' }}>•</span>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Mood Analysis Camera */}
    {!routes && !isLoading && (
      <div className="mt-6 mx-5 rounded-xl overflow-hidden shadow-md" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
        <div style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--secondary-color))', padding: '1rem' }}>
          <h2 className="text-base font-semibold text-white flex items-center">
            <IoCamera className="mr-2" size={18} />
            Mood Analysis
          </h2>
        </div>
        
        <div className="p-4 space-y-4 text-white">
          {!showCamera ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm opacity-80 text-center mb-4">Use your camera to analyze your current mood and find routes that match your emotional state</p>
              <MaterialButton color="blue" variant="rounded" 
                onClick={() => {
                  setShowCamera(true);
                  // Start camera when button is clicked
                  setTimeout(() => {
                    if (videoRef.current) {
                      navigator.mediaDevices.getUserMedia({ video: true })
                        .then(stream => {
                          videoRef.current.srcObject = stream;
                          setCameraActive(true);
                        })
                        .catch(err => {
                          console.error("Error accessing camera:", err);
                        });
                    }
                  }, 100);
                }}
                className="flex items-center justify-center space-x-2 p-3 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-dark), var(--secondary-color))',
                  boxShadow: 'var(--shadow-md)',
                  border: 'none'
                }}
              >
                <IoCamera size={20} />
                <span>Analyze My Mood</span>
              </MaterialButton>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden" style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-64 object-cover"
                />
                <canvas ref={canvasRef} className="hidden" width="320" height="240" />
              </div>
              
              <div className="flex space-x-3 mt-4">
                <MaterialButton color="blue" variant="rounded" 
                  onClick={() => {
                    // Capture image
                    if (videoRef.current && canvasRef.current && cameraActive) {
                      const video = videoRef.current;
                      const canvas = canvasRef.current;
                      const context = canvas.getContext('2d');
                      
                      // Draw video frame to canvas
                      context.drawImage(video, 0, 0, canvas.width, canvas.height);
                      
                      // Stop camera
                      const stream = video.srcObject;
                      const tracks = stream.getTracks();
                      tracks.forEach(track => track.stop());
                      video.srcObject = null;
                      
                      // Set captured mood (simulated)
                      const moods = ['Happy', 'Calm', 'Neutral'];
                      const randomMood = moods[Math.floor(Math.random() * moods.length)];
                      setCapturedMood(randomMood);
                      setCameraActive(false);
                      
                      // Submit form with the mood
                      setTimeout(() => {
                        setShowCamera(false);
                        setIsLoading(true);
                        // Simulate API call with mood
                        setTimeout(() => {
                          if (startLocation && endLocation) {
                            setRoutes(mockRoutes);
                            setIsLoading(false);
                          } else {
                            setIsLoading(false);
                          }
                        }, 1500);
                      }, 1000);
                    }
                  }}
                  className="flex items-center justify-center space-x-2 p-3 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-dark), var(--secondary-color))',
                    boxShadow: 'var(--shadow-md)',
                    border: 'none'
                  }}
                  disabled={!cameraActive}
                >
                  <IoCamera size={18} />
                  <span>Capture</span>
                </MaterialButton>
                
                <MaterialButton color="blue" variant="rounded" 
                  onClick={() => {
                    // Stop camera
                    if (videoRef.current && cameraActive) {
                      const video = videoRef.current;
                      const stream = video.srcObject;
                      if (stream) {
                        const tracks = stream.getTracks();
                        tracks.forEach(track => track.stop());
                        video.srcObject = null;
                      }
                    }
                    setCameraActive(false);
                    setShowCamera(false);
                  }}
                  className="flex items-center justify-center space-x-2 p-3 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span>Cancel</span>
                </MaterialButton>
                </div>
                {capturedMood && (
                  <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <p className="text-center">
                      <span className="font-semibold">Detected Mood:</span> {capturedMood}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RouteFinder;
