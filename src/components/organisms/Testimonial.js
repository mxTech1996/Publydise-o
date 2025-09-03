// En tu archivo: /components/TestimonialsSlider.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuQuote, LuStar } from 'react-icons/lu';

// --- Datos para la sección ---
const testimonialsData = [
  {
    logo: '/images/aura.png', // Reemplaza con tus logos
    quote:
      "Publydiseño Makky's creative campaign doubled our engagement rates in just one month. Their team is a powerhouse of creativity and strategic thinking. Truly exceptional results!",
    name: 'Jessica Thorne',
    title: 'Marketing Director, Aura Coffee',
  },
  {
    logo: '/images/kinect.png',
    quote:
      'The new brand identity they developed for us was a game-changer. It perfectly captured our vision and has been incredibly well-received by our customers. The process was seamless.',
    name: 'David Chen',
    title: 'Founder, Kinetic Wear',
  },
  {
    logo: '/images/momentum.png',
    quote:
      'Their data-driven approach to performance marketing is second to none. We saw a 150% increase in conversions after they optimized our ad spend. Highly recommend their services.',
    name: 'Maria Rodriguez',
    title: 'CEO, Momentum Motors',
  },
];

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

  return (
    <section className='py-20 md:py-28 bg-[#262B57] text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-500 mb-2'>TESTIMONIALS</p>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Lovely Feedback From Our Clients
          </h2>
        </motion.div>

        {/* --- Cuadrícula de Testimonios --- */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-blue-900/50 border border-blue-800/50 rounded-lg p-8 h-full flex flex-col'
            >
              <LuQuote className='text-pink-500 text-3xl mb-4' />
              <p className='text-blue-200/90 italic leading-relaxed flex-grow'>
                &quot;{testimonial.quote}&quot;
              </p>
              <div className='mt-6'>
                <div className='flex items-center mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <LuStar
                      key={i}
                      className='text-orange-400'
                      fill='currentColor'
                    />
                  ))}
                </div>
                <p className='font-bold text-white'>{testimonial.name}</p>
                <p className='text-blue-300 text-sm'>{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Logos de Clientes --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-16 text-center'
        >
          <p className='text-blue-300 mb-6'>
            Trusted by leading brands and innovative startups
          </p>
          <div className='flex justify-center items-center gap-8 md:gap-12 flex-wrap'>
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className='opacity-60 hover:opacity-100 transition-opacity'
              >
                <Image
                  src={testimonial.logo}
                  alt={testimonial.name}
                  width={120}
                  height={40}
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
