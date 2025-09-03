import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
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
    <section className='relative w-full min-h-screen bg-[#262B57] text-white flex items-center overflow-hidden'>
      {/* Patrones de puntos decorativos */}
      <div className='absolute top-20 left-20 w-48 h-48 bg-radial-gradient opacity-20'></div>
      <div className='absolute bottom-20 right-20 w-48 h-48 bg-radial-gradient opacity-20'></div>

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Columna de Texto (Izquierda) */}
          <motion.div
            className='text-center lg:text-left z-10'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-pink-500 mb-2'
            >
              AWARD-WINNING ADVERTISING AGENCY
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className='text-5xl md:text-6xl font-extrabold leading-tight mb-6'
            >
              Creative Campaigns That Captivate & Convert.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className='text-lg text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0'
            >
              We blend data-driven strategy with bold creativity to build
              advertising campaigns that not only get noticed but deliver
              measurable results.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <a
                href='#services'
                className='px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300'
              >
                Our Services
              </a>
              <a
                href='#benefits'
                className='px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white hover:text-blue-900 transition-colors duration-300'
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Columna de Ilustración (Derecha) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='hidden lg:block relative w-full h-[500px]'
          >
            <Image
              src='/images/hero.png' // Reemplaza con tu ilustración
              alt='Creative team brainstorming an advertising campaign'
              layout='fill'
              objectFit='contain'
            />
          </motion.div>
        </div>
      </div>
      {/* Añadimos un style global para el patrón de puntos si es necesario */}
      <style jsx global>{`
        .bg-radial-gradient {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.5) 1px,
            transparent 1px
          );
          background-size: 1rem 1rem;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
