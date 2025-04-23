import React, { useState, useEffect } from 'react';
import MaterialButton from './MaterialButton';
import { Link } from 'react-router-dom';
import { FaHome, FaRoute, FaInfoCircle, FaQuestionCircle, FaBell, FaSmile } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to handle menu visibility
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  


  // Mobile-optimized styles
  const navbarStyles = {
    background: 'transparent',
    padding: '0.75rem 1rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
  };

  // Logo styles removed

  const hamburgerStyles = {
    cursor: 'pointer',
    padding: '0.25rem',
    position: 'relative',
    zIndex: 60,
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const barStyles = {
    width: '18px',
    height: '2px',
    backgroundColor: 'white',
    margin: '2px 0',
    transition: '0.3s',
    borderRadius: '1px',
  };

  const bar1Styles = {
    ...barStyles,
    transform: isOpen ? 'rotate(-45deg) translate(-4px, 5px)' : 'none',
  };

  const bar2Styles = {
    ...barStyles,
    opacity: isOpen ? '0' : '1',
  };

  const bar3Styles = {
    ...barStyles,
    transform: isOpen ? 'rotate(45deg) translate(-4px, -5px)' : 'none',
  };

  const menuContainerStyles = {
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.95)',
    zIndex: 40,
    padding: '5rem 2rem 2rem',
    backdropFilter: 'blur(8px)',
    overflowY: 'auto',
  };

  const menuLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: '0.75rem 0',
    fontSize: '1.125rem',
    fontWeight: '500',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    gap: '0.75rem',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  };

  return (
    <nav style={navbarStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '0.75rem' }}>
        {/* Homepage Button */}
        <Link to="/" style={{
          background: '#222',
          color: 'white',
          borderRadius: '50%',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
          fontSize: '1.3rem',
          marginLeft: '0.2rem',
          border: '2px solid white',
          zIndex: 61
        }} title="Home">
          <FaHome />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* SOS Button */}
        <Link to="/sos" style={{
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
          fontSize: '1.3rem',
        }}>
          <FaBell />
        </Link>
        
        {/* Mobile menu */}
        <MaterialButton color="blue" variant="rounded" style={{
          ...hamburgerStyles,
          background: 'black',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }} onClick={() => setIsOpen(!isOpen)}>
          <div style={bar1Styles}></div>
          <div style={bar2Styles}></div>
          <div style={bar3Styles}></div>
        </MaterialButton>
      </div>
    </div>

      {/* Mobile menu - always rendered but visibility controlled by CSS */}
      <div style={menuContainerStyles}>
        <Link to="/" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaHome size={18} style={{ marginRight: '12px' }} />
          Home
        </Link>
        <Link to="/route" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaRoute size={18} style={{ marginRight: '12px' }} />
          Find Routes
        </Link>
        <Link to="/mood-analysis" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaSmile size={18} style={{ marginRight: '12px' }} />
          Mood Analysis
        </Link>
        <Link to="/about" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaInfoCircle size={18} style={{ marginRight: '12px' }} />
          About
        </Link>
        <Link to="/faq" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaQuestionCircle size={18} style={{ marginRight: '12px' }} />
          FAQ
        </Link>
        <Link to="/sos" style={menuLinkStyles} onClick={() => setIsOpen(false)}>
          <FaBell size={18} style={{ marginRight: '12px' }} />
          SOS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
