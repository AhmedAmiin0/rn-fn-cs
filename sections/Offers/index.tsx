import { View } from 'react-native';
import ExclusiveCards from '../../components/ExculsiveCard';
import { offersSectionContent } from './content';

export const Offers = () => {
  return (
    <View>
      {offersSectionContent.map(card => (
        <ExclusiveCards key={card.title} {...card} />
      ))}
    </View>
  );
};
