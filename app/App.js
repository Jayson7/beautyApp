import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

// ################################
import { Provider } from "react-redux";
import store from "./components/store/store";
// all screens
import Login from "./components/auth/login";
import Onboard from "./components/onboarder/onboard";
import Register from "./components/auth/register";
import HomeScreen from "./components/homeApp/homeScreen";

//

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// ################################### config ##############3

SplashScreen.preventAutoHideAsync();
//
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "mrt-mid": require("./assets/fonts/Montserrat-Medium.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  //

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  //

  if (!isLoaded) {
    return null;
  }

  //
  return (
    <Provider store={store} onLayout={handleOnLayout}>
      <PaperProvider>
        <NavigationContainer>
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
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => App);
