import { Image, Text, View } from "react-native";
import CartItemCounter from "./cartItemCounter";
import { useShopStore } from "../../store/shopStore";

const CartItem = ({ product }) => {
  const { addToCart, removeFromCart } = useShopStore((state) => ({
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));

  return (
    <View className="w-full flex flex-row justify-between items-center mb-2 py-6 border-b border-[#EBEBFB] ">
      <View className="flex flex-row items-center">
        <Image
          source={{ uri: product.item.thumbnail }}
          resizeMode="cover"
          className="w-14 h-14"
        />
        <View className="flex items-start ml-4">
          <Text className="text-sm text-black font-semibold">
            {product.item.title}
          </Text>
          <Text className="text-sm text-black">${product.item.price}</Text>
        </View>
      </View>
      <CartItemCounter
        count={product.count}
        decrementHandler={() => removeFromCart(product.item)}
        incrementHandler={() => addToCart(product.item)}
      />
    </View>
  );
};

export default CartItem;
