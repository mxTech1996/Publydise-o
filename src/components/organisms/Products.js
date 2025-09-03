// En tu archivo: /components/ProductsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';

// --- DATA: La información de productos que proporcionaste ---
const productsData = dataSite.products;

const ProductsSection = ({ isHome = true }) => {
  const navigate = useRouter();
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Variantes para animar el contenido de la tarjeta al pasar el mouse
  const contentVariants = {
    rest: { y: 0 },
    hover: { y: -10 },
  };

  const descriptionVariants = {
    rest: { opacity: 0, y: 10, height: 0 },
    hover: { opacity: 1, y: 0, height: 'auto', transition: { delay: 0.1 } },
  };

  return (
    <section className='py-20 md:py-28 bg-[#262B57]'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Our Products
          </h2>
          <p className='mt-4 text-lg text-blue-200/80'>
            Digital solutions to grow your business.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {productsData
            .filter((item) => parseFloat(item.price) > 60)
            .map((product) => {
              const isInCart = validateProductInCart(product.id);
              const handleButtonClick = () => {
                if (isHome) {
                  navigate.push('/contact');
                  return;
                }
                handleAddOrRemoveProduct(product.id);
              };

              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  initial='rest'
                  whileHover='hover'
                  animate='rest'
                  className='group relative h-96 rounded-xl overflow-hidden shadow-lg'
                >
                  {/* Imagen de Fondo */}
                  <div className='absolute inset-0'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout='fill'
                      objectFit='cover'
                      className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                  </div>
                  {/* Overlay oscuro para legibilidad */}
                  <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-400' />

                  {/* Contenido de la tarjeta */}
                  <div className='relative h-full flex flex-col p-6 text-white'>
                    <div className='flex justify-between items-center'>
                      <span className='font-bold text-xl text-[#ced1ec]'>
                        ${product.price} USD
                      </span>
                    </div>

                    <div className='flex-grow flex flex-col justify-end'>
                      <motion.div
                        variants={contentVariants}
                        className='transition-transform duration-400 ease-out'
                      >
                        <h3 className='text-2xl font-bold leading-tight mb-2'>
                          {product.name}
                        </h3>
                        {/* Descripción que aparece al pasar el mouse */}
                        <motion.p
                          variants={descriptionVariants}
                          className='text-sm text-blue-100/90 line-clamp-2 overflow-hidden'
                        >
                          {product.description}
                        </motion.p>
                      </motion.div>
                    </div>

                    <div className='mt-4'>
                      <button
                        onClick={handleButtonClick}
                        className={`w-full py-3 ${
                          isInCart ? 'bg-red-600' : 'bg-pink-600'
                        } text-white font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300 transform group-hover:scale-105`}
                      >
                        {isHome
                          ? 'Get a quote'
                          : isInCart
                          ? 'Remove from cart'
                          : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
      {!isHome && (
        <div className='container mx-auto px-4 mt-20'>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white'>
              Our Additionals
            </h2>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {productsData
              .filter((item) => parseFloat(item.price) < 60)
              .map((product) => {
                const isInCart = validateProductInCart(product.id);
                const handleButtonClick = () => {
                  if (isHome) {
                    navigate.push('/contact');
                    return;
                  }
                  handleAddOrRemoveProduct(product.id);
                };

                return (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    initial='rest'
                    whileHover='hover'
                    animate='rest'
                    className='group relative h-96 rounded-xl overflow-hidden shadow-lg'
                  >
                    {/* Imagen de Fondo */}
                    <div className='absolute inset-0'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout='fill'
                        objectFit='cover'
                        className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                      />
                    </div>
                    {/* Overlay oscuro para legibilidad */}
                    <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-400' />

                    {/* Contenido de la tarjeta */}
                    <div className='relative h-full flex flex-col p-6 text-white'>
                      <div className='flex justify-between items-center'>
                        <span className='font-bold text-xl text-[#ced1ec]'>
                          ${product.price} USD
                        </span>
                      </div>

                      <div className='flex-grow flex flex-col justify-end'>
                        <motion.div
                          variants={contentVariants}
                          className='transition-transform duration-400 ease-out'
                        >
                          <h3 className='text-2xl font-bold leading-tight mb-2'>
                            {product.name}
                          </h3>
                          {/* Descripción que aparece al pasar el mouse */}
                          <motion.p
                            variants={descriptionVariants}
                            className='text-sm text-blue-100/90 line-clamp-2 overflow-hidden'
                          >
                            {product.description}
                          </motion.p>
                        </motion.div>
                      </div>

                      <div className='mt-4'>
                        <button
                          onClick={handleButtonClick}
                          className={`w-full py-3 ${
                            isInCart ? 'bg-red-600' : 'bg-pink-600'
                          } text-white font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300 transform group-hover:scale-105`}
                        >
                          {isHome
                            ? 'Get a quote'
                            : isInCart
                            ? 'Remove from cart'
                            : 'Add to cart'}
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

export default ProductsSection;
