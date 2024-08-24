import { Image, ScrollView, SafeAreaView, View } from 'react-native';

import BitcoinSection from '@/components/Bitcoin';
import StatisticsCard from '@/components/StatisticsCard';
import { Paragraph } from '@/components/Paragraph';
import ExclusiveCards from '../../components/ExculsiveCard';
import CornerCards from '@/components/CornerCard';
import Header from '@/components/Header';
import { KeyBenefits } from '../../sections/KeyBenefits';

export default function ContactScreen() {
  return (
    <View>
    <Header />
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
        <ExclusiveCards  />
        <View 
          style={{width: '100%', height: 1, backgroundColor: 'rgba(248, 248, 248, 0.07)', borderRadius: 5, marginVertical:32}}
        ></View>
        <KeyBenefits />
      </ScrollView>
    </View>
  );
}
