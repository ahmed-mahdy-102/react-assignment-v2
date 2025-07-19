import React, { useState } from 'react';

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0" style={{ position: 'relative' }}>
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className="social-icons">
              <a 
                className="btn btn-outline-light btn-social mx-2" 
                href="#!" 
                style={{
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#000';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-facebook-f" style={{ fontSize: '0.9em' }}></i>
              </a>
              <a 
                className="btn btn-outline-light btn-social mx-2" 
                href="#!" 
                style={{
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#000';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-twitter" style={{ fontSize: '0.9em' }}></i>
              </a>
              <a 
                className="btn btn-outline-light btn-social mx-2" 
                href="#!" 
                style={{
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#000';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-linkedin-in" style={{ fontSize: '0.9em' }}></i>
              </a>
              <a 
                className="btn btn-outline-light btn-social mx-2" 
                href="#!" 
                style={{
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#000';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-dribbble" style={{ fontSize: '0.9em' }}></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="copyright py-3">
        <div className="container">
          <small>Copyright © Your Website 2025</small>
        </div>
      </div>
    </footer>
  );
}
