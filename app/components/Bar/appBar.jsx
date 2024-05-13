import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import ToggleButtonMenu from "./toggleButton";

const AppBars = ({ navigation }) => {
  const handleSearch = () => {
    // Navigate to the search screen
    navigation.navigate("SearchScreen");
  };

  return (
    <Appbar.Header
      style={{
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundColor: "#F1F2EB",
        paddingTop: 30,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 27,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Appbar.BackAction size={19} onPress={() => navigation.goBack()} /> */}

        <Appbar.Action icon="cart" size={20} onPress={""} />
        <ToggleButtonMenu />
      </View>
    </Appbar.Header>
  );
};

export default AppBars;
