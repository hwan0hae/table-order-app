import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  flex-direction: row;
`;

export const Title = styled.Text`
  color: white;
  font-size: 60px;
`;
export const SubTitle = styled.Text`
  color: white;
  font-size: 48px;
`;
export const Box = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.boxColor};
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  padding: 5px 48px;
`;
export const Text = styled.Text`
  color: white;
  font-size: 32px;
`;

export const BlackText = styled(Text)`
  color: black;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScrollView = styled.View.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
  flex: 1;
`;

/** sideBar */
export const SideBarContainer = styled.View`
  width: 200px;
  background-color: ${({ theme }) => theme.containerColor};
  padding: 16px 8px;
  gap: 16px;
`;

/** footer */
export const FooterView = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const FooterBox = styled(Box)`
  border: 3px solid white;
  flex-direction: row;
`;

/** menu  */
export const MenuContainer = styled.View`
  flex: 5;
`;
export const MenuView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;
export const MenuBox = styled.TouchableOpacity`
  width: 240px;
  background-color: ${({ theme }) => theme.containerColor};
`;
export const MenuImage = styled.Image`
  width: 100%;
  height: 240px;
`;
export const MenuContent = styled.View`
  padding: 16px 0;
  align-items: center;
  justify-content: center;
`;
/** basket */
export const BasketContainer = styled.View`
  flex: 2;
  background-color: white;
`;

export const BasketTitle = styled.View`
  height: 60px;
`;

export const BasketFooter = styled.View`
  bottom: 0;
`;
export const Amount = styled.View`
  padding: 16px;
`;

export const BasketClose = styled.TouchableOpacity`
  flex: 1;
  padding: 16px 0;
  align-items: center;
  background-color: ${({ theme }) => theme.containerColor};
`;

export const BasketOrder = styled.TouchableOpacity`
  flex: 2;
  padding: 16px 0;
  align-items: center;
  background-color: ${({ theme }) => theme.red};
`;
