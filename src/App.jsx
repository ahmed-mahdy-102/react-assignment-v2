import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}