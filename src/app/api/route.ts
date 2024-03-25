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
