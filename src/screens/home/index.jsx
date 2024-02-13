import { Platform, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../components/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <>
      <StatusBar
        backgroundColor="#2A4BA0"
        style={Platform.OS === "android" ? "light" : "dark"}
      />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false} className="w-full h-full">
          {/* Home Header */}
          <View
            style={{
              minHeight: height * 0.3,
            }}
          >
            <Header />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
