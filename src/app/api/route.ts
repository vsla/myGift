import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


interface StringMap { [key: string]: Product[]; }

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
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
  return Response.json(byCategoryProducts)
}



export async function PUT(request: Request) {
  const { name, id } = await request.json()


  const newProduct = await prisma.product.update({
    where: {
      id
    },
    data: {
      gifted: true,
      giftedBy: name || ''
    },
  });
  return Response.json(newProduct)
}
