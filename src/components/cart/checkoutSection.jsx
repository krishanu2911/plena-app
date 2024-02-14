import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useShopStore } from "../../store/shopStore";

const CheckoutSection = () => {
  const { height } = useWindowDimensions();
  const cartItems = useShopStore((state) => Object.values(state.cartItem));
  const subtotal = cartItems.reduce((acc, crr) => {
    return acc + crr.count * crr.item.price;
  }, 0);
  return (
    <View
      style={{ minHeight: height * 0.3 }}
      className=" w-full px-4 py-6 flex justify-between rounded-t-3xl bg-[#E7ECF0]"
    >
      <View className="w-full">
        <View className="flex flex-row w-full justify-between px-2 mb-2">
          <Text className="text-base text-black/50">Subtotal</Text>
          <Text className="text-base text-black font-semibold">${subtotal}</Text>
        </View>
        <View className="flex flex-row w-full justify-between px-2 mb-2">
          <Text className="text-base text-black/50">Delivery</Text>
          <Text className="text-base text-black font-semibold">$2</Text>
        </View>
        <View className="flex flex-row w-full justify-between px-2 mb-2">
          <Text className="text-base text-black/50">Total</Text>
          <Text className="text-base text-black font-semibold">${subtotal + 2}</Text>
        </View>
      </View>

      <TouchableOpacity>
        <View className="w-full py-5 rounded-2xl bg-[#2A4BA0]">
          <Text className="text-white text-center">Proceed to checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutSection;
