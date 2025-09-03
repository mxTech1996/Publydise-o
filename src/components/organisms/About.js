// En tu archivo: /components/AboutUsSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection = () => {
  // Variantes para animación escalonada del texto
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animación para las "blobs" de fondo
  const blobAnimation = (duration) => ({
    y: ['0%', '5%', '0%'],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  });

  return (
    <section className='relative py-20 md:py-28 bg-white overflow-hidden'>
      {/* --- Formas de "Blob" animadas en el fondo --- */}
      <motion.div
        className='absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl -translate-x-1/3'
        animate={blobAnimation(10)}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-50 blur-3xl translate-x-1/3'
        animate={blobAnimation(12)}
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='w-full h-auto'
          >
            <Image
              src='/images/about.png'
              alt='IT consultant analyzing data interface'
              width={500}
              height={500}
              className='mx-auto'
            />
          </motion.div>

          {/* --- Columna de Texto (Derecha) --- */}
          <motion.div
            variants={textContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-purple-600 mb-2'
            >
              ABOUT US
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'
            >
              Your Partner in Digital Transformation.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-gray-600 mb-4 leading-relaxed'
            >
              At Integrales Técnicos Ortiz, we simplify complex technology. Our
              mission is to empower businesses like yours by transforming your
              digital infrastructure into a powerful asset for growth and
              innovation. We are more than consultants; we are your dedicated
              technology partners.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className='text-gray-600 mb-8 leading-relaxed'
            >
              Our team of certified experts stays ahead of the curve, bringing
              you cutting-edge solutions in cloud computing, cybersecurity, and
              managed IT services that are tailored to your unique business
              needs.
            </motion.p>

            <motion.div variants={itemVariants}>
              {/* <button className='px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'>
                Meet Our Team
              </button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
