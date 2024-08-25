import { View } from 'react-native';
import CornerCards from '@/shared/components/cards/CornerCard';
import { sectionTitle, keyBenefitsContent } from './content';
import { Title } from '@/shared/components/text/Title';
import { spaces } from '@/shared/constants/Spaces';

export const KeyBenefits = () => {
  return (
    <View style={{ marginBottom: 200 }}>
      <Title style={{ marginBottom: spaces.xl }}>{sectionTitle}</Title>
      <View style={{ marginBottom: spaces.xxl }}>
        {keyBenefitsContent.map(card => (
          <CornerCards key={card.title} {...card} />
        ))}
      </View>
    </View>
  );
};
