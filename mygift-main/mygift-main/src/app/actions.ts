"use server";
import prisma from "../db";
import { Product } from "types";
import { upload } from "@vercel/blob/client";

type addBuyerProps = {
  name?: string;
  id: number;
};

interface StringMap {
  [key: string]: Product[];
}

export async function createImageUrl(file: File, productName: string) {
  const productImageName = productName.split(" ").join("-");
  const newBlob = await upload(productImageName, file, {
    access: "public",
    handleUploadUrl: "/api/product-image",
  });

  return newBlob;
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
