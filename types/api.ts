import { BasketData } from "./data";

/**메뉴 리스트*/
export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

export type SignInUser = {
  email: string;
  password: string;
  tableNo?: number;
};

export type OrderData = {
  tableNo: number;
  order: BasketData[];
};
