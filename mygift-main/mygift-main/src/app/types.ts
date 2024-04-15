export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  gifted: boolean;
  giftedBy: string | null;
  category: string;
  price: number;
  productLink: string
}

export type ProductModalData = {
  imgUrl: string;
  id: number | null;
  productName: string;
  price: number;
  productLink: string
}