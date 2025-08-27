import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const scrollNoHash = (id, offset = 80) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // Remove the hash from the URL (no reload)
  history.replaceState(null, "", window.location.pathname + window.location.search);
};

const Footer = ({ language = "en" }) => {
  const isEnglish = language === "en";
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-800 text-white py-10"
      dir={isEnglish ? "ltr" : "rtl"}
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-start">
          {/* Links Section */}
          {/* <div>
            <h2 className="text-lg font-semibold">
              {isEnglish ? "Links" : "روابط"}
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={scrollNoHash("about", 80)}
                  className="hover:text-blue-400"
                >
                  {isEnglish ? "About Us" : "من نحن"}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={scrollNoHash("services", 80)}
                  className="hover:text-blue-400"
                >
                  {isEnglish ? "Services" : "الخدمات"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollNoHash("contact", 80)}
                  className="hover:text-blue-400"
                >
                  {isEnglish ? "Contact Us" : "اتصل بنا"}
                </a>
              </li>
            </ul>
          </div> */}

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold">
              {isEnglish ? "Social Media" : "وسائل التواصل الاجتماعي"}
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 inline-flex items-center justify-center md:justify-start gap-2"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/almomayz.printing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 inline-flex items-center justify-center md:justify-start gap-2"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/80">
            &copy; {year}{" "}
            {isEnglish
              ? "Almomayz Printing. All rights reserved."
              : "مطابع المميز. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
