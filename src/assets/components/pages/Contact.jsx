import React from 'react';

export default function Contact() {
  return (
    <section className="page-section" id="contact" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom my-4 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
          <div className="divider-custom-icon mx-3"><i className="fas fa-star" style={{ color: '#6c757d' }}></i></div>
          <div className="divider-custom-line" style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form>
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="name" 
                  type="text" 
                  placeholder="Enter your name..." 
                  style={{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', boxShadow: 'none' }}
                />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  style={{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', boxShadow: 'none' }}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="phone" 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  style={{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', boxShadow: 'none' }}
                />
                <label htmlFor="phone">Phone number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea 
                  className="form-control" 
                  id="message" 
                  placeholder="Enter your message here..." 
                  style={{
                    height: '10rem',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    borderRadius: '0',
                    boxShadow: 'none'
                  }}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button className="btn btn-primary btn-xl" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
