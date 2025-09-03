// En tu archivo: /components/TestimonialsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { LuStar } from 'react-icons/lu';

// lustart fill

// --- Datos para la sección de testimonios ---
const testimonialsData = dataSite.references;

const TestimonialsSection = () => {
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
  const telephone = dataSite.telephone;

  return (
    <section className='bg-white'>
      {/* --- Parte 1: Banner de Llamada a la Acción --- */}
      <div className='py-16 bg-gradient-to-br from-purple-600 to-indigo-700'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='container mx-auto px-4 text-center text-white'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Elevate Your Business?
          </h2>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <a
              href='/contact'
              className='px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'
            >
              Contact Us
            </a>
            <a
              href={`tel:${telephone}`}
              className='font-semibold hover:text-yellow-300 transition-colors'
            >
              or Schedule a Call &rarr;
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- Parte 2: Sección de Testimonios --- */}
      <div className='py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <p className='font-semibold text-purple-600 mb-2'>TESTIMONIALS</p>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-white p-8 rounded-lg border border-gray-200 shadow-sm'
              >
                {/* stars */}
                <div className='flex items-center mb-6'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <LuStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className='text-gray-600 italic mb-6'>
                  &quot;{testimonial.description}&quot;
                </p>
                <p className='font-semibold text-gray-800'>
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
