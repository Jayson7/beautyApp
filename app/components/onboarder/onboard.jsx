import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";

const Onboard = () => {
  //
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };
  // button2

  const handlePressIn2 = () => {
    setIsHovered2(true);
  };

  const handlePressOut2 = () => {
    setIsHovered2(false);
  };

  const buttonStyle1 = isHovered
    ? [styles.button, styles.buttonHovered]
    : styles.button;
  const buttonStyle2 = isHovered2
    ? [styles.button2, styles.buttonHovered2]
    : styles.button2;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>
      <Image
        style={styles.Logo}
        source={{
          uri: "https://res.cloudinary.com/jaytech/image/upload/v1704910436/Beauty_App_prwcqb.png",
        }}
      />
      <View>
        {/* ########################################### */}
        {/* button 1 */}
        <TouchableHighlight
          onPress={() => console.log("Button Pressed!")}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          underlayColor="transparent" // Disable default underlay color
        >
          <View style={buttonStyle1}>
            <Text style={styles.buttonText}>Sign up</Text>
          </View>
        </TouchableHighlight>
        {/* ########################################### */}
        {/* button 2 */}
        <TouchableHighlight
          onPress={() => console.log("Button Pressed!")}
          onPressIn={handlePressIn2}
          onPressOut={handlePressOut2}
          underlayColor="transparent" // Disable default underlay color
        >
          <View style={buttonStyle2}>
            <Text style={styles.buttonText2}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#02010A",
  },
  welcome: {
    color: "wheat",
    fontSize: 25,
    fontWeight: "bold",
  },
  Logo: {
    width: 250,
    height: 200,
  },
  // button1
  button: {
    backgroundColor: "#0D00A4",
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
  },

  buttonHovered: {
    backgroundColor: "#22007C",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  // button2
  button2: {
    backgroundColor: "#22007C",
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
  },

  buttonHovered2: {
    backgroundColor: "#140152",
  },
  buttonText2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Onboard;
