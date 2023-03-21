import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import {
  MenuBox,
  MenuContent,
  MenuImage,
  MenuView,
  ScrollView,
  Text,
} from '../../style/styled';
import { getMenu } from '../../utill/api';
import { IProductData } from '../../types/api';
import { basketAtom, basketVisibleAtom } from '../../utill/atom';

export default function Menu() {
  const { data, isLoading } = useQuery<IProductData[]>('getMenu', getMenu);
  const setBasket = useSetRecoilState<IProductData[]>(basketAtom);
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const onPush = (product: IProductData) => {
    setBasketVisible(true);
    setBasket((prv) => [...prv, product]);
  };
  return (
    <ScrollView>
      {isLoading ? null : (
        <MenuView>
          {data?.map((product) => (
            <MenuBox key={product.id} onPress={() => onPush(product)}>
              <MenuImage
                source={{
                  uri: product.imageUrl,
                }}
              />

              <MenuContent>
                <Text>{product.name}</Text>
                <Text>{product.price}원</Text>
              </MenuContent>
            </MenuBox>
          ))}
        </MenuView>
      )}
    </ScrollView>
  );
}
