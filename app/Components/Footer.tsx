import { FooterBox, FooterView, Row, Text } from "../../style/styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSetRecoilState } from "recoil";
import { basketVisibleAtom, orderListVisibleAtom } from "../../utill/atom";
export default function Footer() {
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const setOrderListVisible = useSetRecoilState<boolean>(orderListVisibleAtom);
  const basketVisibleToggle = () => {
    setBasketVisible((prev) => !prev);
  };

  return (
    <FooterView>
      <Row>
        <FooterBox onPress={basketVisibleToggle}>
          <FontAwesome5 name="shopping-basket" size={24} color="white" />
          <Text>장바구니</Text>
        </FooterBox>
        <FooterBox onPress={() => setOrderListVisible(true)}>
          <FontAwesome5 name="clipboard-list" size={24} color="white" />
          <Text>주문내역</Text>
        </FooterBox>
      </Row>
    </FooterView>
  );
}
