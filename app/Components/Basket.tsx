import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native';
import { useMutation } from 'react-query';
import { useToast } from 'react-native-toast-notifications';
import {
  basketAmountSelector,
  basketAtom,
  basketSelector,
  basketVisibleAtom,
} from '../../utill/atom';
import { IOrderData, IProductData } from '../../types/api';
import { IBasketData } from '../../types/data';
import { Order } from '../../utill/api';
import {
  Amount,
  BasketBox,
  BasketClose,
  BasketContainer,
  BasketContent,
  BasketCount,
  BasketDelete,
  BasketFooter,
  BasketImage,
  BasketOrder,
  BasketTitle,
  BlackText,
  Row,
  ScrollView,
  Text,
} from '../../style/styled';

export default function Basket() {
  const toast = useToast();

  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const [basket, setBasket] = useRecoilState<IProductData[]>(basketAtom);
  const list = useRecoilValue<IBasketData[]>(basketSelector);
  const amount = useRecoilValue(basketAmountSelector);
  const orderMutation = useMutation(
    (orderData: IOrderData) => Order(orderData),
    {
      onError: (data: any) => {
        console.log(data.message);
      },
      onSuccess: (data) => {
        setBasket([]);
        setBasketVisible(false);
        toast.show(data.message, { duration: 2000, type: 'success' });
      },
    }
  );

  const onDecrease = (id: number) => {
    const copy = [...basket];
    const data = copy.reverse().findIndex((product) => product.id === id);
    copy.splice(data, 1);
    setBasket(copy.reverse());
  };
  const onIncrease = (id: number) => {
    const data = basket.find((product) => product.id === id);
    const newData = [...basket, data] as IProductData[];
    setBasket(newData);
  };
  const onDelete = (id: number) => {
    const data = basket.filter((product) => product.id !== id);
    setBasket(data);
  };

  const orderData: IOrderData = {
    tableNo: 123,
    order: list,
  };

  return (
    <BasketContainer>
      <BasketTitle>
        <Row>
          <FontAwesome5 name="shopping-basket" size={24} color="black" />
          <BlackText>장바구니</BlackText>
        </Row>
      </BasketTitle>

      <ScrollView>
        {list.map((product) => (
          <BasketBox key={product.id}>
            <BasketImage
              source={{
                uri: product.imageUrl,
              }}
            />
            <BasketContent>
              <BlackText>{product.name}</BlackText>
              <BlackText>{Number(product.price) * product.count}원</BlackText>
            </BasketContent>
            <BasketCount>
              <Row>
                <TouchableOpacity onPress={() => onDecrease(product.id)}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <BlackText>{product.count}개</BlackText>
                <TouchableOpacity onPress={() => onIncrease(product.id)}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              </Row>
              <BasketDelete onPress={() => onDelete(product.id)}>
                <Text>삭제</Text>
              </BasketDelete>
            </BasketCount>
          </BasketBox>
        ))}
      </ScrollView>

      <BasketFooter style={{ borderTopWidth: 1 }}>
        <Amount>
          <BlackText>합계: {amount}원</BlackText>
        </Amount>
        <Row>
          <BasketClose onPress={() => setBasketVisible(false)}>
            <Text>닫기</Text>
          </BasketClose>
          <BasketOrder onPress={() => orderMutation.mutate(orderData)}>
            <Text>주문하기</Text>
          </BasketOrder>
        </Row>
      </BasketFooter>
    </BasketContainer>
  );
}
