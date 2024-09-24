import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import Navbar from './components/Navbar';
import LoadingPage from './components/LoadingPage';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ImageSlider from './components/ImageSlider';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/ AboutSection'; // Fixed import

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('ar'); // Add language state for toggle

  // Simulate loading time (e.g., fetching data, loading assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en')); // Toggle between 'en' and 'ar'
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingPage /> // Show loading screen
      ) : (
        <>
          <Navbar language={language} toggleLanguage={toggleLanguage} /> {/* Pass language and toggle function */}
          {/* Main content */}
          <main className="flex-grow">
            <HeroSection language={language} /> {/* Pass language prop */}
            <AboutSection language={language} /> {/* Pass language prop */}
            <ServicesSection language={language} /> {/* Pass language prop */}
            <ImageSlider language={language} /> {/* Pass language prop */}
            <ClientsSection language={language} /> {/* Pass language prop */}
            <ContactSection language={language} /> {/* Pass language prop */}
          </main>
          <Footer language={language} /> {/* Pass language prop */}
        </>
      )}
    </div>
  );
}

export default App;
