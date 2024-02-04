import { Image, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import Spacer from "../../../../components/Spacer";
import { Text } from "../../../../components/typography/Text";
import {
  Info,
  RatingContainer,
  RestaurantCard,
  RestaurantCardCover,
  RightContent,
  Section,
} from "./RestaurantsInfo.Styles";

const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from({ length: rating }, (_, index) => index);
  return (
    <View>
      <RestaurantCard>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <RatingContainer>
              {ratingArray.map((value) => {
                return <SvgXml key={value} xml={star} width={20} height={20} />;
              })}
            </RatingContainer>
            <RightContent>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>

              <Spacer position="left" size="large">
                {icon && (
                  <Image
                    style={{ width: 15, height: 15 }}
                    source={{ uri: icon }}
                  />
                )}
              </Spacer>
            </RightContent>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantsInfo;
