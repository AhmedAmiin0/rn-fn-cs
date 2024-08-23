import { useFonts as useSpaceGrotesk, SpaceGrotesk_500Medium } from '@expo-google-fonts/space-grotesk';
import { useFonts as useSairaFont, Saira_400Regular, Saira_600SemiBold, Saira_700Bold } from '@expo-google-fonts/saira';


export const useAppCustomFonts = () => {
  const [spaceGrosteskLoaded, spaceGrosteskError] = useSpaceGrotesk({
    SpaceGrotesk_500Medium
  })
  const [sairaFontLoaded, sairaFontError] = useSairaFont({

  })


  const loaded = [spaceGrosteskLoaded, sairaFontLoaded].every(Boolean)
  const error = [spaceGrosteskError, sairaFontError].find(Boolean)

  return [loaded, error]
}