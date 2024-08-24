import { Pressable, Text, View } from "react-native";
import styled from "styled-components";

export const ExclusiveContainer = styled(View)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    /* background-color: rgba(151, 70, 255, 0.15); */
    flex:1;
    margin-top: 24px;
    /* height:270px; */
    border-radius: 24px;
    border: 1px solid  #8B62FF;
    background: rgba(151, 70, 255, 0.15);
    overflow: hidden;
    height: 100%;
`
export const IconContainer = styled(View)`
  border-radius: 1000px;
  border: 0.5px solid rgba(248, 248, 248, 0.07);
  background: rgba(151, 70, 255, 0.15);
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`
export const Title = styled(Text)`
  color:  #F4F4F4;
  font-variant-numeric: oldstyle-nums proportional-nums;
  font-family: Saira_700Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`
export const Subtitle =  styled(Text)`
color: #A9A9A9;
font-variant-numeric: oldstyle-nums proportional-nums;
font-family: Saira_400Regular;
font-size: 12px;
font-style: normal;
font-weight: 400;
margin-top: 8px;
`
export const ButtonContainer = styled(Pressable)`
border-radius: 119px;
border: 0.5px solid  rgba(248, 248, 248, 0.07);
background: #8B62FF;
/* box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.04); */
display: flex;
padding: 8px 24px;
justify-content: center;
align-items: center;
gap: 4px;
margin-top: 24px;

align-self: flex-start;
flex-direction: row;

  `
export const ButtonText = styled(Text)`
      color:  #F4F4F4;
      font-family: Saira_600SemiBold;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      /* line-height: normal; */
`