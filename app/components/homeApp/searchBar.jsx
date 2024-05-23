import { View, Text } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-evenly",
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Searchbar
        placeholder="Search anything"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          width: "75%",
        }}
      />
      <Icon name="sound-mix" size={20} color="gold" />
    </View>
  );
};

export default SearchBar;
