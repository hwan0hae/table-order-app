import {
  Box,
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
export default function Menu() {
  const { data, isLoading } = useQuery<Product[]>("getMenu", getMenu);
  return (
    <ScrollView>
      {isLoading ? null : (
        <MenuView>
          {data?.map((product) => (
            <MenuBox key={product.id}>
              <MenuImage
                resizeMode="contain"
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
