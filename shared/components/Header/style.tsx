import { Text, View } from "react-native";
import styled from "styled-components";

export const HeaderContainer = styled(View)`
  background-color: hsla(0, 0%, 17.254901960784313%, 0.35);
  justify-content: space-between;
  align-items: flex-end;
  align-content: center;
  border-bottom: 0.5px solid var(--Stroke, rgba(248, 248, 248, 0.07));
  height: 108px;
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  border-bottom-color: #3E3E3E;
  border-bottom-width: 1px;
  `
export const HeaderTitle = styled(Text)<{ statusBarHeight: number }>`
  color:  #F4F4F4;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: SpaceGrotesk_500Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  padding-bottom: ${(props) => props.statusBarHeight}px;
  `
