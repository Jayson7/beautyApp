import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ################################
import { Provider } from "react-redux";
import store from "./components/store/store";
// all screens
import Login from "./components/auth/login";
import Onboard from "./components/onboarder/onboard";
import Register from "./components/auth/register";

// ################################### config ##############3
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="onboard"
            component={Onboard}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
