import React from 'react';
import MaterialButton from './MaterialButton';

const Features = () => {
  return (
    <section className="py-10 px-2 text-center rounded-3xl shadow-lg" style={{background: 'linear-gradient(90deg, #fbc2eb 0%, #fcd34d 100%)', borderRadius: '2rem'}}>
      <h2 className="text-3xl font-extrabold mb-4 text-gray-800 tracking-tight" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em'}}>
        Key Features
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
        Discover how SafeRoute transforms your travel with intelligent route planning and personalized safety evaluations.
      </p>

      <div className="flex flex-col gap-5 max-w-full mx-auto">
  {/* Safe Route Planning */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">

    <div className="flex items-center mb-3">
      <span style={{ background: '#E3EDFF', borderRadius: '50%', padding: '0.65em', marginRight: '0.8em', display: 'flex', alignItems: 'center' }}>
        <svg width="28" height="28" fill="#2563eb" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
      </span>
      <h3 className="text-base font-bold text-gray-900">Safe Route Planning</h3>
    </div>
    <p className="text-gray-500 mb-4 pt-3 px-2 text-sm break-words">
      Routes prioritizing safety over speed using crime data analysis
    </p>
    <MaterialButton color="blue" variant="rounded" style={{ width: '100%', background: '#E3EDFF', color: '#2563eb', fontWeight: 700, fontSize: '1rem', borderRadius: '1em', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)' }}>Try now</MaterialButton>
  </div>

  {/* Route Details & Mood Analysis */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
    <div className="flex items-center mb-3">
      <span style={{ background: '#FFF9E3', borderRadius: '50%', padding: '0.65em', marginRight: '0.8em', display: 'flex', alignItems: 'center' }}>
        <svg width="28" height="28" fill="#EAB308" viewBox="0 0 24 24"><path d="M12 22c5.522 0 10-4.478 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10zm0-2c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-4-6a4 4 0 0 0 8 0h-2a2 2 0 0 1-4 0H8z"/></svg>
      </span>
      <h3 className="text-base font-bold text-gray-900">Route Details</h3>
    </div>
    <p className="text-gray-500 mb-4 pt-3 px-2 text-sm break-words">
      Analyse the facial expressions and the number of people present on the route
    </p>
    <MaterialButton color="yellow" variant="rounded" style={{ width: '100%', background: '#FFF9E3', color: '#EAB308', fontWeight: 700, fontSize: '1.1rem', borderRadius: '1.2em', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)' }}>Analyze Mood</MaterialButton>
  </div>

  {/* Emergency SOS */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
    <div className="flex items-center mb-3">
      <span style={{ background: '#FFE3E9', borderRadius: '50%', padding: '0.65em', marginRight: '0.8em', display: 'flex', alignItems: 'center' }}>
        <svg width="28" height="28" fill="#F43F5E" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
      </span>
      <h3 className="text-base font-bold text-gray-900">Emergency SOS</h3>
    </div>
    <p className="text-gray-500 mb-4 pt-3 px-2 text-sm break-words">
      One-tap emergency assistance with location sharing
    </p>
    <MaterialButton color="pink" variant="rounded" style={{ width: '100%', background: '#FFE3E9', color: '#F43F5E', fontWeight: 700, fontSize: '1.1rem', borderRadius: '1.2em', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)' }}>Send SOS</MaterialButton>
  </div>
</div>
    </section>
  );
};

export default Features;
