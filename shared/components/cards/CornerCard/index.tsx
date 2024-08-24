import React from 'react';
import { Image, View } from 'react-native';
import { Subtitle, Title } from '../../text/Title';
import { ButtonText, CardButton, CardContainer, CardContent, IconContainer } from './style';
import Svg, { Path, Rect } from 'react-native-svg';

import { useWindowDimensions } from 'react-native';
import { spaces } from '@/shared/constants/Spaces';

export default function CornerCards({
  title,
  subtitle,
  buttonText,
  icon,
  color,
  onPress,
}: CornerCardsProps) {
  const { width } = useWindowDimensions();
  const cardWidth = width - spaces.xxl * 2;
  const cardHeight = Math.floor((cardWidth * 250) / 382);

  return (
    <CardContainer cardHeight={cardHeight} cardWidth={cardWidth}>
      <Corner cardWidth={cardWidth} cardHeight={cardHeight} color={color} />
      <CardContent>
        <IconContainer>
          <Image source={icon} style={{ width: '100%', height: '100%' }} />
        </IconContainer>

        <Title>{title}</Title>
        <Subtitle style={{ marginTop: spaces.md, marginBottom: spaces.xxl }}>{subtitle}</Subtitle>

        <CardButton color={color} onPress={onPress}>
          <ButtonText color={color}>{buttonText}</ButtonText>
        </CardButton>
      </CardContent>
    </CardContainer>
  );
}

export const Corner = ({
  cardWidth,
  cardHeight,
  color,
}: {
  cardWidth: number;
  cardHeight: number;
  color: string;
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
      }}>
      <Svg
        width={cardWidth}
        height={cardHeight}
        viewBox='0 0 330 324'
        title='discounts'
        fill='#303030'
        preserveAspectRatio='xMaxYMin slice'>
        <Rect x='254' y='6' width='70' height='70' rx='20' ry='20' fill={color} />
        <Path
          d='M288.276 9.16595C282.293 3.29134 274.243 0 265.857 0H18.8571C8.44263 0 0 8.28913 0 18.5143V305.486C0 315.711 8.44263 324 18.8571 324H311.143C321.557 324 330 315.711 330 305.486V63.5583C330 54.9696 326.547 46.7414 320.419 40.7243L288.276 9.16595Z'
          fill='#303030'
        />
      </Svg>
    </View>
  );
};

export type CornerCardsProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: number;
  color: string;
  onPress?: () => void;
};
