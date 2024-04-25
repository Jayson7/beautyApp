import * as React from "react";
import { ToggleButton } from "react-native-paper";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator({ navigation });

const ToggleButtonMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuTogger = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  const translateX = React.useRef(new Animated.Value(-300)).current;

  const slideIn = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(translateX, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    if (isOpen) {
      slideIn();
    } else {
      slideOut();
    }
  }, [isOpen]);

  return (
    <ToggleButton
      icon="menu"
      value="menu"
      status={status}
      style={{ backgroundColor: "transparent" }}
      onPress={menuTogger}
    />
  );
};

export default ToggleButtonMenu;
