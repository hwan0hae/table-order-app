import { AxiosError } from 'axios';
import { IBasketData } from './data';

/** mutation response */
export interface IMutatedValue {
  message: string;
  data?: any;
}
interface IResponsesError {
  message?: string;
}
export type IMutatedError = AxiosError<IResponsesError>;

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
  tableNo: number;
}
export interface IUserData {
  tableNo: number;
  accessToken: string;
  refreshToken: string;
}

export interface IOrderData {
  tableNo: number;
  order: IBasketData[];
}
