import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './assets/components/pages/Header';
import About from './assets/components/pages/About';
import Portfolio from './assets/components/pages/Portfolio';
import Contact from './assets/components/pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);