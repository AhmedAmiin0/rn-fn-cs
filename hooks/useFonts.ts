import { useFonts as useSpaceGrotesk, SpaceGrotesk_500Medium } from '@expo-google-fonts/space-grotesk';
import { useFonts as useSairaFont, Saira_400Regular, Saira_600SemiBold, Saira_700Bold } from '@expo-google-fonts/saira';
import { useFonts } from 'expo-font';

export const useAppCustomFonts = () => {
  const [spaceGrosteskLoaded, spaceGrosteskError] = useSpaceGrotesk({
    SpaceGrotesk_500Medium
  })
  const [sairaFontLoaded, sairaFontError] = useSairaFont({
    Saira_400Regular,
    Saira_600SemiBold,
    Saira_700Bold,
  })
  const [customLoaded, customError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const loaded = [spaceGrosteskLoaded, sairaFontLoaded, customLoaded].every(Boolean)
  const error = [spaceGrosteskError, sairaFontError, customError].find(Boolean)

  return [loaded, error]
}