import React from 'react'
import { Image, View } from 'react-native'
import { BitCoinImageContainer, BitCoinSubtitle, BitCoinTitle } from './style'

type Props = {
  source?: any;
  title?: string;
  subtitle?: string;
}

export default function BitcoinCard({ source, title, subtitle }: Props) {
  return (
    <View style={{ flexDirection: 'row', gap: 12, flex: 1, width: '100%' }}>
      {source && <BitCoinImageContainer
      >
        <Image
          source={source}
        />
      </BitCoinImageContainer>}
      <View style={{ flexDirection: 'column', flex: 1 }}>

        {title && <BitCoinTitle>
          {title}
        </BitCoinTitle>}
        {subtitle && <BitCoinSubtitle>
          {subtitle}
        </BitCoinSubtitle>}
      </View>
    </View>
  )
}
