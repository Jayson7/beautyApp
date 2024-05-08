import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

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
    <View>
      <Text style={styles.headerTxt}>Featured Products</Text>
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
  headerTxt: {
    fontSize: 30,
    fontFamily: "ubuntu-italic-bold",
    color: "black",
    width: "50%",
    marginBottom: 20,

    textAlign: "center",
  },
  productBox: {
    padding: 10,
    margin: 10,

    backgroundColor: "#D8DAD3",
    borderRadius: 5,
    width: 190,
    height: 250,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
