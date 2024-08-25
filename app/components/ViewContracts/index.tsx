import { StyleSheet, View } from 'react-native';
import { CallToAction } from '../../../shared/components/buttons/CallToAction';
import { BlurView } from 'expo-blur';

export const ViewContracts = () => {
  return (
    <View style={{ height: "15%", position: 'absolute', bottom: 0, zIndex: 3, flex: 1 }}>
      <BlurView intensity={100} tint="dark" style={{ flex: 1, padding: 24, backgroundColor: 'rgba(44, 44, 44,0.35)' }} >
        <CallToAction cta='View Contracts' color='#52327c' borderColor='#8B62FF' />
      </BlurView>
    </View >
  );
};
