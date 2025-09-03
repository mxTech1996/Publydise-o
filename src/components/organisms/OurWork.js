// En tu archivo: /components/PortfolioSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuEye } from 'react-icons/lu';

// --- Datos para la sección ---
const portfolioData = [
  {
    image: dataSite.services[0].image,
    title: 'Kinetic Wear - Viral Campaign',
    category: 'Social Media Marketing',
  },
  {
    image: dataSite.services[1].image,
    title: 'Aura Coffee - Brand Identity',
    category: 'Branding & Design',
  },
  {
    image: dataSite.services[4].image,
    title: 'Momentum Motors - Video Ad',
    category: 'Video Production',
  },
];

const PortfolioSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='services' className='py-20 md:py-28 bg-[#262B57]'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-500 mb-2'>OUR WORKS</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            A Glimpse Into Our Successful Campaigns
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover='hover'
              initial='rest'
              className='group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-lg'
            >
              {/* Imagen de fondo */}
              <Image
                src={project.image}
                alt={project.title}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-500 ease-in-out group-hover:scale-105'
              />
              {/* Superposición que aparece al pasar el mouse */}
              <motion.div
                className='absolute inset-0 bg-black/50 flex flex-col justify-end p-6'
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className='text-sm font-medium text-pink-200'>
                  {project.category}
                </p>
                <h3 className='text-xl font-bold text-white mt-1'>
                  {project.title}
                </h3>
                <div className='mt-4 flex items-center gap-2 text-white font-semibold'>
                  <a href='/contact'>Learn more</a>
                  <LuEye />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
