import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData, resetState } from "../actions/action";
import { Button } from "react-native-paper";

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

//

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/2.jpg");

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //  reset all stores and data once the app starts
  useEffect(() => {
    // Dispatch the reset action when the app starts
    dispatch(resetState());
  }, []);

  // handle all login attempts on the application
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    axios
      .post("http://10.0.2.2:8000/signin/", {
        username: username,
        password: password,
      })
      .then(function (response) {
        const { refresh, access } = response.data;
        console.log("the resonse i got \n", response.data, "\n");
        dispatch(setAuthData(refresh, access, username, password));
        Alert.alert(
          "Login successful",
          "Welcome to the app!",
          [{ text: "OK", onPress: () => navigation.navigate("home") }],
          { cancelable: false }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.containerContent}>
        {/* ########  logo section */}
        <View style={styles.logoLogin}></View>
        <Image
          style={styles.Logo}
          source={{
            uri: "https://res.cloudinary.com/jaytech/image/upload/v1704910436/Beauty_App_prwcqb.png",
          }}
        />
        {/* ends */}
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.introText}>
          Enhance your beauty collection with our curated selection of premium
          skincare essentials and glamorous makeup.
        </Text>
        {/* Username input with icon */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="gold"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        {/* Password input with icon */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gold"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <Button
          icon="login"
          mode="contained"
          buttonColor="#bd6513"
          onPress={handleLogin}
          style={{
            borderRadius: 5,
            marginTop: 30,
            paddingHorizontal: 30,
            padding: 20,
            paddingVertical: 5,
          }}
        >
          Login
        </Button>
      </View>
      {/* #################### user exist */}
      <View style={styles.userExist}>
        <Text style={styles.loginText}>Dont have an account?</Text>
        <TouchableOpacity
          style={styles.signupTextContainer}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* ends */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginIcon: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  containerContent: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  introText: {
    color: "#fff",
    width: "70%",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 12,

    fontFamily: "latp-reg",
  },
  heading: {
    fontSize: 34,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "ubuntu-italic",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 50,
    width: "75%",
    fontSize: 17,
    paddingHorizontal: 10,
    color: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

  // loginButton: {
  //   backgroundColor: "#bd6513",
  //   padding: 10,
  //   borderRadius: 5,
  //   width: "50%",
  //   marginTop: 30,
  //   marginBottom: 30,
  // },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  userExist: {
    flexDirection: "row",
    height: 130,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "green", // Set the border color for the random View
    borderWidth: 1,
    borderRadius: 10,
    // flex: 1,
  },
  loginText: {
    color: "white",
    marginBottom: 70,

    justifyContent: "center",
    alignItems: "center",
  },
  logoLogin: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 30,
  },
  Logo: {
    height: 110,
    width: 110,
    marginBottom: 30,
    borderRadius: 50,
  },
  signupText: {
    color: "#bd6513",
  },
  signupTextContainer: {
    marginBottom: 70,
    marginHorizontal: 5,
  },
});
