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
// ############################# Fast sales ########################

const FastSales = () => {
  const navigation = useNavigation();

  const [fastproducts, setFastProducts] = useState([]);
  const token = useSelector((state) => state.auth.access);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.229.132:8000/fastproducts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFastProducts(response.data);
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
    <View>
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {fastproducts.map((item) => (
          <View key={item.id} style={styles.productBox}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

//##################################### featured products ##############################################
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
//################################ HomeScreen###################
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
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <ScrollView style={styles.mainsContainer}>
          <FeaturedProducts />
          <FastSales />
          <View style={styles.productsContainer}>
            <Text>Products</Text>
            {products.map((item) => (
              <View key={item.id} style={styles.productBox}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                {/* Render other product fields as needed */}
              </View>
            ))}
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
  productsContainer: {
    paddingVertical: 20,
  },
  containerFast: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
