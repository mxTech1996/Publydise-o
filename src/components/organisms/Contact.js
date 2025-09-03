// En tu archivo: /components/ContactSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import { dataSite, email } from '@/data';

const ContactSection = () => {
  // --- Estados para el formulario (sin cambios) ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Lógica de Validación (sin cambios) ---
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- FUNCIÓN handleSubmit ACTUALIZADA CON mailto ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 1. Define tu correo electrónico de destino
      const recipientEmail = 'hola@publydiseno.com';

      // 2. Crea el asunto y el cuerpo del correo con los datos del formulario
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
        New message received from your website contact form.
        
        --- SENDER DETAILS ---
        Name: ${formData.name}
        Email: ${formData.email}
        
        --- MESSAGE ---
        ${formData.message}
      `;

      // 3. Codifica el asunto y el cuerpo para que funcionen correctamente en una URL
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // 4. Construye y activa el enlace mailto
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoUrl;

      // 5. Muestra el mensaje de éxito en la página
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='relative py-20 md:py-28 bg-white overflow-hidden'>
      {/* Divisor ondulado superior */}
      <div className='absolute top-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H1440V100C1181.33 -18.6667 809.5 26.6667 550.5 72C291.5 117.333 131.333 58.6667 0 0Z'
            fill='#F3F4F6'
          />
        </svg>
      </div>

      <div className='container mx-auto px-4 relative z-10 mt-12 md:mt-0'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2'>CONTACT</p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>
            Get In Touch
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Columna de Información (Izquierda) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='space-y-8'
          >
            <h3 className='text-2xl font-bold text-gray-800'>
              Contact Information
            </h3>
            <div className='space-y-6 text-gray-700'>
              <div className='flex items-start gap-4'>
                <LuMapPin
                  size={24}
                  className='text-pink-600 mt-1 flex-shrink-0'
                />
                <div>
                  <h4 className='font-semibold'>Our Address</h4>
                  <p>{dataSite.address}</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <LuPhone
                  size={24}
                  className='text-pink-600 mt-1 flex-shrink-0'
                />
                <div>
                  <h4 className='font-semibold'>Phone Number</h4>
                  <a
                    href={`tel:${dataSite.telephone}`}
                    className='hover:text-pink-600'
                  >
                    {dataSite.telephone}
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <LuMail
                  size={24}
                  className='text-pink-600 mt-1 flex-shrink-0'
                />
                <div>
                  <h4 className='font-semibold'>Email Address</h4>
                  <a href={`mailto:${email}`} className='hover:text-pink-600'>
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna de Formulario (Derecha) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='bg-gray-50 p-8 rounded-lg border border-gray-200'
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-center h-full flex flex-col justify-center min-h-[300px]'
                >
                  <h3 className='text-2xl font-bold text-purple-700 mb-4'>
                    Thank you!
                  </h3>
                  <p className='text-gray-600'>
                    Your message has been sent. We will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* ... los inputs del formulario se mantienen igual ... */}
                  <div className='space-y-6'>
                    <div>
                      <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-pink-500'
                        }`}
                      />
                      {errors.name && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-pink-500'
                        }`}
                      />
                      {errors.email && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <textarea
                        name='message'
                        placeholder='Your Message'
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-pink-500'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105'
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      {/* Divisor ondulado inferior */}
      <div className='absolute bottom-0 left-0 w-full transform -scale-y-100'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 100H1440V0C1181.33 118.667 809.5 73.3333 550.5 28C291.5 -17.3333 131.333 41.3333 0 100Z'
            fill='#262B57'
          />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
