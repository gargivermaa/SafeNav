import React from 'react';
import MaterialButton from './MaterialButton';

const Hero = () => {
  const heroStyle = {
    position: 'relative',
    height: '110vh', 
    minHeight: '400px',
    maxHeight: '470px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'white',
    color: 'black'
  };

  const gridPatternStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
    backgroundSize: '80px 80px',
    zIndex: 5,
    opacity: 0.2
  };

  const floatingShape1Style = {
    position: 'absolute',
    left: '15%',
    top: '30%',
    width: '18rem',
    height: '18rem',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
    borderRadius: '100%',
    filter: 'blur(50px)',
    animation: 'pulse 10s ease-in-out infinite'
  };

  const floatingShape2Style = {
    position: 'absolute',
    right: '15%',
    bottom: '30%',
    width: '22rem',
    height: '22rem',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
    borderRadius: '100%',
    filter: 'blur(50px)',
    animation: 'pulse 12s ease-in-out infinite alternate'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 20,
    textAlign: 'center',
    maxWidth: '80rem',
    padding: '0 1.5rem'
  };

  const paragraphStyle = {
    fontSize: 'clamp(0.375rem, 0.6vw, 0.625rem)', // Much smaller font for subtitle
    marginBottom: '4rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 300,
    maxWidth: '40rem',
    margin: '0 auto 2rem',
    letterSpacing: '0.03em',
    lineHeight: 0.4,
    padding: '0.75rem 1.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '0.25rem'
  };



  // Media query is now handled directly in the component

  return (
    <section style={heroStyle}>
      {/* Grid pattern background */}
      <div style={gridPatternStyle}></div>
      
      {/* Floating shapes */}
      <div className="animate-float-slow" style={floatingShape1Style}></div>
      <div className="animate-float" style={floatingShape2Style}></div>
      
      <div style={{...contentStyle, fontFamily: "'Quicksand', 'Nunito', 'Poppins', sans-serif"}}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="animate-fadeIn" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                fontWeight: '800',
                color: 'black',
                letterSpacing: '0.01em',
                textTransform: 'none',
                marginBottom: '0.5rem',
                marginTop: '2.5rem', // Added top margin to push title down
                lineHeight: '1.1',
                background: 'none',
                border: 'none',
                padding: 0,
                borderRadius: '1.5rem',
                display: 'block',
                fontFamily: 'Quicksand, Nunito, Poppins, sans-serif',
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.06)'
              }}>SafeNav</h1>
              <div style={{
                fontSize: '0.7rem',
                color: '#444',
                fontWeight: 500,
                letterSpacing: '0.18em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                textAlign: 'center',
                fontFamily: 'Quicksand, Nunito, Poppins, sans-serif',
                borderRadius: '1rem',
                background: '#FFE1D6',
                padding: '0.25rem 1.2rem',
                boxShadow: '0 2px 10px 0 rgba(230,180,200,0.07)'
              }}>
                TRAVEL SAFELY. TRAVEL SMART.
              </div>
              <img src="/red.gif" alt="Car on Road" style={{ height: '80px', width: 'auto', display: 'block', margin: '0 auto', marginBottom: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 4px 18px 0 rgba(200,200,200,0.18)' }} />
            </div>
            
            <div style={{
              width: '60px',
              height: '3px',
              backgroundColor: 'white',
              margin: '1rem auto'
            }}></div>
          </div>
          
          <p className="animate-fadeIn" style={{...paragraphStyle, animationDelay: '0.2s', fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)'}}>
            A minimalist, intelligent navigation system designed to help you find the best routes based on your mood and preferences.
          </p>
          
          <div className="animate-fadeIn" style={{
            display: 'flex', 
            gap: '1.5rem',
            animationDelay: '0.4s',
            flexDirection: typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches ? 'row' : 'column'
          }}>
            <MaterialButton color="blue" variant="rounded" onClick={() => window.location.href = '/route'}>
              Find Safe Route
            </MaterialButton>
            
            <MaterialButton color="gray" variant="rounded" disabled>
              Learn More
            </MaterialButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
