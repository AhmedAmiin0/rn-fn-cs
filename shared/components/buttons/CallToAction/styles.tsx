import { Pressable, PressableProps, Text, TextProps, View, ViewProps } from 'react-native';
import styled from 'styled-components';
import { spaces } from '../../../constants/Spaces';

export const ButtonContainer = styled(View)<ButtonContainerProps>`
  flex: 1;
  position: relative;

  width: ${props => props.buttonWidth}px;
  height: ${props => props.buttonHeight}px;
  margin-bottom: ${spaces.xl}px;
  overflow: hidden;

  border-radius: 3px 8px 3px 3px;
`;

export const ButtonContent = styled(Pressable)<ButtonContentProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 36px;
  padding: 8px 24px;
`;

export const ButtonText = styled(Text)`
  color: #ffffff;
  font-family: Saira_700Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
`;

type ButtonContainerProps = {
  buttonHeight: number;
  buttonWidth: number;
} & ViewProps;

type ButtonContentProps = {
  color: string;
} & PressableProps;
