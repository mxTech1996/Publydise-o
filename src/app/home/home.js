'use client';
import Image from 'next/image';
import { find, map } from 'lodash';
import { useRouter } from 'next/navigation';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

import { productsData, references, additionalProducts } from '../../data';
import Button from '@/components/atoms/button';
import { References } from 'ui-old-version';
import AnimatedCategories from '@/components/organisms/About';
import MissionVisionSection from '@/components/organisms/OurWork';
import HeroSection from '@/components/organisms/Hero';
import ServicesSection from '@/components/organisms/Services';
import AboutUsSection from '@/components/organisms/About';
import ProjectsSection from '@/components/organisms/OurWork';
import PricingSection from '@/components/organisms/Products';
import HowWeWorkSection from '@/components/organisms/HowWeWork';
import TestimonialsSection from '@/components/organisms/Testimonial';
import FutureProofSection from '@/components/organisms/Team';
import ContactSection from '@/components/organisms/Contact';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ProjectsSection />
      <PricingSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <FutureProofSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
