import React, { useState } from "react";
import { Button } from "react-native-paper";
import axios from "axios";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

//
const image = require("../../assets/3.jpg");
//
export default function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [full_name, setFull_name] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    // Add your authentication logic here
    console.log("Submit button pressed");
    console.log(username, full_name, country, email, phone_number);
    axios
      .post("http://10.0.2.2:8000/signup/", {
        username: username,
        email: email,
        password: password,
        full_name: full_name,
        phone_number: phone_number,
      })
      .then((response) => {
        // Handle successful sign-up
        navigation.navigate("login");
        Alert.alert("Sign-up successful", "You can now login.");
      })
      .catch((error) => {
        // Handle error
        Alert.alert("Sign-up failed", "Please try again later.");
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
        <Text style={styles.heading}>Create an account</Text>
        {/* Username input with icon */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="gold"
            onChangeText={(text) => setFull_name(text)}
            value={full_name}
          />
        </View>
        {/* Password input with icon */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor="gold"
            onChangeText={(text) => setCountry(text)}
            value={country}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="gold"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) => setPhone(text)}
            value={phone_number}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gold" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="gold"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

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
          mode="contained"
          style={{
            borderRadius: 5,
            paddingHorizontal: 20,
            marginTop: 25,
          }}
          buttonColor="#bd6513"
          onPress={handleRegister}
        >
          Sign up
        </Button>
      </View>
      {/* #################### user exist */}
      <View style={styles.userExist}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity style={styles.signupTextContainer}>
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

  heading: {
    fontSize: 24,
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
