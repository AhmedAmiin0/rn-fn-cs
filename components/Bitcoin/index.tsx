import React from 'react'
import { Image, View } from 'react-native'
import { ImageContainer, Subtitle, Title } from './style'


type Props = {}

export default function BitcoinSection({ }: Props) {
  return (
    <View style={{ flexDirection: 'row', gap: 12,flex:1, width:'100%'}}>
      <ImageContainer
      >
        <Image
          source={require('../../assets/images/bitCoin.png')}
        />
      </ImageContainer>
      <View style={{ flexDirection: 'column', flex:1 }}>

        <Title>
          Bitcoin
        </Title>
        <Subtitle>
          A community where tech enthusiasts, savvy investors, and forward-thinkers unite to stay ahead.
        </Subtitle>
      </View>
    </View>
  )
}
