// En tu archivo: /components/Footer.js
'use client';

import { dataSite, email } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';

// --- Datos para los enlaces ---
const footerLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#products' },
  { name: 'Our Work', href: '#our-work' },
];

const Footer = () => {
  // Para el nombre de la empresa, usamos una versión más corta
  const companyName = 'Integrales Técnicos Ortiz';
  const fullCompanyName = 'INTEGRALES TECNICOS ORTIZ S DE RL DE CV';

  // Variantes para animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className='bg-indigo-900 text-white'>
      <motion.div
        className='container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Columna 1: Empresa */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 lg:col-span-1'
          >
            <h3 className='text-2xl font-bold mb-4'>{companyName}</h3>
            <p className='text-purple-200 max-w-xs'>
              Providing expert IT consulting to optimize your technology,
              enhance security, and drive business innovation.
            </p>
          </motion.div>

          {/* Columna 2: Enlaces */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-yellow-300'>Explore</h4>
            <ul className='space-y-2'>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-purple-100 hover:text-yellow-300 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-yellow-300'>
              Contact Us
            </h4>
            <div className='space-y-4 text-purple-100'>
              <div className='flex items-start gap-3'>
                <LuMapPin className='mt-1 flex-shrink-0' />
                <span>{dataSite.address}</span>
              </div>
              <div className='flex items-center gap-3'>
                <LuPhone />
                <a href='tel:+525587654321' className='hover:text-yellow-300'>
                  {dataSite.telephone}
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <LuMail />
                <a href={`mailto:${email}`} className='hover:text-yellow-300'>
                  {email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Columna 4: Pagos */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-yellow-300'>
              Accepted Payments
            </h4>
            <div className='w-28 h-auto  p-2 rounded-md'>
              <Image
                src='/images/visaMaster.png'
                alt='Visa and Mastercard logos'
                width={100}
                height={30}
                objectFit='contain'
              />
            </div>
          </motion.div>
        </div>

        {/* --- Sub-Footer con Copyright --- */}
        <div className='mt-16 pt-8 border-t border-indigo-800 text-center text-purple-200 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} {fullCompanyName}. All Rights
            Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
