import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import aboutus from "../imgs/aboutus.jpg";

const variants = {
  text: (fromLeft) => ({
    hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }),
  image: (fromRight) => ({
    hidden: { opacity: 0, x: fromRight ? 40 : -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }),
};

const AboutSection = ({ language = "en" }) => {
  const isEnglish = language === "en";
  const isRTL = !isEnglish;

  const t = useMemo(
    () =>
      isEnglish
        ? {
            heading: "About Us",
            p1:
              "At Al-Momayz Printing, we deliver comprehensive printing solutions across industries with a team of expert designers and seasoned print technicians. We commit to high quality, fair pricing, and fast turnaround times.",
            p2:
              "We focus on sustainability and continuous improvement, adopting the latest printing technologies to meet expectations and earn your trust.",
            features: [
              "Creative design & brand support",
              "Fast delivery across the Kingdom",
              "High quality at competitive prices",
            ],
            alt: "About us",
          }
        : {
            heading: "من نحن؟",
            p1:
              "في مطابع المميز نقدّم حلول طباعة شاملة لمختلف القطاعات عبر فريق من المصممين المحترفين وفنيّي الطباعة ذوي الخبرة. نلتزم بالجودة العالية والأسعار العادلة وسرعة الإنجاز.",
            p2:
              "نركّز على الاستمرارية والتطوير، ونعتمد أحدث تقنيات الطباعة لتلبية تطلعاتكم وكسب ثقتكم.",
            features: ["تصميم إبداعي ودعم للهوية", "توصيل سريع لجميع مناطق المملكة", "جودة عالية بأسعار منافسة"],
            alt: "من نحن",
          },
    [isEnglish]
  );

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-14 sm:py-16 w-full bg-gradient-to-b from-gray-50 to-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center",
            // swap order in RTL so image appears on the right
            isRTL ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : "",
          ].join(" ")}
        >
          {/* Text */}
          <motion.div
            className={["flex flex-col", isEnglish ? "text-left" : "text-right"].join(" ")}
            variants={variants.text(isEnglish)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
            >
              {t.heading}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">{t.p1}</p>
            <p className="mt-3 text-lg leading-8 text-gray-700">{t.p2}</p>

            <ul
              className={[
                "mt-6 space-y-3 text-gray-800",
                isEnglish ? "pl-1" : "pr-1",
              ].join(" ")}
            >
              {t.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                    {/* check icon */}
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M7.5 13.5l-3-3 1.4-1.4 1.6 1.6 6-6L15 6.1l-7.5 7.4z" />
                    </svg>
                  </span>
                  <span className="text-base">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.figure
            className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-white"
            variants={variants.image(isEnglish)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* skeleton shimmer */}
            {!imgLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
            )}

            <img
              src={aboutus}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              fetchpriority="auto"
              sizes="(min-width: 768px) 50vw, 100vw"
              className={[
                "block w-full h-64 sm:h-80 md:h-[22rem] object-cover",
                "transition duration-700 ease-out",
                imgLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
              ].join(" ")}
              onLoad={() => setImgLoaded(true)}
            />

            {/* subtle corner gradient for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
