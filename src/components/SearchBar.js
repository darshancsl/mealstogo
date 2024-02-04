import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <Searchbar
      placeholder="Search"
      placeholderTextColor="#333"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="view"
      showDivider={false}
      elevation={2}
      style={styles.searchBar}
      inputStyle={styles.input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  input: {
    color: "#333",
  },
});
