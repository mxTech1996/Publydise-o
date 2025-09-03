/** @type {import('tailwindcss').Config} */
const primary = '#2792f0' // Blue


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        hero: 'calc(100vh - 70px)',
      },
      colors: {
        primary,
      },
      textColor: {
        primary: '#000000', // Negro (para una alta legibilidad) 
        third: primary,
      },
      backgroundColor: {
        primary: '#FFFFFF', // Blanco (símbolo de pureza y claridad)
        secondary: '#3d3d3d', // Negro claro
        third: primary,
      },
      backgroundImage: {
        hero: 'url("/images/social-1.jpg")',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        urbanist: ['var(--font-urbanist)'],
      },
    },
  },
};
