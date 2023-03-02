import { Container, MenuContainer } from "../../style/styled";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import SideBar from "../Navigation/SideBar";
import { useRecoilValue } from "recoil";
import { basketVisibleAtom } from "../../utill/atom";
import Basket from "../Components/Basket";

export default function Home() {
  const basketVisible = useRecoilValue<boolean>(basketVisibleAtom);
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
    </>
  );
}
