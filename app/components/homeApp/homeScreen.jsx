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

//

//
const HomeScreen = () => {
  return (
    <View>
      <AppBars />
      <SafeAreaView style={styles.container}>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  mainsContainer: {
    backgroundColor: "pink",
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
