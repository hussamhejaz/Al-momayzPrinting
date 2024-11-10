import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; // Import Draggable component
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
          
          {/* Draggable WhatsApp Icon */}
          <Draggable>
            <a
              href="https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0"
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
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp Icon URL
                alt="WhatsApp"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          </Draggable>
        </>
      )}
    </div>
  );
}

export default App;









