import React, { useState, useCallback, memo } from "react";
import logo from "../imgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const saudiFlag = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg";
const englishFlag = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";

// Extracted and memoized LanguageOptions component to avoid duplicate code and extra renders
const LanguageOptions = memo(({ onSelect, className = "" }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      <button
        onClick={() => onSelect("en")}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 w-full text-left"
      >
        <img src={englishFlag} alt="English" className="w-5 h-5" loading="lazy" />
        <span>English</span>
      </button>
      <button
        onClick={() => onSelect("ar")}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 w-full text-left"
      >
        <img src={saudiFlag} alt="Arabic" className="w-5 h-5" loading="lazy" />
        <span>العربية</span>
      </button>
    </div>
  );
});

function Navbar({ language, toggleLanguage }) {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const toggleLanguageOptions = useCallback(() => {
    setShowLanguageOptions((prev) => !prev);
  }, []);

  const handleLanguageSelection = useCallback(
    (lang) => {
      toggleLanguage(lang);
      setShowLanguageOptions(false);
    },
    [toggleLanguage]
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Brand Logo" className="h-16 w-auto" loading="lazy" />
          </a>
        </div>

        {/* Desktop Menu: Language Switcher Only */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <button
              onClick={toggleLanguageOptions}
              aria-label="Toggle language options"
              className="text-gray-700 hover:text-blue-500 focus:outline-none flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
            </button>
            {showLanguageOptions && (
              <LanguageOptions onSelect={handleLanguageSelection} className="absolute right-0 mt-2 w-32" />
            )}
          </div>
        </div>

        {/* Mobile: Language Switcher Only */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguageOptions}
            aria-label="Toggle language options"
            className="text-gray-700 hover:text-blue-500 focus:outline-none relative z-30"
          >
            <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
          </button>
          {showLanguageOptions && (
            <LanguageOptions onSelect={handleLanguageSelection} className="absolute top-16 right-4 w-32" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
