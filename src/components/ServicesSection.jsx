import React, { useState } from "react";
import advertisinggifts from "../ServicesImgs/advertisinggifts.jpg";
import Brochure from "../ServicesImgs/Brochure.jpg";
import Paperbills from "../ServicesImgs/Paperbills.jpg";
import pens from "../ServicesImgs/pens.jpg";
import stands from "../ServicesImgs/stands.jpg";
import Tags from "../ServicesImgs/Tags.jpg";
import stickers from "../ServicesImgs/stickers.jpg";
import cards from "../ServicesImgs/cards.jpg";
import cup from "../ServicesImgs/cup.jpg";
import Envelopes from "../ServicesImgs/Envelopes.jpg";
import Nametagbrooch from "../ServicesImgs/Nametagbrooch.jpg";
import Acrylic from "../ServicesImgs/Acrylic.jpg";
import stamps from "../ServicesImgs/stamps.jpg";
import box from "../ServicesImgs/box.jpg";
import bags from "../ServicesImgs/bags.jpg";
import Theribbons from "../ServicesImgs/Theribbons.jpg";
import Brochures from "../ServicesImgs/Brochures.jpg";

// English and Arabic content for services
const servicesContent = {
  en: [
    {
      title: "Box Printing",
      description:
        "Box printing is a popular way to advertise products and promote them.",
      imageUrl: box,
    },
    {
      title: "Bag Printing",
      description:
        "Bag printing is the process of producing bags that carry a specific design or logo.",
      imageUrl: bags,
    },
    {
      title: "Card Printing",
      description:
        "Business or thank you cards help build trust with clients or thank them for purchases.",
      imageUrl: cards,
    },
    {
      title: "Sticker Printing",
      description:
        "Stickers are a highly efficient and affordable marketing tool.",
      imageUrl: stickers,
    },
    {
      title: "Stamp Printing",
      description:
        "Stamp printing is important and widely used for both personal and corporate purposes.",
      imageUrl: stamps,
    },
    {
      title: "Cup Printing",
      description:
        "Cup printing is an effective and affordable way to advertise your business.",
      imageUrl: cup,
    },
    {
      title: "Flyer Printing",
      description:
        "Flyers are a cost-effective marketing tool to distribute promotional messages.",
      imageUrl: Brochures,
    },
    {
      title: "Invoice Printing",
      description:
        "Customize your invoices with eye-catching designs that represent your brand.",
      imageUrl: Paperbills,
    },
    {
      title: "Envelope Printing",
      description:
        "Envelopes represent your company and can convey your brand’s professionalism.",
      imageUrl: Envelopes,
    },
    {
      title: "Stand Printing",
      description:
        "Roll-up stands are an advertising tool for products and services.",
      imageUrl: stands,
    },
    {
      title: "Ribbon Printing",
      description:
        "Ribbon printing adds a personalized touch to your gifts and special occasions.",
      imageUrl: Theribbons,
    },
    {
      title: "Brochure Printing",
      description:
        "Brochures are paper documents used for company or product promotion.",
      imageUrl: Brochure,
    },
    {
      title: "Tag Printing",
      description: "Elegant multi-use tags that fit your needs.",
      imageUrl: Tags,
    },
    {
      title: "Pen Printing",
      description:
        "Printed pens are a popular marketing tool to attract client attention.",
      imageUrl: pens,
    },
    {
      title: "Badge Printing",
      description:
        "We design and print badges in various sizes and shapes to match your style.",
      imageUrl: bags,
    },
    {
      title: "Gift Printing",
      description:
        "Promotional gifts are free items given by a company to employees or customers.",
      imageUrl: advertisinggifts,
    },
    {
      title: "Acrylic Printing",
      description:
        "Acrylic signs are elegant pieces used to display labels and signs clearly and attractively.",
      imageUrl: Acrylic,
    },
  ],
  ar: [
    {
      title: "طباعة بوكسات",
      description:
        "تعد الطباعة على العلب المصنوعة من الورق المقوى طريقة شائعة جدًا للإعلان عن المنتجات وتسويقها",
      imageUrl: box,
    },
    {
      title: "طباعة أكياس",
      description:
        "طباعة الاكياس هي عملية إنتاج أكياس تحمل تصميم أو شعار أو عبارة معينة. يتم استخدامها في العديد من المجالات التجارية.",
      imageUrl: bags,
    },
    {
      title: "طباعة كروت",
      description:
        "بزنز كارت او كارت شكر تساعدك على بناء الثقة مع العملاء او شكرهم على الشراء من متجرك",
      imageUrl: cards,
    },
    {
      title: "طباعة ستكرات لاصقة",
      description:
        "الاستكرات أو الملصقات هي شكل من أشكال أدوات التسويق عالية الكفاءة وذات سعر مناسب وغير مكلف",
      imageUrl: stickers,
    },
    {
      title: "طباعة أختام",
      description:
        "تعد طباعة الأختام من الطباعات المهمة والمنتشرة؛ وذلك لأن هذه الطباعة تستمد أهميتها من أهمية الأختام بشكل عام",
      imageUrl: stamps,
    },
    {
      title: "طباعة الأكواب",
      description:
        "الطباعة على الأكواب هي وسيلة فعالة من حيث التكلفة للإعلان عن عملك وبناء الوعي بالعلامة التجارية",
      imageUrl: cup,
    },
    {
      title: "مطويات اعلانية",
      description:
        "النشرات الدعائية أو المطويات هي أحد الطرق الاقتصادية المُستخدمة في التسويق بغرض نشر وتوزيع رسالة تسويقية.",
      imageUrl: Brochures,
    },
    {
      title: "فواتير - سندات ورقية",
      description:
        "إذا كنت تريد منح مراسلاتك الحياة ميزها بتصاميم جذابة تمثل هوية الشركة",
      imageUrl: Paperbills,
    },
    {
      title: "طباعة الأظرف",
      description:
        "الظرف لشركتك أو لعملك الخاص يعتبر واجهة معبرة عن عملك و مجال تخصصك",
      imageUrl: Envelopes,
    },
    {
      title: "طباعة استاند",
      description:
        "رول اب هو من أحد وسائل الدعاية والإعلان الذي يقدم رسالة اعلانية لكافة الخدمات أو المنتجات الخاصة",
      imageUrl: stands,
    },
    {
      title: "طباعة الشرايط",
      description:
        "طباعة شرائط لهداياكم ومناسباتكم الخاصة لمسات بسيطة تجعل لحظاتكم مميزة",
      imageUrl: Theribbons,
    },
    {
      title: "طباعة بروشورات",
      description:
        "البروشور هو مستند ورقي إعلامي يمكن طيه في نشرة أو كتيب هذه المستندات المطبوعة عبارة عن قطع إعلانية.",
      imageUrl: Brochure,
    },
    {
      title: "طباعة التاغات",
      description:
        "بطاقات متعددة الاستخدام , اشكال ومقاسات انيقة تناسب احتياجك",
      imageUrl: Tags,
    },
    {
      title: "طباعة اقلام",
      description:
        "من أشهر تلك الطرق المستخدمة، طباعة أقلام دعاية للشركات، فهي تقدم العديد من الاشكال والانواع للفت انتباه العميل",
      imageUrl: pens,
    },
    {
      title: "طباعة بروش - نيم تاغ",
      description:
        "نقوم بتصميم و طباعة البروشات بأشكال و احجام تناسب اذواقكم بتصاميم ذات جودة عالية و فاخرة.",
      imageUrl: Nametagbrooch,
    },
    {
      title: "طباعة هدايا اعلانية",
      description:
        "تعتبر الهدايا الدعائية من المنتجات المجانية التي تمنحها الشركة سنويًا أو شهريّا لموظفيها أو لعملائها.",
      imageUrl: advertisinggifts,
    },
    {
      title: "طباعة اكريلك",
      description:
        "لوحات اكريلك هي قطع مصنوعة من الأكريليك تستخدم لعرض التسميات واللافتات بشكل جذاب ومتين",
      imageUrl: Acrylic,
    },
  ],
};

// Custom LazyImage component with skeleton loader and fade-in transition
const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

const ServicesSection = ({ language }) => {
  const services = language === "en" ? servicesContent.en : servicesContent.ar;

  return (
    <section className="py-12 bg-gray-100" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {language === "en" ? "Our Services" : "خدماتُنا"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <LazyImage
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 sm:h-56 lg:h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
