import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import client1 from '../imgs/client1.jpeg';
import client2 from '../imgs/client2.jpeg';
import client3 from '../imgs/client3.jpeg';
import client4 from '../imgs/client4.jpeg';
import client5 from '../imgs/client5.jpeg';
import client6 from '../imgs/client6.jpeg';
import client7 from '../imgs/client7.jpeg';
import client8 from '../imgs/client8.jpeg';
import client9 from '../imgs/client9.jpeg';

const clients = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
  { name: "Client 9", logo: client9 },
  // Add more clients here
];

const ClientsSection = ({ language }) => {
  const isEnglish = language === 'en';
  
  return (
    <section className="py-12 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {isEnglish ? 'Our Clients' : 'عملاؤنا'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4 style={{ backgroundColor: 'transparent' }}  shadow-lg"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              initial={{ opacity: 0, y: 50 }} // Start with logo hidden and below the view
              whileInView={{ opacity: 1, y: 0 }} // Animate when logo comes into view
              transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered fade-in effect
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-32 sm:h-40 lg:h-48 object-contain"
                draggable="false" // Disable dragging
                onContextMenu={(e) => e.preventDefault()} // Disable right-click menu (prevents saving image)
                style={{ backgroundColor: 'transparent' }} // Make the background transparent
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
