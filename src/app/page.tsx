import React from 'react';

import { PrismaClient } from '@prisma/client';
import { GiftList } from './components/GiftList';

export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  gifted: boolean;
  giftedBy?: string | null;
}

interface HomeProps {
  products: Product[];
}

const prisma = new PrismaClient();


const Home: React.FC<HomeProps> = async () => {
  const products = await prisma.product.findMany();



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Presentes de casa nova </h1>
      <h1 className="text-lg font-semibold mb-4">Lista de sugestões de presentes</h1>
      <h1 className="text-sm font-semibold mb-4">Caso esteja querendo dar um presente, só clicar em presentear! <br></br></h1>
      <GiftList products={products} />

    </div>
  );
};


export default Home;
