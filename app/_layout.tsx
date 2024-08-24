import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/shared/hooks/useColorScheme';
import { useAppCustomFonts } from '@/shared/hooks/useFonts';
import { Colors } from '../shared/constants/Colors';

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
    <ThemeProvider value={{
      dark: true,
      colors: {
        ...DarkTheme.colors,
        background: Colors.dark.background,
      },
    }}>
      <Stack>
        <Stack.Screen name="index" options={{
          title: 'Contract',
          headerTitle: 'Contract',
          headerStyle: {
            backgroundColor: '#2c2c2c',
          },
          headerShown: false
        }} />
      </Stack>
    </ThemeProvider>
  );
}
