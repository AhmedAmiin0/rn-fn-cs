import React from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import { Subtitle, Title } from '../Title'
import { ButtonText, CardButton, CardContainer, IconContainer } from './style'
// const Logo =  require('./right.svg')
// import Logo from '@/assets/images/right.svg'

type Props = {}

export default function CornerCards({ }: Props) {
  return (
    <CardContainer>
      <IconContainer >
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
    <View
    
    >
      
        <CardButton >
          <ButtonText>Reward</ButtonText>
        </CardButton>
    </View>


    </CardContainer>
  )
}