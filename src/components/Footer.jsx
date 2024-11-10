import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ language }) => {
  const isEnglish = language === 'en';

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Links Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold">{isEnglish ? 'Links' : 'روابط'}</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  {isEnglish ? 'About Us' : 'من نحن'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  {isEnglish ? 'Services' : 'الخدمات'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  {isEnglish ? 'Contact Us' : 'اتصل بنا'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold">
              {isEnglish ? 'Social Media' : 'وسائل التواصل الاجتماعي'}
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/almomayz.printing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p>
            &copy; 2024 {isEnglish ? 'Almomayz Printing. All rights reserved.' : 'مطابع المميز. جميع الحقوق محفوظة.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
