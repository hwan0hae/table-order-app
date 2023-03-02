import { FooterBox, FooterView, Row, Text } from "../../style/styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useSetRecoilState } from "recoil";
import { basketVisibleAtom } from "../../utill/atom";
export default function Footer() {
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const basketVisibleToggle = () => {
    setBasketVisible((prv) => !prv);
  };

  return (
    <FooterView>
      <Row>
        <FooterBox onPress={basketVisibleToggle}>
          <FontAwesome5 name="shopping-basket" size={24} color="white" />
          <Text>장바구니</Text>
        </FooterBox>
      </Row>
    </FooterView>
  );
}
