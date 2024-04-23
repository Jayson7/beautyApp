import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

const AppBars = ({ navigation }) => {
  const handleSearch = () => {
    // Navigate to the search screen
    navigation.navigate("SearchScreen");
  };

  return (
    <Appbar.Header>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Title" />
        <View style={{ width: 40 }} /> {/* Empty view to adjust spacing */}
      </View>
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={handleSearch} />
    </Appbar.Header>
  );
};

export default AppBars;
