import { useSetRecoilState } from "recoil";
import {
  MenuBox,
  MenuContent,
  MenuImage,
  MenuView,
  ScrollView,
  Text,
} from "../../style/styled";
import { useQuery } from "react-query";
import { getMenu } from "../../utill/api";
import { Product } from "../../types/api";
import { basketAtom, basketVisibleAtom } from "../../utill/atom";
export default function Menu() {
  const { data, isLoading } = useQuery<Product[]>("getMenu", getMenu);
  const setBasket = useSetRecoilState<Product[]>(basketAtom);
  const setBasketVisible = useSetRecoilState<boolean>(basketVisibleAtom);
  const onPush = (product: Product) => {
    setBasketVisible(true);
    setBasket((prv) => [...prv, product]);
  };
  return (
    <ScrollView>
      {isLoading ? null : (
        <MenuView>
          {data?.map((product) => (
            <MenuBox key={product.id} onPress={() => onPush(product)}>
              <MenuImage
                source={{
                  uri: product.imageUrl,
                }}
              />

              <MenuContent>
                <Text>{product.name}</Text>
                <Text>{product.price}원</Text>
              </MenuContent>
            </MenuBox>
          ))}
        </MenuView>
      )}
    </ScrollView>
  );
}
