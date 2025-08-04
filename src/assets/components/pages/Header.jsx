import React from 'react';

export default function Header() {
  return (
    <header className=" text-white text-center py-5" style={{ background: '#1abc9c' }}>
      <div className="container d-flex align-items-center flex-column">
        <img className="mb-4" src="/react-assignment-v2/assets/img/portfolio/avataaars.svg" alt="Avatar" style={{width: 200}} />
        <h1 className="mb-0" style={{ color: '#fff' }}>START FRAMEWORK</h1>
        
        {/* Simple divider with explicit styling */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          maxWidth: '300px', 
          margin: '2rem auto',
          width: '100%'
        }}>
          <div style={{
            flex: 1,
            height: '4px',
            backgroundColor: '#ffffff',
            borderRadius: '2px',
            margin: 0,
            padding: 0,
            minWidth: '80px'
          }}></div>
          
          <div style={{ 
            margin: '0 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="fas fa-star" style={{ 
              color: '#ffffff', 
              fontSize: '1.2em',
              display: 'block'
            }}></i>
          </div>
          
          <div style={{
            flex: 1,
            height: '4px',
            backgroundColor: '#ffffff',
            borderRadius: '2px',
            margin: 0,
            padding: 0,
            minWidth: '80px'
          }}></div>
        </div>
        
        <p className="lead" style={{ color: '#fff' }}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}
