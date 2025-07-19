import React from 'react';

export default function About() {
  return (
    <section className="page-section  text-white mb-0" id="about" style={{ background: '#1abc9c' }}>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light my-4 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#fff' }}></div>
          <div className="divider-custom-icon mx-3"><i className="fas fa-star" style={{ color: '#fff' }}></i></div>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#fff' }}></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto"><p className="lead">This is a sample about section. You can customize it as you like.</p></div>
          <div className="col-lg-4 me-auto"><p className="lead">React + Vite + Bootstrap + FontAwesome. Images are loaded from your img folder.</p></div>
        </div>
      </div>
    </section>
  );
}
