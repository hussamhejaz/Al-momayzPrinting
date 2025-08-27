import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
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
import AboutSection from './components/ AboutSection'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('ar');
  const [isMobile, setIsMobile] = useState(false);

  // Simulate loading time (e.g., fetching data, loading assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  // Determine if the device is mobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // WhatsApp Icon (same for mobile and desktop)
  const whatsappIcon = (
    <a
      href="https://api.whatsapp.com/send/?phone=966536525360&text&type=phone_number&app_absent=0"
      className="fixed bottom-8 right-8 z-50"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '50px', height: '50px' }}
      />
    </a>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          <main className="flex-grow">
            <HeroSection language={language} />
            <AboutSection language={language} />
            <ServicesSection language={language} />
            <ImageSlider language={language} />
            <ClientsSection language={language} />
            <ContactSection language={language} />
          </main>
          <Footer language={language} />
          {/* Render WhatsApp Icon without Draggable on mobile for better clickability */}
          {isMobile ? whatsappIcon : <Draggable>{whatsappIcon}</Draggable>}
        </>
      )}
    </div>
  );
}

export default App;
