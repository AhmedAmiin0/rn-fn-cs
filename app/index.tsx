import { Image, ScrollView, SafeAreaView, View } from 'react-native';

import StatisticsCard from '@/shared/components/StatisticsCard';
import { Paragraph } from '@/shared/components/text/Paragraph';
import Header from '@/shared/components/Header';

import BitcoinSection from '@/app/components/BitcoinSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import AnimatedSection from '@/app/components/AmimatedSection';
import ParagraphSection from '@/app/components/ParagraphSection';
import Divider from '@/shared/components/Divider';
import { Offers } from './components/Offers';
import { KeyBenefits } from './components/KeyBenefits';

export default function ContactScreen() {
  return (
    <View>
      <Header />
      <ScrollView style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 24 }}>
        <BitcoinSection />
        <StatisticsSection />
        <AnimatedSection />
        <ParagraphSection />
        <Offers />
        <Divider />
        <KeyBenefits />
      </ScrollView>
    </View>
  );
}
