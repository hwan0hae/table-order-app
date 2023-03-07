import { Container, MenuContainer } from "../../style/styled";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import SideBar from "../Components/SideBar";
import { useRecoilValue } from "recoil";
import { basketVisibleAtom, orderListVisibleAtom } from "../../utill/atom";
import Basket from "../Components/Basket";
import OrderList from "../Components/OrderList";

export default function Home() {
  const basketVisible = useRecoilValue<boolean>(basketVisibleAtom);
  const orderListVisible = useRecoilValue<boolean>(orderListVisibleAtom);
  return (
    <>
      <Container>
        <SideBar />
        <MenuContainer>
          <Menu />
          <Footer />
        </MenuContainer>
        {basketVisible && <Basket />}
      </Container>
      {orderListVisible && <OrderList />}
    </>
  );
}
