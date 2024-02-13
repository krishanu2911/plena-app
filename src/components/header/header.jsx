import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cartBagIcon } from "../../constants/imageUrl";

const Header = () => {
  return (
    <View className="h-full w-full bg-[#2A4BA0] flex px-6 pt-6">
      <View className="flex flex-row justify-between items-end">
        <Text className="text-white text-2xl font-semibold">Hey, Rahul</Text>
        <Image
          source={{ uri: cartBagIcon }}
          resizeMode="contain"
          className="w-8 h-8"
        />
      </View>
    </View>
  );
};

export default Header;
