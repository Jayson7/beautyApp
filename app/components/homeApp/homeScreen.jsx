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

//
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppBars />

      <SafeAreaView>
        <SearchBar />
        <ScrollView style={styles.mainsContainer}>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Hello </Text>
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
    backgroundColor: "pink",
    paddingTop: StatusBar.currentHeight / 2,
  },
  text: {
    fontSize: 42,
    color: "black",
  },
});

export default HomeScreen;

// login screen does nothing to wrong password
// search screen
// appbar config
