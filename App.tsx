import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';
import { ToastProvider } from 'react-native-toast-notifications';
import AppNavigator from './app/Navigation/AppNavigator';
import theme from './style/theme';

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
          <ToastProvider
            offsetBottom={360}
            textStyle={{ fontSize: 60 }}
            successColor="black"
          >
            <PaperProvider>
              <AppNavigator />
            </PaperProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
