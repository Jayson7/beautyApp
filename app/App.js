import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Onboard from "./components/onboarder/onboard";
export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Onboard />
    </View>
  );
}
