// En tu archivo: /components/Footer.js (ACTUALIZADO)
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importar Image para los logos de Visa
// Íconos para contacto y redes sociales
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
} from 'react-icons/lu';

// --- Datos para los enlaces ---
const footerLinks = {
  explore: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Privacy Policy', href: '/pdf/AP.PUBLYDISENO.SEPTIEMBRE.2025.pdf' },
    {
      name: 'Terms of Service',
      href: '/pdf/TYC-PUBLYDISENO.SEPTIEMBRE.2025.pdf',
    },
  ],
};

const Footer = () => {
  // Nombres de la empresa
  const companyName = 'Publydiseño Makky';
  const fullCompanyName = 'PUBLYDISEÑO MAKKY S DE RL DE CV';

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
    <footer className='bg-[#262B57] text-white'>
      <div className='container mx-auto px-4 py-16'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12' // Cambiado a 5 columnas
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Columna 1: Empresa */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 lg:col-span-1'
          >
            <h3 className='text-2xl font-bold mb-4'>{companyName}</h3>
            <p className='text-blue-200/80 max-w-xs'>
              We blend data-driven strategy with bold creativity to build
              advertising campaigns that deliver results.
            </p>
          </motion.div>

          {/* Columna 2: Explorar */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-pink-500'>Explore</h4>
            <ul className='space-y-2'>
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-blue-100/90 hover:text-pink-500 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Soporte */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-pink-500'>Support</h4>
            <ul className='space-y-2'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-blue-100/90 hover:text-pink-500 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-pink-500'>Contact Us</h4>
            <address className='not-italic text-blue-100/90 space-y-4'>
              <div className='flex items-start gap-3'>
                <LuMapPin className='mt-1 flex-shrink-0' />
                <span>{dataSite.address}</span>
              </div>
              <div className='flex items-center gap-3'>
                <LuPhone />
                <a
                  href={`tel:+${dataSite.telephone}`}
                  className='hover:text-pink-500'
                >
                  {dataSite.telephone}
                </a>
              </div>
            </address>
          </motion.div>

          {/* Columna 5: Pagos (NUEVA) */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4 text-pink-500'>
              Accepted Payments
            </h4>
            <div className='w-28 h-auto bg-white p-2 rounded-md'>
              <Image
                src='/images/visaMaster.png'
                alt='Visa and Mastercard logos'
                width={100}
                height={30}
                objectFit='contain'
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Sub-Footer con Copyright y Redes Sociales --- */}
      <div className='border-t border-blue-900/50'>
        <div className='container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-blue-200/70 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} {fullCompanyName}. All Rights
            Reserved.
          </p>
          {/* <div className='flex gap-4 mt-4 sm:mt-0'>
            <a href='#' className='hover:text-pink-500 transition-colors'>
              <LuTwitter size={20} />
            </a>
            <a href='#' className='hover:text-pink-500 transition-colors'>
              <LuInstagram size={20} />
            </a>
            <a href='#' className='hover:text-pink-500 transition-colors'>
              <LuLinkedin size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
