import { Image, ScrollView, View } from 'react-native';

import Header from '@/shared/components/Header';

import BitcoinSection from '@/app/components/BitcoinSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import AnimatedSection from '@/app/components/AmimatedSection';
import ParagraphSection from '@/app/components/ParagraphSection';
import Divider from '@/shared/components/Divider';
import { Offers } from './components/Offers';
import { KeyBenefits } from './components/KeyBenefits';
import { ViewContracts } from './components/ViewContracts';

export default function ContactScreen() {
  return (
    <View style={{flex:1,flexDirection:'column'}}>
      <Header />
        <ViewContracts />

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
