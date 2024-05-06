import React, { useCallback, useState } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { PaperProvider, Appbar } from "react-native-paper";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

// Importing screens
import Login from "./components/auth/login";
import Onboard from "./components/onboarder/onboard";
import Register from "./components/auth/register";
import HomeScreen from "./components/homeApp/homeScreen";

// Import store
import store from "./components/store/store";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const [isLoaded] = useFonts({
    "latp-black": require("./assets/fonts/Lato-Black.ttf"),
    "mont-black": require("./assets/fonts/Montserrat-Black.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen
      setDataLoaded(true); // Set dataLoaded to true once fonts are loaded
    }
  }, [isLoaded]);

  // Show AppLoading until fonts are loaded
  if (!dataLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }} onLayout={handleOnLayout}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="onboard"
                component={Onboard}
                options={{ title: "Welcome" }}
              />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
