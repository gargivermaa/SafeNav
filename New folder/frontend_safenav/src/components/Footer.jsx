import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#0f1729] to-[#0f172a] text-white py-4 text-xs">
      {/* Mobile-optimized footer */}
      <div className="px-4 py-2">
        {/* Logo and tagline */}
        <div className="flex items-center justify-center mb-3">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-md flex items-center justify-center shadow-sm mr-2">
            <span className="font-bold text-white text-xs">S</span>
          </div>
          <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">SafeNav</span>
        </div>
        
        {/* Quick links in a row */}
        <div className="flex justify-center space-x-4 mb-3">
          <Link to="/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs">Home</Link>
          <Link to="/route" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs">Route</Link>
          <Link to="/sos" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs">SOS</Link>
          <Link to="/faq" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs">FAQ</Link>
        </div>
        
        {/* Tagline */}
        <p className="text-gray-400 text-center text-xs mb-3">Safety-first navigation for your peace of mind</p>
        
        {/* Copyright */}
        <p className="text-gray-500 text-center text-xs">&copy; {year} SafeNav</p>
      </div>
    </footer>
  );
};

export default Footer;
