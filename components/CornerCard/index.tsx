import React from 'react';
import { Button, Image, Pressable, Text, View } from 'react-native';
import { Subtitle, Title } from '../Title';
import { ButtonText, CardButton, CardContainer, IconContainer } from './style';
import Svg, { ClipPath, Defs, Path, Rect } from 'react-native-svg';
// const Logo =  require('./right.svg')
// import Logo from '@/assets/images/right.svg'

import { useWindowDimensions } from 'react-native';
import { spaces } from '../../constants/Spaces';

type Props = {};


export default function CornerCards({}: Props) {
  const { height, width } = useWindowDimensions();
  const cardWidth = width - spaces.xxl * 2;
  const cardHeight = Math.floor((cardWidth * 237) / 382);
  console.log(cardWidth, cardHeight)

  return (
    <View style={{ justifyContent: 'center', position: 'relative', width: cardWidth, height: cardHeight, borderRadius: 24, overflow: 'hidden', marginBottom: spaces.xxxl }}>
      <Corner cardWidth={cardWidth} cardHeight={cardHeight}/>
      <CardContainer>
        <IconContainer>
          <Image source={require('../../assets/images/discounts.png')} />
          {/* <Logo /> */}
        </IconContainer>
        <Title>Get 40% Back</Title>
        <Subtitle style={{ marginTop: 8 }}>
          Earn 40% of your purchase value back as GIANT tokens. Redeem these tokens for future
          discounts or rewards.
        </Subtitle>

        <View>
          <CardButton>
            <ButtonText>Reward</ButtonText>
          </CardButton>
        </View>
      </CardContainer>
    </View>
  );
}


export const Corner = ({cardWidth, cardHeight}: {cardWidth: number, cardHeight: number}) => {
  
  return <View style={{
    position: 'absolute',
    zIndex: -1,
    top: 0
  }}>
  <Svg width={cardWidth} height={cardHeight} viewBox='0 0 330 324' title='discounts' fill='#222325' preserveAspectRatio='xMaxYMin slice'>
    <Rect x="254" y="6" width="70" height="70" rx="20" ry="20" fill="rgb(252, 188, 5)" />
    <Path
      d='M288.276 9.16595C282.293 3.29134 274.243 0 265.857 0H18.8571C8.44263 0 0 8.28913 0 18.5143V305.486C0 315.711 8.44263 324 18.8571 324H311.143C321.557 324 330 315.711 330 305.486V63.5583C330 54.9696 326.547 46.7414 320.419 40.7243L288.276 9.16595Z'
      fill='#222325'
    />
  </Svg>
</View>
}