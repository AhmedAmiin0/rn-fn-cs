import { Image, View } from "react-native";

export default function AnimatedSection() {
  return <View style={{ flexDirection: 'row', gap: 8, marginBottom: 24, height: 91, flex: 1 }}>
    <Image
      source={require('@/assets/images/section.png')}
      resizeMode='contain'
      style={{ flex: 1, height: 91, width: 91, borderRadius: 16 }}
    />
  </View>
}