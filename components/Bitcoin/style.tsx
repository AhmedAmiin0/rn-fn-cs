import { Text, View } from "react-native";
import styled from "styled-components";

export const ImageContainer = styled(View)`
 width: 84px;
  height: 84px;
  padding: 18px;
  justify-content: 'center';
  align-items: 'center';
  border-radius: 1000px;
  border: 0.5px solid rgba(248, 248, 248, 0.07);
  background:  #303030;
  margin-bottom: 32px;
  align-self: flex-start;
`
export const Title = styled(Text)`
font-family: Saira;
font-size: 24px;
font-style: normal;
font-weight: 600;
letter-spacing: 0.48px;
text-transform: capitalize;
color: #F4F4F4;
`

export const Subtitle = styled(Text)`
color:  #A9A9A9;
font-variant-numeric: oldstyle-nums proportional-nums;
font-feature-settings: 'liga' off, 'clig' off;
font-family: Saira;
font-size: 12px;
font-style: normal;
font-weight: 400;
text-transform: capitalize;
padding-right: 24px;
flex: 1;
line-height: 16px;

`