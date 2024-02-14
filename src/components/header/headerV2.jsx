import { Image, Text, TouchableOpacity, View } from "react-native";
import { backIcon } from "../../constants/imageUrl";
import CartWithCount from "../cart/cartWithCount";
import { useNavigation } from "@react-navigation/native";

const HeaderV2 = ({ showCart, headerTitle }) => {
  const navigation = useNavigation();
  return (
    <View
      className={`w-full flex ${
        showCart ? "justify-between" : "justify-start"
      } flex-row py-4 px-6 items-center`}
    >
      <View className="flex flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="w-10 h-10 rounded-full bg-[#E7ECF0] flex items-center justify-center">
            <Image
              source={{ uri: backIcon }}
              resizeMode="contain"
              className="w-3 h-3"
            />
          </View>
        </TouchableOpacity>
        {headerTitle && (
          <Text className=" ml-4 text-base text-black">{headerTitle}</Text>
        )}
      </View>
      <CartWithCount darkTheme={true} />
    </View>
  );
};

export default HeaderV2;
