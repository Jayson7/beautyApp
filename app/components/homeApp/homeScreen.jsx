import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import AppBars from "../Bar/appBar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
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
        const response = await axios.get("http://10.0.2.2:8000/fastproducts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
    <View
      style={{
        paddingHorizontal: 2,
        alignItems: "center",
        marginVertical: 60,
      }}
    >
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
            marginVertical: 20,
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
            <View
              style={{
                width: "100%",
                alignItems: "top",
                justifyContent: "top",
              }}
            >
              <Image
                style={styles.productImage}
                source={{ uri: item.image_url }}
              />
            </View>
            <View style={styles.productDescription}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "latp-reg",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
              <Text style={{}}>{item.price} Naira</Text>
            </View>

            <View>
              <Button
                icon="shopping-outline"
                mode="contained"
                style={{
                  marginBottom: 15,
                  borderRadius: 10,
                  backgroundColor: "#171738",
                  color: "#DFF3E4",
                }}
                onPress={() => console.log("Pressed")}
              >
                Add to Cart
              </Button>
            </View>
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
        const response = await axios.get("http://10.0.2.2:8000/fproducts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
            <View
              style={{
                width: "100%",
                alignItems: "top",
                justifyContent: "top",
              }}
            >
              <Image
                style={styles.productImage}
                source={{ uri: item.image_url }}
              />
            </View>
            <View style={styles.productDescription}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "latp-reg",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
              <Text style={{}}>{item.price} Naira</Text>
            </View>

            <View>
              <Button
                icon="shopping-outline"
                mode="contained"
                style={{
                  marginBottom: 15,
                  borderRadius: 10,
                  backgroundColor: "#171738",
                  color: "#DFF3E4",
                }}
                onPress={() => console.log("Pressed")}
              >
                Add to Cart
              </Button>
            </View>
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
          const response = await axios.get("http://10.0.2.2:8000/productlist", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171738",
  },
  mainsContainer: {
    backgroundColor: "#DFF3E4",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
    color: "black",
  },
  headerTxt: {
    fontSize: 20,
    fontFamily: "ubuntu-italic-bold",
    color: "#566246",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  containerFeaturedProd: {
    paddingHorizontal: 2,
    alignItems: "center",
  },
  featureHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  productBox: {
    padding: 0,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 190,
    height: 310,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productsContainer: {
    paddingVertical: 0,
  },
  containerFast: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  productImage: {
    width: "100%",
    margin: 0,

    height: 198,
  },
  productDescription: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default HomeScreen;
