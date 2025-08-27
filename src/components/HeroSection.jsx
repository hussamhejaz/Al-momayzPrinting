import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import sider from "../imgs/siderImg.jpeg";
import sider2 from "../imgs/siderImg2.jpeg";
import sider3 from "../imgs/siderimg3.jpeg";

/**
 * PURE REACT + TAILWIND SLIDER (no react-slick, no warnings)
 * - Autoplay with pause on hover/focus
 * - Fade transitions
 * - Lazy loading (except first slide eager/high priority)
 * - RTL aware
 * - Dots + Prev/Next controls (keyboard accessible)
 */

const slidesContent = {
  en: [
    {
      image: sider,
      title: "We Create Ideas That Impress You",
      description: "We deliver across the Kingdom at no cost to you.",
      buttonText: "Contact us via WhatsApp",
      buttonLink:
        "https://api.whatsapp.com/send/?phone=966530963426&text&type=phone_number&app_absent=0",
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
      description: "نوفر التوصيل المجاني لجميع أنحاء المملكة",
      buttonText: "تواصل معنا عبر الواتساب",
      buttonLink:
        "https://api.whatsapp.com/send/?phone=966536525360&text&type=phone_number&app_absent=0",
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

const AUTOPLAY_MS = 4500;
const FADE_MS = 700;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(!!m?.matches);
    set();
    m?.addEventListener?.("change", set);
    return () => m?.removeEventListener?.("change", set);
  }, []);
  return reduced;
}

const HeroSection = ({ language = "en" }) => {
  const slides = useMemo(
    () => (language === "en" ? slidesContent.en : slidesContent.ar),
    [language]
  );
  const isRTL = language === "ar";

  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  // Preload images for smoother transitions
  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new Image();
      img.src = s.image;
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
    });
  }, [slides]);

  // Autoplay logic
  useEffect(() => {
    if (prefersReduced) return;
    if (paused) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [slides.length, paused, prefersReduced]);

  // Pause when tab is hidden
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const goTo = (idx) => setActive(idx);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-[80vh] lg:min-h-[92vh] overflow-hidden"
      aria-roledescription="carousel"
      aria-label={isRTL ? "شريط الشرائح" : "Hero carousel"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[80vh] lg:h-[92vh]">
        {slides.map((slide, index) => {
          const isActive = index === active;
          const isFirst = index === 0;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[${FADE_MS}ms] ease-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${slides.length}`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                loading={isFirst ? "eager" : "lazy"}
                fetchpriority={isFirst ? "high" : "auto"}
                decoding={isFirst ? "sync" : "async"}
                className={[
                  "w-full h-full object-cover select-none",
                  "transition-opacity duration-700",
                  loaded[index] ? "opacity-100" : "opacity-0",
                ].join(" ")}
                onLoad={() => setLoaded((p) => ({ ...p, [index]: true }))}
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="px-4 sm:px-8 max-w-4xl text-center">
                  <motion.h1
                    className="text-white font-bold drop-shadow-md leading-tight text-3xl sm:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="mt-4 text-white/90 drop-shadow-sm text-base sm:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.96 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  >
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 active:scale-95 text-white font-semibold px-6 py-3 shadow-lg transition"
                    >
                      {slide.buttonText}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6">
        <button
          type="button"
          onClick={isRTL ? next : prev}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isRTL ? "التالي" : "Previous slide"}
        >
          {/* Left chevron (flips meaning in RTL) */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={isRTL ? prev : next}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isRTL ? "السابق" : "Next slide"}
        >
          {/* Right chevron */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
            <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0">
        <ul className="flex justify-center gap-2">
          {slides.map((_, i) => {
            const activeDot = i === active;
            return (
              <li key={i}>
                <button
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={activeDot ? "true" : "false"}
                  onClick={() => goTo(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    activeDot ? "bg-white w-2.5 h-2.5" : "bg-white/60 hover:bg-white",
                    "focus:outline-none focus:ring-2 focus:ring-white",
                  ].join(" ")}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Reduced-motion helper: disable transitions via CSS */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
