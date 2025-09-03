'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CartContext } from 'ui-old-version';

const NavBar = ({ withCart = false, withAll = true }) => {
  const { products } = useContext(CartContext);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Our Work', href: '#our-work' },
  ];
  const companyName = 'Integrales Técnicos Ortiz';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='sticky top-0 bg-white shadow-sm z-50'
    >
      <div className='container mx-auto px-4 h-20 flex justify-between items-center'>
        <div className='text-xl font-bold text-gray-800'>{companyName}</div>
        {withAll && (
          <nav className='hidden lg:flex gap-10 text-sm font-medium text-gray-600'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='hover:text-purple-600 transition-colors'
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
            className='hidden md:block px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'
          >
            Get a Quote
          </a>
        )}
      </div>
    </motion.header>
  );
};

export default NavBar;

const ShopButtonWithCounter = ({ itemCount }) => {
  return (
    <a
      href='/my-cart'
      className='hidden md:block px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105'
    >
      <FaShoppingBag className='inline-block mr-2' />
      {itemCount > 0 && (
        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1'>
          {itemCount}
        </span>
      )}
    </a>
  );
};
