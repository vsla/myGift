import React from 'react';

import { PrismaClient } from '@prisma/client';
import { GiftList } from './components/GiftList';
import { Product } from './types';


const prisma = new PrismaClient();

interface StringMap { [key: string]: Product[]; }


const Home = async () => {
  const products = await prisma.product.findMany(
    {
      orderBy: [
        {
          price: 'desc',
        },

      ]
    }
  );
  console.log(products)
  const byCategoryProducts: StringMap = {}

  products.map((product) => {
    const productCategory = product.category
    if (!byCategoryProducts[productCategory]) {
      byCategoryProducts[productCategory] = [product]
    } else {
      byCategoryProducts[productCategory] = [...byCategoryProducts[productCategory], product]
    }
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Presentes de casa nova </h1>
      <h1 className="text-lg font-semibold mb-4">Lista de sugestões de presentes</h1>
      <h1 className="text-sm font-semibold mb-4">Caso esteja querendo dar um presente, só clicar em presentear! <br></br></h1>
      <GiftList productsByCategory={byCategoryProducts} />

    </div>
  );
};


export default Home;
