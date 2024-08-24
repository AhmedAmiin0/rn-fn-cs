import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  ExclusiveContainer,
  IconContainer,
  Subtitle,
  Title,
} from './style';

export default function ExclusiveCards({
  title,
  subtitle,
  buttonText,
  icon,
  image,
}: ExclusiveCardProps) {
  return (
    <ExclusiveContainer>
      <IconContainer>
        <Image source={icon} />
      </IconContainer>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 22, height: '100%' }}>
        <View style={{ flexDirection: 'column', height: '100%', flex: 3, paddingBottom: 24 }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <ButtonContainer>
            <ButtonText>{buttonText}</ButtonText>
            <Image source={require('@/assets/images/right.png')} />
          </ButtonContainer>
        </View>
        <ImageBackground
          source={image}
          style={{
            height: '100%',
            width: '100%',
            flex: 2.5,
            marginTop: -24,
            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 24,
            elevation: 7,
          }}
          imageStyle={{
            borderRadius: 12,
          }}
        />
      </View>
    </ExclusiveContainer>
  );
}

export type ExclusiveCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: number;
  image: number;
};
