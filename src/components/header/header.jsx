import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cartBagIcon, downIcon, searchIcon } from "../../constants/imageUrl";
import CartWithCount from "../cart/cartWithCount";

const Header = () => {
  return (
    <View className="bg-[#2A4BA0] flex px-6 pb-4 pt-6">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-white text-xl font-semibold">Hey, Rahul</Text>
        <CartWithCount/>
        {/* <Image
          source={{ uri: cartBagIcon }}
          resizeMode="contain"
          className="w-5 h-5"
        /> */}
      </View>
      <View className="flex flex-row items-center bg-[#153075] rounded-full py-4 px-6 mt-10">
        <TouchableOpacity>
          <Image
            source={{ uri: searchIcon }}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TextInput
          className="flex-1 ml-2 text-lg text-white"
          placeholder="Search products or store"
          placeholderTextColor="#8891A5"
        />
      </View>
      <View className="flex flex-row items-center justify-between mt-10">
        <View>
          <Text className="text-[#F8F9FB]/50 text-xs font-semibold">
            DELIVERY TO
          </Text>
          <View className="flex flex-row items-center">
            <Text className="text-[#F8F9FB] text-sm font-medium">
              Green Way 3000, Sylhet
            </Text>
            <TouchableOpacity>
              <Image
                source={{ uri: downIcon }}
                resizeMode="contain"
                className="w-3 h-3 ml-2"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="text-[#F8F9FB]/50 text-xs font-semibold">
            WITHIN
          </Text>
          <View className="flex flex-row items-center">
            <Text className="text-[#F8F9FB] text-sm font-medium">1 Hour</Text>
            <TouchableOpacity>
              <Image
                source={{ uri: downIcon }}
                resizeMode="contain"
                className="w-3 h-3 ml-2"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
