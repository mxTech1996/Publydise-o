'use client';
import { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/button';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import ContactSection from '@/components/organisms/Contact';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!name || !email || !message) {
      return alert('Todos los campos son requeridos');
    }

    if (!regExpEmail.test(email)) {
      return alert('No es un email válido');
    }

    const emailToSend = `mailto:info@golarzep.com?subject=Contacto desde web | ${name}&body=${message}`;

    window.open(emailToSend, '_blank');
  };
  return (
    <main>
      <Navbar withAll={false} textBlack={true} />
      <ContactSection />

      <Footer />
    </main>
  );
}
