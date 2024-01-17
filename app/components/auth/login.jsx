import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const image = require("../../assets/2.jpg");

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    console.log("Login button pressed");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.userExist}>
          <Text style={styles.loginText}>
            Already have an account? Log in here
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  containerContent: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    color: "#fff",
  },

  loginButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    width: "60%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
