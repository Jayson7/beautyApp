import * as React from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ToggleButtonMenu from "../toggleButton";

const Drawer = createDrawerNavigator();

const AppBars = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <TouchableOpacity onPress={toggleDrawer}>
          <Appbar.Action icon={isOpen ? "close" : "menu"} />
        </TouchableOpacity>
      </Appbar.Header>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        {/* Content of the sidebar */}
        <TouchableOpacity style={styles.sidebarItem} onPress={() => {}}>
          {/* Sidebar item */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => {}}>
          {/* Sidebar item */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => {}}>
          {/* Sidebar item */}
        </TouchableOpacity>
      </Animated.View>
      <Drawer.Navigator
        drawerType="slide"
        drawerStyle={{ width: "70%" }}
        overlayColor="transparent"
        drawerContent={() => null}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* Screens */}
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#fff",
    zIndex: 1,
    elevation: 4,
  },
  sidebarItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default AppBars;
