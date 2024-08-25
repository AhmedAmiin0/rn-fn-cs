import { useEffect } from 'react';
import {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  withDelay,
  withSequence,
} from 'react-native-reanimated';
import { AnimatedText, Animation, AnimationContainer, MainImage, SectionContainer } from './styles';

export default function AnimatedSection() {
  const top = useTextTopAnimation();

  return (
    <SectionContainer>
      <MainImage
        source={require('@/assets/images/section.png')}
        resizeMode='contain'
      />
      <AnimationContainer>
        <Animation style={{ top: top }}>
          <AnimatedText>Verizon</AnimatedText>
          <AnimatedText>Bitcoin</AnimatedText>
        </Animation>
      </AnimationContainer>
    </SectionContainer>
  );
}

const animationTiming = {
  duration: 1000,
  easing: Easing.linear,
}
const animationDelay = 1000;

const useTextTopAnimation = () => {
  const top = useSharedValue(0);

  useEffect(() => {
    // 24 = -(40-16)
    const timing1 = withTiming(-24, animationTiming);
    const timing2 = withTiming(0, animationTiming);
    const timingDelayed1 = withDelay(animationDelay, timing1);
    const timingDelayed2 = withDelay(animationDelay, timing2);

    top.value = withRepeat(withSequence(timingDelayed1, timingDelayed2), -1, false);
  }, []);


  return top;
}