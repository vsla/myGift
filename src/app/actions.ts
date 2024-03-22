'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type addBuyerProps = {
  name?: string;
  id: number
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