// In your file: /components/CoreStrategy.js
'use client';

import { motion } from 'framer-motion';
// Icons for each pillar
import { LuBrainCircuit, LuLightbulb, LuTrendingUp } from 'react-icons/lu';

// --- Data for the section ---
const strategyPillars = [
  {
    icon: <LuBrainCircuit size={32} />,
    title: 'Data-Driven Strategy',
    description:
      'We start with deep market research and audience analysis to build a campaign strategy that is targeted, effective, and measurable.',
  },
  {
    icon: <LuLightbulb size={32} />,
    title: 'Compelling Creativity',
    description:
      "Our creative team produces stunning visuals and persuasive copy that capture attention, tell your brand's story, and drive engagement.",
  },
  {
    icon: <LuTrendingUp size={32} />,
    title: 'Performance Optimization',
    description:
      "Campaigns aren't 'set and forget.' We continuously monitor, test, and optimize every aspect to maximize your return on investment.",
  },
];

const CoreStrategy = () => {
  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  return (
    <section id='strategy' className='relative py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl mx-auto'
        >
          <p className='font-semibold text-pink-600 mb-2'>OUR PHILOSOPHY</p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            The Core of Our Strategy
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            A holistic approach for market-leading results.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {strategyPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className='bg-[#262B57] p-8 rounded-lg text-white/90 border border-blue-900/50 shadow-lg'
            >
              <div className='flex justify-center text-pink-500 mb-5'>
                {pillar.icon}
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>
                {pillar.title}
              </h3>
              <p className='text-blue-200/80 leading-relaxed text-sm'>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wavy bottom divider */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 100H1440V0C1181.33 118.667 809.5 73.3333 550.5 28C291.5 -17.3333 131.333 41.3333 0 100Z'
            fill='#262B57'
          />
        </svg>
      </div>
    </section>
  );
};

export default CoreStrategy;
