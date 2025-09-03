// src/app/[locale]/page.js
// SIN "use client" aquí

import { headers } from 'next/headers';
import Home from './home/home';
import LoginPage from './access/access';

export default function RootPage() {
  const headersList = headers();
  const host = headersList.get('host');
  const isAccessSite = host && host.startsWith('access.');

  if (isAccessSite) {
    return <LoginPage />;
  }

  return <Home />;
}
