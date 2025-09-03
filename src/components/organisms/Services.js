// En tu archivo: /components/ServicesSection.js
'use client';

import { motion } from 'framer-motion';
// Íconos para cada servicio
import {
  LuCloudCog,
  LuShieldCheck,
  LuServer,
  LuArrowRight,
} from 'react-icons/lu';

// --- Datos para la sección ---
const servicesData = [
  {
    icon: <LuCloudCog size={28} />,
    title: 'Cloud Infrastructure & Migration',
    description:
      'We design and implement scalable cloud solutions, migrating your existing infrastructure to platforms like AWS and Azure with minimal downtime.',
  },
  {
    icon: <LuShieldCheck size={28} />,
    title: 'Cybersecurity & Risk Assessment',
    description:
      'Protect your digital assets with our comprehensive security audits, threat detection, and proactive risk management strategies.',
  },
  {
    icon: <LuServer size={28} />,
    title: 'Managed IT Services',
    description:
      'Offload your day-to-day IT operations to our expert team. We provide 24/7 monitoring, support, and maintenance for your systems.',
  },
];

const ServicesSection = () => {
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
    // El fondo púrpura coincide con el gradiente del Hero para una transición suave
    <section className='relative py-20 md:py-28 bg-gradient-to-br from-purple-600 to-indigo-700'>
      {/* Esto asegura que la onda de la sección anterior se superponga correctamente */}
      <div className='absolute top-0 left-0 w-full h-24 bg-white'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-300 mb-2'>WHAT WE DO</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Our Core IT Services
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='bg-white p-8 rounded-lg text-center flex flex-col items-center shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300'
            >
              <div className='bg-purple-100 text-purple-600 rounded-full p-4 mb-6'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-3 flex-grow'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-6 text-sm leading-relaxed'>
                {service.description}
              </p>
              <a
                href='/contact'
                className='flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-800 transition-colors'
              >
                <span>Get a quote</span>
                <LuArrowRight />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
