// En tu archivo: /components/BenefitsSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos para la lista de beneficios
import { LuMegaphone, LuMousePointerClick, LuBarChart } from 'react-icons/lu';

// --- Datos para la sección ---
const benefitsData = [
  {
    icon: <LuMegaphone size={24} />,
    title: 'Boost Brand Awareness',
    description:
      'We create memorable campaigns that cut through the noise and place your brand in front of the right audience.',
    color: 'bg-pink-500',
  },
  {
    icon: <LuMousePointerClick size={24} />,
    title: 'Drive Higher Conversions',
    description:
      'Our data-driven approach ensures every ad is optimized to turn viewers into loyal customers and increase sales.',
    color: 'bg-orange-500',
  },
  {
    icon: <LuBarChart size={24} />,
    title: 'Achieve Measurable ROI',
    description:
      'We provide transparent reporting that clearly demonstrates the tangible return on your advertising investment.',
    color: 'bg-pink-500',
  },
];

const BenefitsSection = () => {
  // Variantes para animación
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='benefits' className='py-20 md:py-28 bg-[#262B57] text-white'>
      <div className='container mx-auto px-4'>
        {/* --- Parte 1: Banner CTA --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row justify-between items-center pb-12 mb-12 border-b border-blue-800/50'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center md:text-left'>
            Ready to Launch a Campaign That Delivers?
          </h2>
          <a
            href='/contact'
            className='mt-6 md:mt-0 flex-shrink-0 px-8 py-3 bg-pink-600 font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300'
          >
            Get a Free Quote
          </a>
        </motion.div>

        {/* --- Parte 2: Rejilla de Beneficios --- */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Texto (Izquierda) --- */}
          <motion.div
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className='font-semibold text-pink-500 mb-2'>OUR BENEFITS</p>
            <h3 className='text-4xl font-bold mb-10'>
              Benefits of working with Publydiseño
            </h3>
            <ul className='space-y-8'>
              {benefitsData.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className='flex items-start gap-4'
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${benefit.color}`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className='text-xl font-bold'>{benefit.title}</h4>
                    <p className='text-blue-200/90 mt-1'>
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Columna de Ilustración (Derecha) --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='hidden lg:block'
          >
            <Image
              src='/images/benefit.png' // Reemplaza con tu ilustración
              alt='Illustration showing successful results'
              width={500}
              height={500}
              className='w-full h-auto'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
