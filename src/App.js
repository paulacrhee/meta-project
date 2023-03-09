import './App.css';
import './components/styles/style.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Booking from './components/Booking.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="headerbox">
          <div className="header-container">
            <div className="logobox">
              <Header />
            </div>
            <div className="navbox">
              <Nav />
            </div>
          </div>
        </div>
        <div className="mainbox">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </div>
        <div className="footerbox">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
