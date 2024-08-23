import { Image, StyleSheet, Platform, ScrollView, Text, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styled from 'styled-components';
import { Title } from '@/components/Title';
import CornerCards from '@/components/CornerCard';
import BitcoinSection from '@/components/Bitcoin';

export default function ContactScreen() {
  return (
    <SafeAreaView>
      <ScrollView
      style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 24 }} 
      >
        <BitcoinSection
        ></BitcoinSection>
        <Title style={{marginBottom:16}}>
          Key benefits
        </Title>
        <CornerCards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

