import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainStackNavigation from './src/route/mainStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <StatusBar style="auto" />
          <MainStackNavigation />
          {/* <View className="flex-1 border border-red-500 flex justify-center items-center">
            <Text className=" text-red-200">Plena assignment app</Text>
            <Text></Text>
          </View> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
