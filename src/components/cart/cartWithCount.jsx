import { Image, Text, TouchableOpacity, View } from "react-native";
import { cartBagIcon, cartDarkBagIcon } from "../../constants/imageUrl";
import { useShopStore } from "../../store/shopStore";
import { useNavigation } from "@react-navigation/native";

const CartWithCount = ({darkTheme}) => {
  const navigation = useNavigation();
  const cartItems = useShopStore((state) => Object.values(state.cartItem));
  console.log("cartItems from store", cartItems);
  const count = cartItems.reduce((acc, crr) => {
    return acc + crr.count;
  }, 0);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("cart")} className="relative">
      <Image
        source={{ uri: darkTheme ? cartDarkBagIcon : cartBagIcon }}
        resizeMode="contain"
        className="w-6 h-6"
      />
      {count > 0 && (
        <View className=" bg-[#FFC83A] rounded-full absolute -top-1 flex items-center justify-center -right-2 w-5 h-5">
          <Text className="text-xs text-white">{count || 0}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartWithCount;
