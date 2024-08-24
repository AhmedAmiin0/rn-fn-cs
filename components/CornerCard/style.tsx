import { Pressable, PressableProps, Text, TextProps, View } from 'react-native';
import styled from 'styled-components';
import { spaces } from '../../constants/Spaces';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export const CardContainer = styled(View)<CardContainerProps>`
  position: relative;
  
  width: ${props => props.cardWidth}px;
  height: ${props => props.cardHeight}px;
  margin-bottom: ${spaces.xl}px;
  overflow: hidden;
  
  border-radius: 24px;
  `;

export const CardContent = styled(View)`
  padding-left: 24px;

  border-radius: 16px 120px 16px 16px;
  z-index: 4;
`;
export const IconContainer = styled(View)`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 8px;
  margin-top: 24px;
  margin-bottom: 24px;

  border: 0.5px solid rgba(248, 248, 248, 0.07);
  border-radius: 40px;
  background-color: rgba(252, 188, 5, 0.05);
  shadow-color: rgba(16, 24, 40, 0.04);
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const CardButton = styled(Pressable)<CardButtonProps>`
  flex: 1;
  align-self: flex-start;

  min-height: 36px;
  padding: 8px 24px;
  margin-bottom: 24px;

  border: 0.5px solid rgba(248, 248, 248, 0.07);
  border-radius: 119px;
  background: ${(props) => props.color +'0c'};
`;
export const ButtonText = styled(Text)<ButtonTextProps>`
  color: ${(props) => props.color};
  font-family: Saira_600SemiBold;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;


type CardContainerProps = {
  cardHeight: number;
  cardWidth: number;
} & ViewProps;

type CardButtonProps = {
  color: string;
} & PressableProps

type ButtonTextProps = {
  color: string;
} & TextProps