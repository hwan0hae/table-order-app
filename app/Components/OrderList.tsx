import { useRecoilState } from "recoil";
import {
  BlackText,
  CloseBtn,
  OrderListContainer,
  Row,
  ScrollView,
  ScrollViewContainer,
  Title,
} from "../../style/styled";
import { orderListVisibleAtom } from "../../utill/atom";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Modal } from "react-native";

export default function OrderList() {
  const [orderListVisible, setOrderListVisible] =
    useRecoilState<boolean>(orderListVisibleAtom);
  return (
    <Modal
      visible={orderListVisible}
      transparent={false}
      animationType={"slide"}
      presentationStyle={"formSheet"}
      onRequestClose={() => setOrderListVisible(false)}
    >
      <OrderListContainer>
        <Row>
          <FontAwesome5 name="clipboard-list" size={60} color="white" />
          <Title>주문 내역</Title>
        </Row>
        <ScrollViewContainer>
          <ScrollView>
            <BlackText>ddas</BlackText>
          </ScrollView>
        </ScrollViewContainer>
      </OrderListContainer>

      <CloseBtn onPress={() => setOrderListVisible(false)}>
        <Feather name="x" size={65} color="white" style={{}} />
      </CloseBtn>
    </Modal>
  );
}
