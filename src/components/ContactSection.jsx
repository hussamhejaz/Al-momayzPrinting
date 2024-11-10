import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ language }) => {
  const isEnglish = language === 'en';

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {isEnglish ? 'Contact Us' : 'معلومات الاتصال'}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {isEnglish
              ? 'You can reach us via phone or email.'
              : 'يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني.'}
          </motion.p>
        </div>

        {/* Contact Details */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white p-8 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isEnglish ? 'Get in Touch' : 'تواصل معنا'}
          </h3>
          <div className="text-gray-700 text-center leading-loose">
            <p className="mb-4">
              <span className="font-semibold text-gray-900">
                {isEnglish ? 'Phone:' : 'هاتف:'}
              </span>{' '}
              0530963426
            </p>
            
           
            <p>
              <span className="font-semibold text-gray-900">
                {isEnglish ? 'Address:' : 'العنوان:'}
              </span>{' '}
              {isEnglish
                ? 'Saudi Arabia – Riyadh – Al-Farazdaq Street'
                : 'المملكة العربية السعودية – الرياض – شارع الفرزدق'}
            </p>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <iframe
            title={isEnglish ? 'Google Map' : 'خريطة جوجل'}
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0198929473455!2d46.71511611438724!3d24.77426515590495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03d9597e5b0d%3A0x5f0847c36b3f62b8!2sAl-Farazdaq%20St%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1636015104773!5m2!1sen!2ssa"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
