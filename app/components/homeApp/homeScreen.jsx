import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import AppBars from "../Bar/appBar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Components
import SearchBar from "./searchBar";
import FeaturedProducts from "./featuredProducts";
import FastSales from "./fastSales";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(
            "http://192.168.229.132:8000/productlist",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProducts(response.data);
        } else {
          console.error("Please log in.");
          navigation.navigate("login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

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
