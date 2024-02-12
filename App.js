import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <View className="flex-1 border border-red-500 flex justify-center items-center">
        <Text className=" text-red-200">Plena assignment app</Text>
      </View>
    </SafeAreaView>
  );
}
