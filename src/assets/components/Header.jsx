import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='masthead bg-primary text-white text-center'>
        <div className='container d-flex align-items-center flex-column'>
          <img
            className='masthead-avatar mb-5'
            src='assets/img/avataaars.svg'
            alt=''
          />
          <h1 className='masthead-heading text-uppercase mb-0'>Start React</h1>
          <div className='divider-custom divider-light text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
            <div className='divider-custom-line' style={{ flex: 1, height: '4px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
            <div className='divider-custom-icon mx-3'>
              <i className='fas fa-star' style={{ color: '#fff' }}></i>
            </div>
            <div className='divider-custom-line' style={{ flex: 1, height: '4px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
          </div>
          <p className='masthead-subheading font-weight-light mb-0'>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    );
  }
}