import React, { useState } from "react";
import axios from "axios";

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

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

//
const image = require("../../assets/2.jpg");
//

const baseURL = "";
//
export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Handlelogin = async (username, password) => {
    try {
      // Get CSRF token from Django server
      const csrfTokenResponse = await axios.get(
        "http://10.0.2.2:8000/csrf_cookie/"
      );
      const csrfToken = csrfTokenResponse.headers["set-cookie"];

      // Make login request with CSRF token included in headers
      const response = await axios.post(
        "http://10.0.2.2:8000/login/",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken, // Include CSRF token in headers
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login successful:", response.data);
      // Handle successful login response
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
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
        <Text style={styles.heading}>Login</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
  },
  heading: {
    fontSize: 34,
    marginBottom: 20,
    color: "#fff",
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
    height: 40,
    width: "70%",
    padding: 10,
    color: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

  loginButton: {
    backgroundColor: "#bd6513",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    marginTop: 30,
    marginBottom: 30,
  },
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
