import {
  Platform,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Header from "../../components/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import OfferSection from "../../components/offerSection";
import RecommendedSection from "../../components/recommendedSection";

const HomeScreen = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <StatusBar
        backgroundColor="#2A4BA0"
        style={Platform.OS === "android" ? "light" : "dark"}
      />
      <SafeAreaView edges={["top"]} className="flex-1 flex">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 bg-white"
        >
          <Header />
          <OfferSection />
          <RecommendedSection />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
