// En tu archivo: /components/HowWeWorkSection.js
'use client';

import { motion } from 'framer-motion';

// --- Datos para la sección ---
const processData = [
  {
    step: '1',
    title: 'Discovery & Assessment',
    description:
      'We start with a thorough assessment of your current IT environment, goals, and pain points.',
  },
  {
    step: '2',
    title: 'Strategic Planning',
    description:
      'We design a custom, data-driven IT roadmap that aligns with your business objectives and budget.',
  },
  {
    step: '3',
    title: 'Implementation & Migration',
    description:
      'Our expert team executes the plan, handling all technical aspects of implementation and data migration.',
  },
  {
    step: '4',
    title: 'Support & Optimization',
    description:
      'We provide ongoing support and continuously monitor performance to ensure your systems are always optimized.',
  },
];

const HowWeWorkSection = () => {
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
    <section className='py-20 md:py-28 bg-gradient-to-br from-purple-600 to-indigo-700'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-300 mb-2'>HOW WE WORK</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Our Simple & Effective Process
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {processData.map((process, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white p-8 rounded-lg text-center flex flex-col items-center shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300 h-full'
            >
              <div className='w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl font-bold text-gray-900'>
                  {process.step}
                </span>
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-3 flex-grow'>
                {process.title}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {process.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
