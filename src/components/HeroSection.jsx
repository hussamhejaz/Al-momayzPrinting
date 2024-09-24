import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // For animation
import sider from '../imgs/siderImg.jpeg';
import sider2 from '../imgs/siderImg2.jpeg';
import sider3 from '../imgs/siderimg3.jpeg';

const slidesContent = {
  en: [
    {
      image: sider,
      title: "We Create Ideas That Impress You",
      description: "We meet all your printing needs with efficiency and professionalism.",
      buttonText: "Contact us via WhatsApp",
      buttonLink: "https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0",
    },
    {
      image: sider2,
      title: "Comprehensive Printing Services",
      description: "We provide customized printing services for all industries.",
      buttonText: "Explore More",
      buttonLink: "#services",
    },
    {
      image: sider3,
      title: "High Quality at Competitive Prices",
      description: "Get the best printing deals now.",
      buttonText: "Contact Us",
      buttonLink: "#contact",
    },
  ],
  ar: [
    {
      image: sider,
      title: "نبدع في صناعة الفكرة لتنال رضاكم",
      description: "نحن نلبي جميع احتياجات الطباعة بكفاءة واحترافية",
      buttonText: "تواصل معنا عبر الواتساب",
      buttonLink: "https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0",
    },
    {
      image: sider2,
      title: "خدمات طباعة متكاملة",
      description: "نوفر خدمات طباعة مخصصة لجميع المجالات",
      buttonText: "استكشاف المزيد",
      buttonLink: "#services",
    },
    {
      image: sider3,
      title: "جودة عالية بأسعار تنافسية",
      description: "احصل على أفضل عروض الطباعة الآن",
      buttonText: "تواصل معنا",
      buttonLink: "#contact",
    },
  ],
};

const HeroSection = ({ language }) => {
  const slides = language === 'en' ? slidesContent.en : slidesContent.ar;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{ backgroundImage: `url(${slide.image})`, filter: 'brightness(0.7)' }}
            ></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-white mt-4 max-w-2xl drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                {slide.description}
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              >
                <a
                  href={slide.buttonLink}
                  className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  {slide.buttonText}
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
