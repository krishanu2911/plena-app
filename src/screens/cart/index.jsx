import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
import { useShopStore } from "../../store/shopStore";
import CartItem from "../../components/cart/cartItem";
const CartScreen = () => {
  const cartItems = useShopStore((state) => Object.values(state.cartItem));
  return (
    <>
      <StatusBar />
      <SafeAreaView className="flex-1 flex ">
        <HeaderV2 showCart={true} headerTitle={"Hello"} />
        <ScrollView className="flex-1 px-6">
          {cartItems.map((product) => {
            return <CartItem key={product.item.id}  product={product} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
