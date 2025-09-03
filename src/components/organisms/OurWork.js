// En tu archivo: /components/ProjectsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Datos para la sección ---
const projectsData = [
  {
    image: dataSite.services[3].image,
    title: 'Cloud Migration for a FinTech Leader',
    category: 'Infrastructure Overhaul',
  },
  {
    image: dataSite.services[2].image,
    title: 'Cybersecurity Shield for an E-commerce Platform',
    category: 'Security & Risk Mitigation',
  },
  {
    image: dataSite.services[1].image,
    title: 'Digital Transformation for a Retail Giant',
    category: 'Process Automation',
  },
];

const ProjectsSection = () => {
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
    <section
      id='our-work'
      className='relative pt-20 md:pt-28 pb-20 md:pb-28 bg-gradient-to-br from-purple-600 to-indigo-700'
    >
      {/* Divisor ondulado que se superpone a la sección anterior */}
      <div className='absolute top-0 left-0 w-full -translate-y-1/2'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H1440V100C1181.33 -18.6667 809.5 26.6667 550.5 72C291.5 117.333 131.333 58.6667 0 0Z'
            fill='white'
          />
        </svg>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-300 mb-2'>OUR WORKS</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group'
            >
              <div className='relative h-56 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <p className='text-sm text-yellow-300 font-medium'>
                  {project.category}
                </p>
                <h3 className='text-xl font-bold text-white mt-2'>
                  {project.title}
                </h3>
                {/* <a
                  href='#'
                  className='inline-block mt-4 text-white font-semibold hover:text-yellow-300 transition-colors'
                >
                  View Project &rarr;
                </a> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
