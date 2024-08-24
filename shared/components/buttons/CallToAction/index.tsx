import { useWindowDimensions, View } from 'react-native';
import { ButtonContainer, ButtonContent, ButtonText } from './styles';
import { spaces } from '../../../constants/Spaces';
import { G, Path, Rect, Svg } from 'react-native-svg';

export const CallToAction = ({
  cta,
  color = '#8B62FF',
  borderColor = '#8B62FF',
}: CallToActionProps) => {
  const { width } = useWindowDimensions();
  const buttonWidth = width - spaces.xxl * 2;
  const buttonHeight = Math.floor((buttonWidth * 70) / 381);

  return (
    <ButtonContainer buttonWidth={buttonWidth} buttonHeight={buttonHeight}>
      <Corner buttonWidth={buttonWidth} buttonHeight={buttonHeight} borderColor={borderColor} bgColor={color} />
      <ButtonContent color={color}>
        <ButtonText>{cta}</ButtonText>
      </ButtonContent>
    </ButtonContainer>
  );
};

export const Corner = ({
  buttonWidth,
  buttonHeight,
  borderColor,
  bgColor,
}: {
  buttonWidth: number;
  buttonHeight: number;
  borderColor: string;
  bgColor: string;
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
      }}>
      <Svg
        width={buttonWidth}
        height={buttonHeight}
        viewBox='0 0 383 72'
        title='call-to-action'
        preserveAspectRatio='none'>
        <Rect x='0' y='0' width='383' height='72' fill={bgColor} />
        <Path
          d='M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8L1 66.2C1 67.8802 1 68.7202 1.32698 69.362C1.6146 69.9265 2.07354 70.3854 2.63803 70.673C3.27976 71 4.11984 71 5.8 71H366H380C381.105 71 382 70.1046 382 69V18.6449C382 17.7152 381.676 16.8146 381.084 16.0978L369.815 2.45286C369.055 1.53277 367.924 1 366.731 1H6Z'
          stroke={borderColor}
          fill={bgColor}
          stroke-width='2'
        />
      </Svg>
    </View>
  );
};

export interface CallToActionProps {
  cta: string;
  color: string;
  borderColor: string;
  onPress?: () => void;
}
