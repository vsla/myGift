"use server";
import prisma from "../db";
import { Product } from "types";

type addBuyerProps = {
  name?: string;
  id: number;
};

type CreateProductProps = {
  category: string,
  description: string,
  name: string,
  price: number,
  productImg: string,
  productUrl: string,
}

interface StringMap {
  [key: string]: Product[];
}

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return products;
}

export async function getProductsByCategory() {
  const products = await prisma.product.findMany({
    orderBy: [
      {
        price: "asc",
      },
    ],
  });

  const byCategoryProducts: StringMap = {};

  products.map((product) => {
    const productCategory = product.category;
    if (!byCategoryProducts[productCategory]) {
      byCategoryProducts[productCategory] = [product];
    } else {
      byCategoryProducts[productCategory] = [
        ...byCategoryProducts[productCategory],
        product,
      ];
    }
  });

  return byCategoryProducts;
}

export async function addBuyer({ name, id }: addBuyerProps) {
  const newProduct = await prisma.product.update({
    where: {
      id,
    },
    data: {
      gifted: true,
      giftedBy: name || "",
    },
  });
  return newProduct;
}

export async function createProduct({
  category, description, name, price, productUrl, productImg
}: CreateProductProps) {
  const products = await prisma.product.create({
    data: {
      category,
      description,
      imgUrl: productImg, name,
      price, productLink: productUrl
    }
  });

  return products;
}
