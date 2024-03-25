'use server'
import prisma from '../db';
import { Product } from './types';


type addBuyerProps = {
  name?: string;
  id: number
}


interface StringMap { [key: string]: Product[]; }

export async function getProducts() {
  const products = await prisma.product.findMany(
    {
      orderBy: [
        {
          price: 'desc',
        },

      ]
    }
  );

  const byCategoryProducts: StringMap = {}

  products.map((product) => {
    const productCategory = product.category
    if (!byCategoryProducts[productCategory]) {
      byCategoryProducts[productCategory] = [product]
    } else {
      byCategoryProducts[productCategory] = [...byCategoryProducts[productCategory], product]
    }
  })

  return byCategoryProducts
}

export async function addBuyer({ name, id }: addBuyerProps) {
  const newProduct = await prisma.product.update({
    where: {
      id
    },
    data: {
      gifted: true,
      giftedBy: name || ''
    },
  });
  return newProduct
}