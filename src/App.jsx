import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: '#1abc9c' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}