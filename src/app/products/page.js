'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import PricingSection from '@/components/organisms/Products';
import { useRouter } from 'next/navigation';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <Navbar withCart={true} withAll={false} textBlack={false} />
      <PricingSection isHome={false} />
      <Footer />
    </main>
  );
}
