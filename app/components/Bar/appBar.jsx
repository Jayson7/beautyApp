import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import ToggleButtonMenu from "../toggleButton";

const AppBars = ({ navigation }) => {
  const handleSearch = () => {
    // Navigate to the search screen
    navigation.navigate("SearchScreen");
  };

  return (
    <Appbar.Header>
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          // backgroundColor: "#000",
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />

        <Appbar.Action icon="cart" onPress={""} />
        <ToggleButtonMenu />
      </View>
    </Appbar.Header>
  );
};

export default AppBars;
