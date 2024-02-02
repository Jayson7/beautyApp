import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

//
import AsyncStorage from "@react-native-async-storage/async-storage";

//
const Onboard = () => {
  //
  const [showWelcome, setShowWelcome] = useState(true);
  //
  const navigation = useNavigation();
  //
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // ###################################

  useEffect(() => {
    // Check if the app has been launched before
    AsyncStorage.getItem("appLaunchedBefore").then((value) => {
      if (value !== null) {
        navigation.navigate("login");
        setShowWelcome(false);
      } else {
        // App is launched for the first time, set the flag in AsyncStorage
        AsyncStorage.setItem("appLaunchedBefore", "true");
      }
    });
  }, []);

  // ###################################
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
      <Image
        style={styles.Logo}
        source={{
          uri: "https://res.cloudinary.com/jaytech/image/upload/v1704910436/Beauty_App_prwcqb.png",
        }}
      />
      <View style={styles.intro}>
        <Text style={styles.welcome}>Welcome Back!</Text>
        <Text style={styles.welcomeMini}>
          Unlock your beauty journey with Beauty App. Sign in to discover
          personalized tips, exclusive deals, and a world of radiant
          possibilities.
        </Text>
      </View>
      <View>
        {/* ########################################### */}
        {/* button 1 */}
        <TouchableHighlight
          onPress={() => navigation.navigate("register")}
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
          onPress={() => navigation.navigate("login")}
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
  backgroundImage: {
    resizeMode: "cover", // You can use 'contain' or 'stretch' as well
  },
  container: {
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#02010A",
  },
  intro: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    color: "wheat",
    fontSize: 25,
    fontWeight: "bold",
  },
  welcomeMini: {
    color: "white",
    width: 350,
    marginTop: 20,
    textAlign: "center",
    // fontFamily: "",
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
    backgroundColor: "#bd6513",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  // button2
  button2: {
    backgroundColor: "#bd6513",
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
  },

  buttonHovered2: {
    backgroundColor: "#0D00A4",
  },
  buttonText2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Onboard;
