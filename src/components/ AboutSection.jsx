import React from 'react';
import { motion } from 'framer-motion'; // For animations
import aboutus from "../imgs/aboutus.jpg"; 

const AboutSection = ({ language }) => {
  const isEnglish = language === 'en';

  return (
    <section id="about" className="py-12 bg-gray-100 w-full">
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 items-center px-4 md:px-8"> {/* Add md:space-x-8 for horizontal space */}
        
        {/* Text Section */}
        <motion.div
          className={`md:w-1/2 ${isEnglish ? 'text-left' : 'text-right'} text-center`}
          initial={{ opacity: 0, x: isEnglish ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {isEnglish ? 'About Us' : 'من نحن؟'}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {isEnglish
              ? 'At Al-Momayz Printing, we strive to offer comprehensive printing solutions for various businesses and fields. Our team consists of professional designers and experienced print technicians. We are committed to high quality, competitive prices, and fast services to meet our customers’ needs.'
              : 'نحن في مطابع المميز نسعى لتقديم حلول طباعة شاملة لمختلف الأعمال والمجالات، مع فريق من المصممين المحترفين وفنيي الطباعة ذوي الخبرة. نلتزم بالجودة العالية، الأسعار التنافسية، والخدمات السريعة لتلبية متطلبات عملائنا.'}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            {isEnglish
              ? 'We focus on sustainability and development, always aiming to use the latest printing technologies to meet our clients’ expectations and achieve their full satisfaction.'
              : 'نركز على الاستمرارية والتطوير، حيث نسعى دائمًا لاستخدام أحدث تقنيات الطباعة لضمان تلبية تطلعات عملائنا وتحقيق رضاهم الكامل.'}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: isEnglish ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutus}
            alt={isEnglish ? 'About us' : 'من نحن'}
            className="rounded-lg shadow-lg w-full object-cover h-64 md:h-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
