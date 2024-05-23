import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import AppBars from "../Bar/appBar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Components
import SearchBar from "./searchBar";
import FastSales from "./fastSales";

const FeaturedProducts = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.auth.access);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.229.132:8000/fproducts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response.status === 401) {
          navigation.navigate("login");
          Alert.alert("Session Expired", "Please login again");
        }
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <View style={styles.containerFeaturedProd}>
      <View style={styles.featureHeader}>
        <Text style={styles.headerTxt}>Featured Products</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {products.map((item) => (
          <View key={item.id} style={styles.productBox}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.auth.access);

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
            <ScrollView>
              {products.map((item) => (
                <View key={item.id}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                  {/* Render other product fields as needed */}
                </View>
              ))}
            </ScrollView>
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
  containerFeaturedProd: {
    paddingHorizontal: 5,
  },
  featureHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTxt: {
    fontSize: 30,
    fontFamily: "ubuntu-italic-bold",
    color: "black",
  },
  scrollContainer: {
    flexDirection: "row",
  },
  productBox: {
    padding: 10,
    margin: 10,
    backgroundColor: "#D8DAD3",
    borderRadius: 5,
    width: 170,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
