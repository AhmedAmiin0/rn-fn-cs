import { Text } from "react-native";
import styled from "styled-components";

export const Title = styled(Text)`
  color:  #F4F4F4;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Saira_600SemiBold;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`
export const Subtitle = styled(Text)`
  color: #A9A9A9;
  /* font-variant-numeric: oldstyle-nums proportional-nums;
   */
  font-family: Saira_400Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400; 
`