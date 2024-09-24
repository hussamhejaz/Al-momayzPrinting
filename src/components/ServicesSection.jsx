import React from 'react';
import { motion } from 'framer-motion'; // For scroll animations

// English and Arabic content for services
const servicesContent = {
  en: [
    {
      title: "Box Printing",
      description: "Box printing is a popular way to advertise products and promote them.",
      imageUrl: "/images/box-printing.jpg"
    },
    {
      title: "Bag Printing",
      description: "Bag printing is the process of producing bags that carry a specific design or logo.",
      imageUrl: "/images/bag-printing.jpg"
    },
    {
      title: "Card Printing",
      description: "Business or thank you cards help build trust with clients or thank them for purchases.",
      imageUrl: "/images/card-printing.jpg"
    },
    {
      title: "Sticker Printing",
      description: "Stickers are a highly efficient and affordable marketing tool.",
      imageUrl: "/images/sticker-printing.jpg"
    },
    {
      title: "Stamp Printing",
      description: "Stamp printing is important and widely used for both personal and corporate purposes.",
      imageUrl: "/images/stamp-printing.jpg"
    },
    {
      title: "Cup Printing",
      description: "Cup printing is an effective and affordable way to advertise your business.",
      imageUrl: "/images/cup-printing.jpg"
    },
    {
      title: "Flyer Printing",
      description: "Flyers are a cost-effective marketing tool to distribute promotional messages.",
      imageUrl: "/images/flyer-printing.jpg"
    },
    {
      title: "Invoice Printing",
      description: "Customize your invoices with eye-catching designs that represent your brand.",
      imageUrl: "/images/invoice-printing.jpg"
    },
    {
      title: "Envelope Printing",
      description: "Envelopes represent your company and can convey your brand’s professionalism.",
      imageUrl: "/images/envelope-printing.jpg"
    },
    {
      title: "Stand Printing",
      description: "Roll-up stands are an advertising tool for products and services.",
      imageUrl: "/images/stand-printing.jpg"
    },
    {
      title: "Ribbon Printing",
      description: "Ribbon printing adds a personalized touch to your gifts and special occasions.",
      imageUrl: "/images/ribbon-printing.jpg"
    },
    {
      title: "Brochure Printing",
      description: "Brochures are paper documents used for company or product promotion.",
      imageUrl: "/images/brochure-printing.jpg"
    },
    {
      title: "Tag Printing",
      description: "Elegant multi-use tags that fit your needs.",
      imageUrl: "/images/tag-printing.jpg"
    },
    {
      title: "Pen Printing",
      description: "Printed pens are a popular marketing tool to attract client attention.",
      imageUrl: "/images/pen-printing.jpg"
    },
    {
      title: "Badge Printing",
      description: "We design and print badges in various sizes and shapes to match your style.",
      imageUrl: "/images/badge-printing.jpg"
    },
    {
      title: "Gift Printing",
      description: "Promotional gifts are free items given by a company to employees or customers.",
      imageUrl: "/images/gift-printing.jpg"
    },
    {
      title: "Acrylic Printing",
      description: "Acrylic signs are elegant pieces used to display labels and signs clearly and attractively.",
      imageUrl: "/images/acrylic-printing.jpg"
    }
  ],
  ar: [
    {
      title: "طباعة بوكسات",
      description: "تعد الطباعة على العلب المصنوعة من الورق المقوى طريقة شائعة جدًا للإعلان عن المنتجات وتسويقها",
      imageUrl: "/images/box-printing.jpg"
    },
    {
      title: "طباعة أكياس",
      description: "طباعة الاكياس هي عملية إنتاج أكياس تحمل تصميم أو شعار أو عبارة معينة. يتم استخدامها في العديد من المجالات التجارية.",
      imageUrl: "/images/bag-printing.jpg"
    },
    {
      title: "طباعة كروت",
      description: "بزنز كارت او كارت شكر تساعدك على بناء الثقة مع العملاء او شكرهم على الشراء من متجرك",
      imageUrl: "/images/card-printing.jpg"
    },
    {
      title: "طباعة ستكرات لاصقة",
      description: "الاستكرات أو الملصقات هي شكل من أشكال أدوات التسويق عالية الكفاءة وذات سعر مناسب وغير مكلف",
      imageUrl: "/images/sticker-printing.jpg"
    },
    {
      title: "طباعة أختام",
      description: "تعد طباعة الأختام من الطباعات المهمة والمنتشرة؛ وذلك لأن هذه الطباعة تستمد أهميتها من أهمية الأختام بشكل عام",
      imageUrl: "/images/stamp-printing.jpg"
    },
    {
      title: "طباعة الأكواب",
      description: "الطباعة على الأكواب هي وسيلة فعالة من حيث التكلفة للإعلان عن عملك وبناء الوعي بالعلامة التجارية",
      imageUrl: "/images/cup-printing.jpg"
    },
    {
      title: "مطويات اعلانية",
      description: "النشرات الدعائية أو المطويات هي أحد الطرق الاقتصادية المُستخدمة في التسويق بغرض نشر وتوزيع رسالة تسويقية.",
      imageUrl: "/images/flyer-printing.jpg"
    },
    {
      title: "فواتير - سندات ورقية",
      description: "إذا كنت تريد منح مراسلاتك الحياة ميزها بتصاميم جذابة تمثل هوية الشركة",
      imageUrl: "/images/invoice-printing.jpg"
    },
    {
      title: "طباعة الأظرف",
      description: "الظرف لشركتك أو لعملك الخاص يعتبر واجهة معبرة عن عملك و مجال تخصصك",
      imageUrl: "/images/envelope-printing.jpg"
    },
    {
      title: "طباعة استاند",
      description: "رول اب هو من أحد وسائل الدعاية والإعلان الذي يقدم رسالة اعلانية لكافة الخدمات أو المنتجات الخاصة",
      imageUrl: "/images/stand-printing.jpg"
    },
    {
      title: "طباعة الشرايط",
      description: "طباعة شرائط لهداياكم ومناسباتكم الخاصة لمسات بسيطة تجعل لحظاتكم مميزة",
      imageUrl: "/images/ribbon-printing.jpg"
    },
    {
      title: "طباعة بروشورات",
      description: "البروشور هو مستند ورقي إعلامي يمكن طيه في نشرة أو كتيب هذه المستندات المطبوعة عبارة عن قطع إعلانية.",
      imageUrl: "/images/brochure-printing.jpg"
    },
    {
      title: "طباعة التاغات",
      description: "بطاقات متعددة الاستخدام , اشكال ومقاسات انيقة تناسب احتياجك",
      imageUrl: "/images/tag-printing.jpg"
    },
    {
      title: "طباعة اقلام",
      description: "من أشهر تلك الطرق المستخدمة، طباعة أقلام دعاية للشركات، فهي تقدم العديد من الاشكال والانواع للفت انتباه العميل",
      imageUrl: "/images/pen-printing.jpg"
    },
    {
      title: "طباعة بروش - نيم تاغ",
      description: "نقوم بتصميم و طباعة البروشات بأشكال و احجام تناسب اذواقكم بتصاميم ذات جودة عالية و فاخرة.",
      imageUrl: "/images/badge-printing.jpg"
    },
    {
      title: "طباعة هدايا اعلانية",
      description: "تعتبر الهدايا الدعائية من المنتجات المجانية التي تمنحها الشركة سنويًا أو شهريّا لموظفيها أو لعملائها.",
      imageUrl: "/images/gift-printing.jpg"
    },
    {
      title: "طباعة اكريلك",
      description: "لوحات اكريلك هي قطع مصنوعة من الأكريليك تستخدم لعرض التسميات واللافتات بشكل جذاب ومتين",
      imageUrl: "/images/acrylic-printing.jpg"
    }
  ]
};

const ServicesSection = ({ language }) => {
  const services = language === 'en' ? servicesContent.en : servicesContent.ar;

  return (
    <section className="py-12 bg-gray-100" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {language === 'en' ? 'Our Services' : 'خدماتُنا'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300"
              whileHover={{ scale: 1.05 }} // Animation on hover
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
