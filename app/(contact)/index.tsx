import { Image, StyleSheet, Platform, ScrollView, Text, SafeAreaView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styled from 'styled-components';
import { Title } from '@/components/Title';
import CornerCards from '@/components/CornerCard';
import BitcoinSection from '@/components/Bitcoin';
import StatisticsCard from '@/components/StatisticsCard';
import { Paragraph } from '@/components/Paragraph';

export default function ContactScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 24 }}>
        <BitcoinSection></BitcoinSection>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 24 }}>
          <StatisticsCard isPrimary title='10k' subtitle='limited edition Contracts' />
          <StatisticsCard title='2,979' subtitle='owners' />
          <StatisticsCard title='7.5k' subtitle='sold' />
        </View>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 24, height: 91, flex: 1 }}>
          <Image
            source={require('../../assets/images/section.png')}
            resizeMode='contain'
            style={{ flex: 1, height: 91, width: 91, borderRadius: 16 }}
          />
        </View>
        <View>
          <Paragraph>Activate and flaunt 'Bitcoin' name on your phone in under 5 mins</Paragraph>
        </View>
        

        {/* <Title style={{ marginBottom: 16 }}>
          Key benefits
        </Title>
        <CornerCards /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
