import { IBasketData } from './data';

/** 메뉴 리스트 */
export interface IProductData {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface IAppSignInData {
  email: string;
  password: string;
  tableNo?: number;
}

export interface IOrderData {
  tableNo: number;
  order: IBasketData[];
}
