'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CartContext } from 'ui-old-version';

const NavBar = ({ withCart = false, withAll = true, textBlack = false }) => {
  const { products } = useContext(CartContext);
  const navLinks = [
    { name: 'Strategy', href: '#strategy' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
  ];
  const companyName = 'Publydiseño Makky';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='absolute top-0 left-0 right-0 z-20'
    >
      <div className='container mx-auto px-4'>
        <div className='h-24 flex justify-between items-center'>
          <div
            className={`text-2xl font-bold ${
              textBlack ? 'text-black' : 'text-white'
            }`}
          >
            {companyName}
          </div>
          {withAll && (
            <nav className='hidden lg:flex gap-10 text-sm font-medium text-gray-200'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='hover:text-white transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
          {withCart ? (
            <ShopButtonWithCounter itemCount={products.length} />
          ) : (
            <a
              href='/contact'
              className='hidden md:block px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors'
            >
              Contact Us
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;

const ShopButtonWithCounter = ({ itemCount }) => {
  return (
    <a
      href='/my-cart'
      className='hidden md:block px-6 py-2 bg-[#262B57] text-gray-900 font-semibold rounded-full hover:bg-[#3b3f6b] transition-all duration-300 transform hover:scale-105'
    >
      <FaShoppingBag className='inline-block mr-2 text-white ' />
      {itemCount > 0 && (
        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1'>
          {itemCount}
        </span>
      )}
    </a>
  );
};
