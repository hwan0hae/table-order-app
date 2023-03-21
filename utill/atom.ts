import { atom, selector } from 'recoil';
import _ from 'lodash';
import { v1 } from 'uuid';
import { IProductData } from '../types/api';
import { IBasketData } from '../types/data';

export const basketVisibleAtom = atom<boolean>({
  key: `basketVisible/${v1()}`,
  default: false,
});

export const basketAtom = atom<IProductData[]>({
  key: `basket/${v1()}`,
  default: [],
});

export const basketSelector = selector<IBasketData[]>({
  key: `basketSelector/${v1()}`,
  get: ({ get }) => {
    const basket = get(basketAtom);
    const count = basket.reduce((acc, cur) => {
      acc.set(cur.id, (acc.get(cur.id) || 0) + 1);
      return acc;
    }, new Map());

    const menu = _.uniq(basket);

    const data = menu.map((product) => {
      return { ...product, count: count.get(product.id) };
    });
    return data;
  },
  set: ({ set }, newValue) => {
    set(basketAtom, newValue);
  },
});

export const basketAmountSelector = selector<number>({
  key: `basketAmountSelector/${v1()}`,
  get: ({ get }) => {
    const basket = get(basketAtom);
    const amount = basket.reduce((prev, cur) => {
      return prev + Number(cur.price);
    }, 0);
    return amount;
  },
});

export const orderListVisibleAtom = atom<boolean>({
  key: `orderListVisible/${v1()}`,
  default: false,
});
