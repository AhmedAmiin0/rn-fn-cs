import React from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonContainer, ButtonText, ExclusiveContainer, IconContainer, Subtitle, Title } from './style';

type Props = {};

export default function ExclusiveCards({}: Props) {
  return (
    <ExclusiveContainer>
      <IconContainer>
        <Image source={require('../../assets/images/fill.png')} />
      </IconContainer>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',gap:22,height:'100%' }}>
        <View style={{ flexDirection: 'column', height: '100%',flex:3,paddingBottom:24 }}>
          <Title>Exclusive Bitcoin wallpaper</Title>
          <Subtitle>featuring your auction number—a collectible that can also be traded!</Subtitle>
          <ButtonContainer>
              <ButtonText>Wallpaper</ButtonText>
              <Image source={require('../../assets/images/right.png')} />
          </ButtonContainer>
        </View>
        <ImageBackground source={require('../../assets/images/darthVader.png')} style={{ height: '100%', width: '100%',
          flex:2.5,
          marginTop:-24
         }} 
         imageStyle={{
          borderRadius: 12
         }}
         />
      </View>
    </ExclusiveContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
