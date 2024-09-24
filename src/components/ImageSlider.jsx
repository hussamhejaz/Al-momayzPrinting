import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import girl1 from "../imgs/girl1.jpeg";
import girl2 from "../imgs/girl2.jpeg";
import girl3 from "../imgs/girl3.jpeg";

const ImageSlider = ({ language }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slidesContent = {
    en: [
      {
        imageUrl: girl1,
        text: "Fast Printing Services",
      },
      {
        imageUrl: girl2,
        text: "Latest Printing Technologies",
      },
      {
        imageUrl: girl3,
        text: "Latest Digital Printing Techniques",
      },
    ],
    ar: [
      {
        imageUrl: girl1,
        text: "خدمات الطباعة السريعة",
      },
      {
        imageUrl: girl2,
        text: "أحدث تقنيات الطباعة",
      },
      {
        imageUrl: girl3,
        text: "أحدث تقنيات الطباعة الرقمية",
      },
    ],
  };

  const slides = language === 'en' ? slidesContent.en : slidesContent.ar;

  return (
    <div className="slider-container w-full h-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Responsive Image */}
            <img
              src={slide.imageUrl}
              alt={slide.text}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h3 className={`text-white text-lg sm:text-2xl md:text-3xl font-bold px-4 text-center ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                {slide.text}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
