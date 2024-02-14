import { Text, TouchableOpacity, View } from "react-native";

const CartItemCounter = ({ incrementHandler, decrementHandler, count }) => {
  return (
    <View className="flex flex-row items-center ">
      <TouchableOpacity onPress={decrementHandler}>
        <View className="w-10 h-10 rounded-full bg-[#E7ECF0] flex items-center justify-center">
          <Text className="text-xl text-black">-</Text>
        </View>
      </TouchableOpacity>
      <Text className="text-xl text-black mx-2">{count}</Text>
      <TouchableOpacity onPress={incrementHandler}>
        <View className="w-10 h-10 rounded-full bg-[#E7ECF0] flex items-center justify-center">
          <Text className="text-xl text-black">+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItemCounter;
