'use client';
import { dataSite } from '@/data';
import { MainProvider } from 'ui-old-version';

const Provider = ({ children }) => {
  return (
    <MainProvider
      products={dataSite.products}
      locale={'en'}
      colorPrimary={'#2792f0'}
    >
      {children}
    </MainProvider>
  );
};

export default Provider;
