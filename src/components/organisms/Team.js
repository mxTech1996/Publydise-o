// En tu archivo: /components/FutureProofSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuCheckCircle } from 'react-icons/lu';

// --- Datos para la lista de características ---
const featuresData = [
  'Scalable IT Architecture',
  'Proactive Security Protocols',
  'Continuous Performance Optimization',
  'Dedicated Expert Support',
];

const FutureProofSection = () => {
  // Variantes para animación escalonada
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
  const blobAnimation = (duration, delay = 0) => ({
    y: ['0%', '-5%', '0%'],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay,
    },
  });

  return (
    <section className='relative py-20 md:py-28 bg-white overflow-hidden'>
      {/* --- Formas de "Blob" animadas en el fondo --- */}
      <motion.div
        className='absolute -top-20 -right-20 w-96 h-96 bg-yellow-100 rounded-full opacity-50 blur-3xl'
        animate={blobAnimation(12)}
      />
      <motion.div
        className='absolute bottom-0 -left-20 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl'
        animate={blobAnimation(10, 2)}
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Texto (Izquierda) --- */}
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
              OUR COMMITMENT
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'
            >
              Your Technology, Future-Proofed.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-gray-600 mb-8 leading-relaxed'
            >
              Our goal isn&#39;t just to solve today&#39;s problems. We build
              robust, scalable IT infrastructures designed to adapt and grow
              with your business, ensuring you&#39;re always prepared for
              tomorrow&#39;s challenges.
            </motion.p>

            <motion.ul variants={itemVariants} className='space-y-4 mb-10'>
              {featuresData.map((feature, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <LuCheckCircle
                    className='text-purple-500 flex-shrink-0'
                    size={20}
                  />
                  <span className='text-gray-700 font-medium'>{feature}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              {/* <button className='px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'>
                Let&#39;s Build Your Future
              </button> */}
            </motion.div>
          </motion.div>

          {/* --- Columna de Ilustración (Derecha) --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='w-full h-auto'
          >
            <Image
              src='/images/team.png' // Reemplaza con tu ilustración
              alt='Team of IT professionals working on a dashboard'
              width={600}
              height={500}
              className='mx-auto'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureProofSection;
