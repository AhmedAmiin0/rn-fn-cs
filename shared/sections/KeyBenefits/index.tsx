import { View } from 'react-native';
import CornerCards from '../../components/CornerCard';
import { sectionTitle, keyBenefitsContent } from './content';
import { Title } from '../../components/text/Title';
import { spaces } from '../../constants/Spaces';

export const KeyBenefits = () => {
  return (
    <View>
      <Title style={{ marginBottom: spaces.xl }}>{sectionTitle}</Title>
      <View style={{ marginBottom: spaces.xxl }}>
        {keyBenefitsContent.map(card => (
          <CornerCards key={card.title} {...card} />
        ))}
      </View>
    </View>
  );
};
