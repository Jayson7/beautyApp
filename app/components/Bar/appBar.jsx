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
        backgroundColor: "#DFF3E4",
        paddingTop: 30,
        marginBottom: 20,
        color: "#fff",
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 27,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
        }}
      >
        {/* <Appbar.BackAction size={19} onPress={() => navigation.goBack()} /> */}

        <Appbar.Action
          icon="cart"
          size={20}
          onPress={""}
          style={{ backgroundColor: "gold" }}
        />
        <ToggleButtonMenu />
      </View>
    </Appbar.Header>
  );
};

export default AppBars;
