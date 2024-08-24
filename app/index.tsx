import { Image, ScrollView, SafeAreaView, View } from 'react-native';

import StatisticsCard from '@/shared/components/StatisticsCard';
import { Paragraph } from '@/shared/components/text/Paragraph';
import Header from '@/shared/components/Header';
import { KeyBenefits } from '@/shared/sections/KeyBenefits';
import { Offers } from '@/shared/sections/Offers';
import BitcoinSection from '@/sections/BitcoinSection';
import StatisticsSection from '@/sections/StatisticsSection';
import AnimatedSection from '@/sections/AmimatedSection';
import ParagraphSection from '@/sections/ParagraphSection';
import Divider from '@/shared/components/Divider';

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
