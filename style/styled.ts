import styled from 'styled-components/native';

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
  font-size: 24px;
`;

export const BlackText = styled(Text)`
  color: black;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 8px;
  flex: 1;
  gap: 8px;
`;
export const VerticalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;

/** sideBar */
export const SideBarContainer = styled.View`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.containerColor};
  padding: 16px 8px;
  gap: 16px;
`;

/** footer */
export const FooterView = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const FooterBox = styled(Box)`
  border: 1px solid white;
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
export const MenuImage = styled.Image.attrs({ resizeMode: 'contain' })`
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
export const BasketBox = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  border: 1px solid black;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
`;

export const BasketImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 80px;
  height: 80px;
`;
export const BasketContent = styled.View`
  justify-content: center;
`;
export const BasketCount = styled.View`
  margin-left: auto;
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
export const BasketDelete = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.red};
`;

/** orderList */

export const OrderListContainer = styled.View`
  padding: 15px;
  flex: 1;

  background-color: ${(props) => props.theme.bgColor};
`;

export const ScrollViewContainer = styled.View`
  flex: 1;
  background-color: white;
  border-radius: 15px;
  margin: 5px;
  padding: 15px;
`;
export const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  background-color: ${({ theme }) => theme.containerColor};
  border-radius: 20px;
  padding: 5px;
`;
