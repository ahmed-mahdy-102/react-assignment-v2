import React from 'react';

// Import images directly
import cabin from '../../../assets/img/portfolio/cabin.png';
import cake from '../../../assets/img/portfolio/cake.png';
import circus from '../../../assets/img/portfolio/circus.png';
import game from '../../../assets/img/portfolio/game.png';
import safe from '../../../assets/img/portfolio/safe.png';
import submarine from '../../../assets/img/portfolio/submarine.png';

const images = [
  { src: cabin, alt: 'cabin.png' },
  { src: cake, alt: 'cake.png' },
  { src: circus, alt: 'circus.png' },
  { src: game, alt: 'game.png' },
  { src: safe, alt: 'safe.png' },
  { src: submarine, alt: 'submarine.png' },
];

export default function Portfolio() {
  return (
    <section className="page-section portfolio py-5" id="portfolio" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom my-4 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
          <div className="divider-custom-icon mx-3"><i className="fas fa-star" style={{ color: '#6c757d' }}></i></div>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
        </div>
        <div className="row justify-content-center">
          {images.map((img, idx) => (
            <div className="col-md-6 col-lg-4 mb-5" key={img.alt}>
              <div className="portfolio-item mx-auto" style={{ position: 'relative', cursor: 'pointer' }}>
                <img className="img-fluid" src={img.src} alt={img.alt} />
                <div 
                  className="portfolio-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#1abc9ce6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                >
                  <i className="fas fa-plus fa-3x" style={{ color: 'white' }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
