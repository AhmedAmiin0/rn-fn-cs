import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonContainer, ButtonText, ExclusiveContainer, IconContainer, Subtitle, Title } from './style';

type Props = {};

export default function ExclusiveCards({}: Props) {
  return (
    <ExclusiveContainer>
      <IconContainer>
        <Image source={require('../../assets/images/fill.png')} />
      </IconContainer>
      <View style={{ flexDirection: 'row', gap: 22, paddingBottom: 24 }}>
        <View style={{ flexDirection: 'column', flex: 1, width: '41%', height: '100%' }}>
          <Title>Exclusive Bitcoin wallpaper</Title>
          <Subtitle>featuring your auction number—a collectible that can also be traded!</Subtitle>
          <ButtonContainer>
              <ButtonText>Wallpaper</ButtonText>
          </ButtonContainer>
        </View>
        <View style={{ width: '40%', overflow: 'hidden', height: '100%' }}>
          <Image
            source={require('../../assets/images/darthVader.png')}
            style={{ height: '100%', width: '100%', borderRadius: 24 }}
          />
        </View>
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
