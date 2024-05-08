import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AppBars from "../Bar/appBar";

//
import SearchBar from "./searchBar";
//

// components
import FeaturedProducts from "./featuredProducts";

//

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppBars />

      <SafeAreaView>
        <SearchBar />
        <ScrollView style={styles.mainsContainer}>
          <FeaturedProducts />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainsContainer: {
    backgroundColor: "#F1F2EB",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
    color: "black",
  },

  headerTxt: {
    fontSize: 30,
  },
});

export default HomeScreen;

// login screen does nothing to wrong password
// search screen
// appbar config
