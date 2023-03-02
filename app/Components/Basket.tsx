import {
  Amount,
  BasketClose,
  BasketContainer,
  BasketFooter,
  BasketOrder,
  BasketTitle,
  BlackText,
  Row,
  ScrollView,
  Text,
} from "../../style/styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSetRecoilState } from "recoil";
import { basketVisibleAtom } from "../../utill/atom";

export default function Basket() {
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);

  return (
    <BasketContainer>
      <BasketTitle>
        <Row>
          <FontAwesome5 name="shopping-basket" size={24} color="black" />
          <BlackText>장바구니</BlackText>
        </Row>
      </BasketTitle>

      <ScrollView></ScrollView>
      <BasketFooter style={{ borderTopWidth: 1 }}>
        <Amount>
          <BlackText>합계: </BlackText>
        </Amount>
        <Row>
          <BasketClose onPress={() => setBasketVisible(false)}>
            <Text>닫기</Text>
          </BasketClose>
          <BasketOrder>
            <Text>주문하기</Text>
          </BasketOrder>
        </Row>
      </BasketFooter>
    </BasketContainer>
  );
}
