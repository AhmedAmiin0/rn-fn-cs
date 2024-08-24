import { Pressable, Text, View } from "react-native";
import styled from "styled-components";

export const CardContainer = styled(View)`
  /* background-color: #303030; */
  padding: 24px;
  border-radius: 16px 120px 16px 16px;
  /* margin: 16px; */
`;
export const IconContainer = styled(View)`
  border: 0.5px solid rgba(248, 248, 248, 0.07);
  background-color: rgba(252, 188, 5, 0.05);
  shadow-color: rgba(16, 24, 40, 0.04);
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-bottom: 24px;
`

export const CardButton = styled(Pressable)`
  border-radius: 119px;
  border: 0.5px solid rgba(248, 248, 248, 0.07);
  background: rgba(252, 188, 5, 0.05);
  margin-top: 24px;
  padding: 10px 24px;
  flex: 1;
  align-self: flex-start;
`
export const ButtonText = styled(Text)`
color:  #FCBC05;
font-family: Saira_600SemiBold;
font-size: 12px;
font-style: normal;
font-weight: 600;
`
