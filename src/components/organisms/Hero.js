// CÓDIGO COMPLETO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';

// --- Componente Principal de la Sección Hero ---
const HeroSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animación flotante para las ilustraciones
  const floatingAnimation = {
    y: ['-8px', '8px'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <section className='relative w-full pt-16 pb-24 bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-hidden'>
      {/* Formas abstractas de fondo */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/4 -translate-y-1/4'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4'></div>

      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
        {/* Columna de Texto (Izquierda) */}
        <motion.div
          className='text-center lg:text-left'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-yellow-300 mb-2'
          >
            IT CONSULTING SERVICES
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className='text-4xl md:text-6xl font-bold leading-tight mb-6'
          >
            Modern Solutions for Your Digital Infrastructure.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-lg text-purple-100 mb-8 max-w-lg mx-auto lg:mx-0'
          >
            We provide expert IT consulting to optimize your technology, enhance
            security, and drive business innovation. Let&#39;s build a more
            efficient future, together.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className='px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'>
              Get a Free Analysis
            </button>
          </motion.div>
        </motion.div>

        {/* Columna de Ilustraciones (Derecha) */}
        <div className='hidden lg:block relative h-[450px]'>
          <motion.div
            className='absolute top-10 right-20'
            animate={floatingAnimation}
          >
            <Image
              src={dataSite.image_hero}
              alt='IT consultant working on a laptop'
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            className='absolute bottom-10 left-10'
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 0.5 },
            }}
          >
            <Image
              src='/images/hero.png' // Reemplaza con tu ilustración
              alt='IT consultant with cloud server'
              width={350}
              height={350}
            />
          </motion.div>
        </div>
      </div>

      {/* Divisor de sección ondulado */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 100H1440V0C1181.33 118.667 809.5 73.3333 550.5 28C291.5 -17.3333 131.333 41.3333 0 100Z'
            fill='white'
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
