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
            {isEnglish ? 'Contact Us' : 'تواصل معنا'}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {isEnglish
              ? 'We welcome your questions and inquiries. You can contact us using the form below or through the following details.'
              : 'نرحب بأسئلتك واستفساراتك. يمكنك الاتصال بنا باستخدام النموذج أدناه أو المعلومات التالية.'}
          </motion.p>
        </div>

        {/* Contact Form and Details */}
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-2/3 px-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  {isEnglish ? 'Full Name' : 'الاسم الكامل'}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={isEnglish ? 'Enter your full name' : 'أدخل اسمك الكامل'}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  {isEnglish ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={isEnglish ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  {isEnglish ? 'Your Message' : 'رسالتك'}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={isEnglish ? 'Enter your message' : 'أدخل رسالتك'}
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
                >
                  {isEnglish ? 'Send Message' : 'أرسل الرسالة'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {isEnglish ? 'Contact Information' : 'معلومات الاتصال'}
              </h3>
              <p className="text-gray-600 mb-4">
                {isEnglish
                  ? 'You can reach us via phone or email.'
                  : 'يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني.'}
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-bold">{isEnglish ? 'Phone:' : 'هاتف:'}</span> 0530963426
                </li>
                <li>
                  <span className="font-bold">{isEnglish ? 'Email:' : 'البريد الإلكتروني:'}</span>{" "}
                  <a href="mailto:ah.adversting@gmail.com" className="text-green-500 underline">
                    ah.adversting@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-bold">{isEnglish ? 'Address:' : 'العنوان:'}</span>{" "}
                  {isEnglish
                    ? 'Saudi Arabia – Riyadh – Al-Farazdaq Street'
                    : 'المملكة العربية السعودية – الرياض – شارع الفرزدق'}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

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
