import React from "react";
import {
  StyleSheet,
  FlatList,
  ImageBackground,
  View,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
//

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
  { id: "4", name: "Item 4" },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <View style={styles.productBox}>
    <Text>{item.name}</Text>
  </View>
);
const FastSales = () => {
  return (
    <ImageBackground
      source={require("../../assets/blob.svg")} // Replace 'path/to/your/image.jpg' with the actual path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 30, fontFamily: "ubuntu-italic-bold" }}>
            Fast Sales
          </Text>
        </View>
        {/*  */}
        <View>
          <View style={styles.containerFastSales}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={false}
              showsVerticalScrollIndicator={false} // Remove scroll indicator
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "red",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  containerFeaturedProd: {
    paddingHorizontal: 5,
  },
  headerTxt: {
    fontSize: 30,
    fontFamily: "ubuntu-italic-bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  productBox: {
    padding: 10,
    margin: 10,

    backgroundColor: "#D8DAD3",
    borderRadius: 5,
    width: 170,
    height: 230,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FastSales;
