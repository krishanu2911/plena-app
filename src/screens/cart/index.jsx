import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
const CartScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView className="flex-1 flex ">
        <HeaderV2 showCart={true} headerTitle={"Hello"} />
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
