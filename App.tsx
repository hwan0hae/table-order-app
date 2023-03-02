import * as ScreenOrientation from "expo-screen-orientation";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./app/Screens/Home";
import { theme } from "./style/theme";
import { RecoilRoot } from "recoil";

export default function App() {
  const queryClient = new QueryClient();

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  changeScreenOrientation();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
