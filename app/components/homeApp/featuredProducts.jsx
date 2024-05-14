import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

//
import { useNavigation } from "@react-navigation/native";

//

const FeaturedProducts = () => {
  //
  const navigation = useNavigation();
  //
  const [products, setProducts] = useState([]);

  const token = useSelector((state) => state.auth.access);
  const dispatch = useDispatch();

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
        // Check if error status is 401 (Unauthorized) indicating token expiration
        if (error.response.status === 401) {
          // Dispatch action to refresh token
          navigation.navigate("login");
          Alert("Session Expired, Please login");
        }
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const renderProductItem = ({ item }) => (
    <View style={styles.productBox}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.containerFeaturedProd}>
      <View style={styles.featureHeader}>
        <Text style={styles.headerTxt}>Featured Products</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderProductItem}
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
