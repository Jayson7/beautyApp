
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AppBars from "../Bar/appBar";

//
import SearchBar from "./searchBar";
//

// components
import FeaturedProducts from "./featuredProducts";
import FastSales from "./fastSales";

//

const HomeScreen = () => {
// 
  const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.229.132:8000/signin/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);




  // 
  return (
    <View style={styles.container}>
      <AppBars />

      <SafeAreaView>
        <SearchBar />
        <ScrollView style={styles.mainsContainer}>
          <FeaturedProducts />
          <FastSales />
          <View>
            <Text>Products</Text>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                  {/* Render other product fields as needed */}
                </View>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainsContainer: {
    backgroundColor: "#F1F2EB",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
    color: "black",
  },

  headerTxt: {
    fontSize: 30,
  },
});

export default HomeScreen;

// login screen does nothing to wrong password
// search screen
// appbar config
