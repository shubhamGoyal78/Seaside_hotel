import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route
import SplashScreen from './SplashScreen';
import Navigation from './component/Navigation';
import Home from './component/Home';
import Rooms from './component/Rooms';
import Booking from './component/Booking';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Career from './component/Career';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
