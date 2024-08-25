import { Image, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const SectionContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 24px;
  height: 91px;
  position: relative;
`;

export const AnimationContainer = styled(View)`
  position: absolute;
  top: 55%;
  left: 45%;
  width: 55px;
  height: 16px;
  overflow: hidden;
`;

export const MainImage = styled(Image)`
  flex: 1;
  height: 91px;
  width: 91px;
  border-radius: 16px;
`;

export const Animation = styled(Animated.View)`
  height: 40px;

  flex-direction: column;
  justify-content: space-between;

  position: absolute;
`;

export const AnimatedText = styled(Text)`
  font-family: 'SF-Pro';
  font-weight: 500;
  font-size: 14px;
  color: #F4F4F4;
`;


