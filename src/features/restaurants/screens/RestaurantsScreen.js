import React from "react";
import SearchBar from "../../../components/SearchBar";
import RestaurantsInfo from "../components/RestaurantsInfo/RestaurantsInfo";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";

const RestaurantsScreen = () => {
  const SearchBarContainer = styled.View`
    padding: 0 ${(props) => props.theme.space[3]};
  `;

  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantsInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
