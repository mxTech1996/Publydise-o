'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

import Image from 'next/image';
import Button from '@/components/atoms/button';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Container from '@/components/atoms/Container';
import { CartContext, Button as VButton } from 'ui-old-version';
import { useContext } from 'react';
import { productsData } from '@/data';

export default function Product({ params }) {
  const id = params.id;
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const isAdded = validateProductInCart(id);

  const product = productsData.find((item) => +item.id === +id);

  const router = useRouter();
  return (
    <div>
      <Navbar />
      <Container className='container w-full mx-auto mt-24'>
        <VButton
          value='back'
          onClick={() => {
            router.push('/#shop');
          }}
          icon={<FaChevronLeft />}
          iconPosition='start'
          className='flex items-center mb-5 w-28'
        >
          Back
        </VButton>
      </Container>
      <main className='min-h-screen h-full w-full mt-20 mb-20 px-20'>
        {product && (
          <>
            <div className='h-full w-full grid grid-cols-2 gap-20'>
              <div className='flex flex-col'>
                <h2 className='font-bold text-3xl mb-2'>{product.name}</h2>
                <p className='text-lg text-justify font-bold mb-2'>
                  {product.price} USD
                </p>
                <p className='text-justify mb-5'>{product.description}</p>

                <div className='w-full flex gap-10'>
                  <div className='w-full flex flex-col items-center gap-8'>
                    <div className='flex flex-col gap-5 w-full'>
                      <div className='flex gap-5 mb-3'>
                        <div>
                          <Button
                            onClick={() => handleAddOrRemoveProduct(product.id)}
                          >
                            {isAdded ? 'Remove from cart' : `Add to cart`}
                          </Button>
                        </div>
                      </div>

                      <h2 className='font-bold text-2xl'>Course content:</h2>

                      {/* {product?.features?.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-xl">•</span>
                      <p>{feature}</p>
                    </div>
                  ))} */}
                      {product.content?.map((feature, index) => (
                        <div key={index} className='flex gap-3'>
                          <span className='text-blue-500'>{index + 1})</span>
                          <p className='text-justify'>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width='400'
                height='400'
                className='rounded-md w-96 object-center object-cover'
              />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
