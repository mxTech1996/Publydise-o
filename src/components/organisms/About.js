// In your file: /components/AboutUsSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuCheckCircle } from 'react-icons/lu';

// --- Data for the features list ---
const aboutFeatures = [
  'Full-Funnel Strategic Planning',
  'Multi-Platform Campaign Execution',
  'Transparent & Actionable Reporting',
  'Dedicated Creative & Analytics Teams',
];

const AboutUsSection = () => {
  // Animation variants for staggering text
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id='about'
      className='relative pt-20 md:pt-28 pb-20 md:pb-28 bg-[#262B57] text-white overflow-hidden'
    >
      {/* This div sits "behind" the previous section's wave, ensuring no color gaps */}
      <div className='absolute top-0 left-0 w-full h-24 bg-white -translate-y-full'></div>

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Illustration Column (Left) --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src='/images/about.png' // Replace with your illustration
              alt='Creative team analyzing a campaign'
              width={600}
              height={500}
              className='w-full h-auto'
            />
          </motion.div>

          {/* --- Text Column (Right) --- */}
          <motion.div
            variants={textContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-pink-500 mb-2'
            >
              ABOUT US
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold mb-6'
            >
              Where Data Meets Daring Creativity.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-blue-100/90 mb-8 leading-relaxed'
            >
              We are a new generation of advertisers who believe that the most
              powerful campaigns are born from the perfect blend of analytical
              rigor and bold, creative storytelling. We transform data into
              conversations and impressions into conversions.
            </motion.p>

            <motion.ul variants={itemVariants} className='space-y-4 mb-10'>
              {aboutFeatures.map((feature, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <LuCheckCircle
                    className='text-pink-500 flex-shrink-0'
                    size={20}
                  />
                  <span className='text-blue-100/90'>{feature}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <a
                href='/contact'
                className='px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300'
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
