import React from 'react';
import { Image, Platform, StatusBar, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { HeaderContainer, HeaderTitle } from './style';

type Props = {};

export default function Header({}: Props) {
  const statusBarHeight = getStatusBarHeight();
  const isAndroid = Platform.OS === 'android';
  const headerHeight = isAndroid ? statusBarHeight - 14 : statusBarHeight;

  return (
    <HeaderContainer>
      <View
        style={{
          paddingBottom: headerHeight,
          width: 24,
        }}>
        <Image source={require('@/assets/images/left.png')} />
      </View>
      <HeaderTitle statusBarHeight={headerHeight}>Contract</HeaderTitle>
      <View style={{ width: 24 }}></View>
    </HeaderContainer>
  );
}
