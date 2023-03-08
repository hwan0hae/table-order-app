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
} from "../../style/styled";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  basketAmountSelector,
  basketAtom,
  basketSelector,
  basketVisibleAtom,
} from "../../utill/atom";
import { OrderData, Product } from "../../types/api";
import _ from "lodash";
import { TouchableOpacity } from "react-native";
import { BasketData } from "../../types/data";
import { useMutation } from "react-query";
import { Order } from "../../utill/api";

export default function Basket() {
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const [basket, setBasket] = useRecoilState<Product[]>(basketAtom);
  const list = useRecoilValue<BasketData[]>(basketSelector);
  const amount = useRecoilValue(basketAmountSelector);
  const orderMutation = useMutation(
    (orderData: OrderData) => Order(orderData),
    {
      onError: (data: any) => {},
      onSuccess: (data) => {},
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
    const newData = [...basket, data] as Product[];
    setBasket(newData);
  };
  const onDelete = (id: number) => {
    const data = basket.filter((product) => product.id !== id);
    setBasket(data);
  };

  const orderData: OrderData = {
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
