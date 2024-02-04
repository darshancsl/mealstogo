import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.bg.primary};
  border-radius: 0px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
`;

export const RightContent = styled.View`
  flex-direction: row;
`;
