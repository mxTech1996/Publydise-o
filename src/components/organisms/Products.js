// En tu archivo: /components/PricingSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Asegúrate de que Image esté importado
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LuCheckCircle } from 'react-icons/lu';
import { CartContext } from 'ui-old-version';

// --- Datos para los planes de precios (ACTUALIZADO CON IMÁGENES) ---
const pricingData = dataSite.products.filter(
  (product) => parseFloat(product.price) > 60
);
const pricingDataAdd = dataSite.products.filter(
  (product) => parseFloat(product.price) < 60
);

const PricingSection = ({ isHome = true }) => {
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);

  const router = useRouter();
  // Las variantes de animación se mantienen igual
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
      id='products'
      className='py-20 md:py-28 bg-gradient-to-br from-purple-600 to-indigo-700'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-300 mb-2'>PRICING</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Clear & Transparent Pricing
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingData.map((plan, index) => {
            const handleClick = () => {
              if (isHome) {
                router.push('/contact');
                return;
              }
              handleAddOrRemoveProduct(plan.id);
            };
            const isInCart = validateProductInCart(plan.id);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  plan.isFeatured
                    ? 'bg-white text-gray-800 scale-100 lg:scale-105'
                    : 'bg-white/10 text-white border border-white/20'
                }`}
              >
                {/* --- SECCIÓN DE IMAGEN AÑADIDA --- */}
                <div className='relative w-full h-48'>
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>

                <div className='p-8 flex-grow flex flex-col'>
                  <h3 className='text-2xl font-bold mb-3'>{plan.name}</h3>
                  <span className='text-4xl font-bold'>{plan.price} USD</span>
                  <span className={`${'text-white'}`}>{plan.description}</span>

                  {/* Div para empujar el botón hacia abajo */}
                  {/* <ul className='space-y-4 flex-grow'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <LuCheckCircle
                        className={`flex-shrink-0 mt-1 ${
                          plan.isFeatured
                            ? 'text-purple-500'
                            : 'text-yellow-300'
                        }`}
                      />
                      <span
                        className={`${
                          plan.isFeatured ? 'text-gray-600' : 'text-gray-200'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul> */}

                  <div className='mt-8'>
                    <button
                      onClick={handleClick}
                      className={`w-full px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                        !isInCart
                          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                          : 'bg-purple-500/50 text-white hover:bg-purple-500'
                      }`}
                    >
                      {isHome
                        ? 'Get a quote'
                        : isInCart
                        ? 'Remove from Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {!isHome && (
        <div className='container mx-auto px-4 mt-10'>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <p className='font-semibold text-yellow-300 mb-2'>PRICING</p>
            <h2 className='text-4xl md:text-5xl font-bold text-white'>
              Additionals
            </h2>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {pricingDataAdd.map((plan, index) => {
              const handleClick = () => {
                if (isHome) {
                  router.push('/contact');
                  return;
                }
                handleAddOrRemoveProduct(plan.id);
              };
              const isInCart = validateProductInCart(plan.id);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                    plan.isFeatured
                      ? 'bg-white text-gray-800 scale-100 lg:scale-105'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  {/* --- SECCIÓN DE IMAGEN AÑADIDA --- */}
                  <div className='relative w-full h-48'>
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>

                  <div className='p-8 flex-grow flex flex-col'>
                    <h3 className='text-2xl font-bold mb-3'>{plan.name}</h3>
                    <span className='text-4xl font-bold'>{plan.price} USD</span>
                    <span className={`${'text-white'}`}>
                      {plan.description}
                    </span>

                    {/* Div para empujar el botón hacia abajo */}
                    {/* <ul className='space-y-4 flex-grow'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <LuCheckCircle
                        className={`flex-shrink-0 mt-1 ${
                          plan.isFeatured
                            ? 'text-purple-500'
                            : 'text-yellow-300'
                        }`}
                      />
                      <span
                        className={`${
                          plan.isFeatured ? 'text-gray-600' : 'text-gray-200'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul> */}

                    <div className='mt-8'>
                      <button
                        onClick={handleClick}
                        className={`w-full px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                          !isInCart
                            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                            : 'bg-purple-500/50 text-white hover:bg-purple-500'
                        }`}
                      >
                        {isHome
                          ? 'Get a quote'
                          : isInCart
                          ? 'Remove from Cart'
                          : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
