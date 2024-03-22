import React from 'react';

import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  gifted: boolean;
  giftedBy?: string;
}

interface HomeProps {
  products: Product[];
}

const prisma = new PrismaClient();


const Home: React.FC<HomeProps> = async () => {
  const products = await prisma.product.findMany();

  // const handleGift = async (productId: number) => {
  //   const name = prompt('Please enter your name:');
  //   if (name) {
  //     await fetch(`/api/products/${productId}/gift`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ gifted: true, giftedBy: name }),
  //     });
  //     router.refresh(); // Reload the page to reflect the changes
  //   }
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Presentes de casa nova </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map(product => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-32 mb-2">
              <Image
                src={'/images/' + product.imgUrl}
                alt={product.name} layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>

            {product.gifted ? (
              <p className="text-green-500">Gifted by: {product.giftedBy}</p>
            ) : (
              <div className='flex justify-center'>
                <button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Presentear
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Home;
