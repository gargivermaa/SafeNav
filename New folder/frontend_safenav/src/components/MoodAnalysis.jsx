import React, { useState } from 'react';
import MaterialButton from './MaterialButton';

const routeIds = [1, 2]; // Only show 2 routes: safest and fastest
const routeLabels = ["Safest Route", "Fastest Route"]; // Corresponding labels

const MoodAnalysis = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const analyzeRoute = async (routeId) => {
    setLoading(routeId);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/analyze_route/${routeId}`);
      const data = await response.json();

      if (response.ok) {
        setResults((prev) => ({ ...prev, [routeId]: data }));
      } else {
        setError(data.error || 'Error analyzing image');
      }
    } catch (err) {
      setError('Server error. Make sure backend is running.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 pt-12 pb-24 min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100">
      <h2 className="text-3xl font-extrabold text-center mb-8 tracking-tight" style={{ fontFamily: 'Inter, sans-serif', color: '#3b489c', background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Route Mood Analysis</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl w-full justify-center items-center">
        {routeIds.map((routeId, idx) => (
          <div key={routeId} className="bg-white/90 p-8 rounded-2xl shadow-2xl flex flex-col items-center border border-blue-100" style={{ boxShadow: '0 8px 32px 0 rgba(180,180,255,0.14)', fontFamily: 'Inter, sans-serif' }}>
            <h3 className="text-lg font-semibold mb-4 text-center text-blue-700">{routeLabels[idx]}</h3>

            <MaterialButton color="blue" variant="rounded"
              onClick={() => analyzeRoute(routeId)}
              className="bg-gradient-to-r from-pink-200 via-blue-200 to-green-200 hover:from-pink-300 hover:to-blue-300 text-blue-900 font-bold px-4 py-2 rounded-xl shadow transition-all duration-300 text-base mt-2"
              style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em', boxShadow: '0 4px 24px 0 rgba(180,180,255,0.13)' }}
              disabled={loading === routeId}
            >
              {loading === routeId ? 'Analyzing...' : 'Analyze Mood'}
            </MaterialButton>

            {results[routeId] && (
              <div className="mt-5 text-sm text-gray-700 w-full text-left">
                <p><strong>Total Faces:</strong> {results[routeId].total_faces}</p>
                <p><strong>Genders:</strong> {JSON.stringify(results[routeId].gender_count)}</p>
                <p><strong>Emotions:</strong> {JSON.stringify(results[routeId].emotion_count)}</p>
              </div>
            )}
            {error && <p className="text-red-500 mt-3 text-xs truncate overflow-hidden whitespace-nowrap w-full text-center" style={{ maxWidth: '180px' }}>{error}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodAnalysis;