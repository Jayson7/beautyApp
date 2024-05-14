import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
    
const FastSales = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "ubuntu-italic-bold",
            color: "#566246",
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          Fast Sales
        </Text>
          </View>
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FastSales;
