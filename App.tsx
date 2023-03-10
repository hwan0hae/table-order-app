import * as ScreenOrientation from "expo-screen-orientation";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./style/theme";
import { RecoilRoot } from "recoil";
import AppNavigator from "./app/Navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";

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
          <PaperProvider>
            <AppNavigator />
          </PaperProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
