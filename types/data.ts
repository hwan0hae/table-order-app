export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  Home: undefined;
};

/** 장바구니 리스트 */
export interface IBasketData {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  count: number;
}
