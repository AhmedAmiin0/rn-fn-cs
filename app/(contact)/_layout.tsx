import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ContactScreen() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}