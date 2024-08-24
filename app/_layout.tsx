import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useAppCustomFonts } from '@/hooks/useFonts';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useAppCustomFonts()

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={ DarkTheme}>
      <Stack>
        <Stack.Screen name="(contact)"  options={{
          title: 'Contract',
          headerTitle: 'Contract',
          headerStyle: {
           backgroundColor:'#202020',
           
           
          },
        }}/>
      </Stack>
    </ThemeProvider>
  );
}
