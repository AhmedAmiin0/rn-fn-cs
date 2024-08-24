import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { getStatusBarHeight, } from 'react-native-status-bar-height';
import { HeaderContainer, HeaderTitle } from './style';

type Props = {}

export default function Header({ }: Props) {
  const statusBarHeight = getStatusBarHeight();
  console.log(statusBarHeight)

  return (
    <HeaderContainer >
      <View 
        style={{paddingBottom:statusBarHeight,width:24}}
      >

      <Image source={require('../../assets/images/left.png')} />
      </View>
      <HeaderTitle  statusBarHeight={statusBarHeight}>Contract</HeaderTitle>
      <View style={{width:24}}></View>
    </HeaderContainer>
  )
}