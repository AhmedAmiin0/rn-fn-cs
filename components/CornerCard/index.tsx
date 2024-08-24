import React from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import { Subtitle, Title } from '../Title'
import { ButtonText, CardButton, CardContainer, IconContainer } from './style'
import Svg, { ClipPath, Defs, Path, Rect } from 'react-native-svg'
// const Logo =  require('./right.svg')
// import Logo from '@/assets/images/right.svg'

type Props = {}

export default function CornerCards({ }: Props) {
  return (
    <View>
      <Svg width="100%" height="100%" viewBox="0 0 200 200">
        <Defs>
          <ClipPath id="clip">
            <Path d="M0,0 L200,0 L200,200 L0,200 Z M50,50 L150,50 L150,150 L50,150 Z" />
          </ClipPath>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="blue"
          clipPath="url(#clip)"
        />

        <CardContainer>
          <IconContainer>
            <Image
              source={require('../../assets/images/discounts.png')}
            />
            {/* <Logo /> */}
          </IconContainer>
          <Title>
            Get 40% Back
          </Title>
          <Subtitle style={{ marginTop: 8 }}>
            Earn 40% of your purchase value back as GIANT tokens. Redeem these tokens for future discounts or rewards.
          </Subtitle>


          <View>
            <CardButton >
              <ButtonText>Reward</ButtonText>
            </CardButton>
          </View>

        </CardContainer>
      </Svg>
    </View>
  )
}