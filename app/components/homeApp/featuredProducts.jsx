import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
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

const FeaturedProducts = () => {
  return (
    <View style={styles.containerFeaturedProd}>
      <View style={styles.featureHeader}>
        <Text style={styles.headerTxt}>Featured Products</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Remove scroll indicator
      />
    </View>
  );
};

export default FeaturedProducts;

const styles = StyleSheet.create({
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

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: {
      width: 200,
      height: 200,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
});
