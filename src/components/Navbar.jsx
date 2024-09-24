import React, { useState } from "react";
import logo from "../imgs/logo.svg"; // Ensure logo path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import the globe icon

// Use online URLs for flags
const saudiFlag = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg";
const englishFlag = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";

function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageSelection = (lang) => {
    toggleLanguage(lang);
    setShowLanguageOptions(false); // Close dropdown after selection
  };

  const isEnglish = language === 'en';

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Brand Logo" className="h-16 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            {isEnglish ? 'Home' : 'الرئيسية'}
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            {isEnglish ? 'About' : 'من نحن'}
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            {isEnglish ? 'Services' : 'الخدمات'}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            {isEnglish ? 'Contact' : 'اتصل بنا'}
          </a>

          {/* Language Switcher (Desktop) */}
          <div className="relative">
            <button
              onClick={toggleLanguageOptions}
              className="text-gray-700 hover:text-blue-500 focus:outline-none flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
            </button>
            {showLanguageOptions && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-20">
                <a
                  href="#"
                  onClick={() => handleLanguageSelection('en')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                >
                  <img src={englishFlag} alt="English" className="w-5 h-5" />
                  <span>English</span>
                </a>
                <a
                  href="#"
                  onClick={() => handleLanguageSelection('ar')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                >
                  <img src={saudiFlag} alt="Arabic" className="w-5 h-5" />
                  <span>العربية</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Icon with Dropdown (Mobile) */}
          <div className="relative">
            <button
              onClick={toggleLanguageOptions}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
            </button>
            {showLanguageOptions && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-20">
                <a
                  href="#"
                  onClick={() => handleLanguageSelection('en')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                >
                  <img src={englishFlag} alt="English" className="w-5 h-5" />
                  <span>English</span>
                </a>
                <a
                  href="#"
                  onClick={() => handleLanguageSelection('ar')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                >
                  <img src={saudiFlag} alt="Arabic" className="w-5 h-5" />
                  <span>العربية</span>
                </a>
              </div>
            )}
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:text-blue-500"
          >
            {isEnglish ? 'Home' : 'الرئيسية'}
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-700 hover:text-blue-500"
          >
            {isEnglish ? 'Services' : 'الخدمات'}
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:text-blue-500"
          >
            {isEnglish ? 'About' : 'من نحن'}
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:text-blue-500"
          >
            {isEnglish ? 'Contact' : 'اتصل بنا'}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
