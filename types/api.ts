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
