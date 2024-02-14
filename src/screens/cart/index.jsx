import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
import { useShopStore } from "../../store/shopStore";
import CartItem from "../../components/cart/cartItem";
import CheckoutSection from "../../components/cart/checkoutSection";
const CartScreen = () => {
  const cartItems = useShopStore((state) => Object.values(state.cartItem));
  return (
    <>
      <StatusBar />
      <SafeAreaView edges={["top"]} className="flex-1 flex">
        <View className="flex-1">
          <HeaderV2 headerTitle={`Shoping Cart`} showCart={false} />
          {cartItems.length > 0 ? (
            <View className="flex-1">
              <ScrollView className="flex-1 px-6">
                {cartItems.map((product) => {
                  return <CartItem key={product.item.id} product={product} />;
                })}
              </ScrollView>
              <View className="absolute bottom-0 left-0 right-0 px-4">
                <CheckoutSection />
              </View>
            </View>
          ) : (
            <View className="flex-1 flex items-center justify-center"><Text className="text-4xl font-semibold">Empty Cart</Text></View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
