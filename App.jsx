import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainStackNavigation from "./src/route/mainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <MainStackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
