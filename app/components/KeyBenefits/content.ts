import { CornerCardsProps } from '@/shared/components/CornerCard';
import discountIcon from '@/assets/images/benefits/discounts.png';
import checkIcon from '@/assets/images/benefits/check.png';
import shieldIcon from '@/assets/images/benefits/shield.png';
import trendIcon from '@/assets/images/benefits/trend.png';

export const sectionTitle = 'Key Benefits'

export const keyBenefitsContent: CornerCardsProps[] = [
  {
    title: 'Get 40% Back',
    subtitle:
      'Earn 40% of your purchase value back as GIANT tokens. Redeem these tokens for future discounts or rewards.',
    buttonText: 'Reward',
    icon: discountIcon,
    color: '#fcbc05',
    onPress: () => {},
  },
  {
    title: 'Sell Or Exchange',
    subtitle:
      'You can sell or exchange your item any time before it expires. Make sure to act before the expiry date to take advantage of this offer.',
    buttonText: 'Profit',
    icon: trendIcon,
    color: '#8B62FF',
    onPress: () => {},
  },
  {
    title: 'Get Protection',
    subtitle:
      'Safeguard your account from SIM swap attacks with our protection. Stay secure and prevent unauthorized access.',
    buttonText: 'Security',
    icon: shieldIcon,
    color: '#589E37',
    onPress: () => {},
  },
  {
    title: 'VIP Support',
    subtitle:
      'We guarantee round-the-clock VIP support, available 24/7. Get priority assistance whenever you need it.',
    buttonText: 'VIP',
    icon: checkIcon,
    color: '#FF4646',
    onPress: () => {},
  },
];
