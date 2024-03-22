export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  gifted: boolean;
  giftedBy: string | null;
}