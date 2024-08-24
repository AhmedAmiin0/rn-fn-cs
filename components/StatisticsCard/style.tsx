import { Text, View, ViewProps } from "react-native";
import styled from "styled-components";

type CardContainerProps = {
  isPrimary: boolean;
} & ViewProps;

export const CardContainer = styled(View)<CardContainerProps>`
display: flex;
padding: 8px 8px 16px 8px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
flex: 1 0 0;
align-self: stretch;
border-radius: 12px;
border: 0.5px solid rgba(248, 248, 248, 0.07);
background: ${(props) => props.isPrimary ? '#8B62FF' : '#303030'};
`
export const Title = styled(Text)`
color:  #F4F4F4;
font-kerning: none;
font-variant-numeric: oldstyle-nums proportional-nums;
font-feature-settings: 'ss03' on, 'liga' off, 'clig' off;
font-family: Saira_700Bold;
font-size: 24px;
font-style: normal;
font-weight: 700;
text-transform: capitalize;
`

export const Subtitle = styled(Text)`
color:  #F4F4F4;
font-variant-numeric: oldstyle-nums proportional-nums;
font-feature-settings: 'liga' off, 'clig' off;
font-family: Saira_400Regular;
font-size: 12px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.24px;
text-transform: capitalize;
`
