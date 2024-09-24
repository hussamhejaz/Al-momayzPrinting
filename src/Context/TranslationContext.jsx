// TranslationContext.js
import React, { createContext, useState } from 'react';

// Create a context for language selection
export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = (lang) => {
    setLanguage(lang); // Toggle between 'en' and 'ar'
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
