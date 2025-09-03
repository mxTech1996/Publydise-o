'use client';
import { fontLato, fontUrbanist } from '../fonts';
import Provider from '@/store/provider';
import { pageName } from '@/data';

import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <title>{pageName}</title>
      </head>
      <body
        className={`${fontUrbanist.variable} ${fontLato.variable} text-primary font-lato`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
