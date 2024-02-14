import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
import { useShopStore } from "../../store/shopStore";
import ProductCard from "../../components/productCard";

const FavouriteScreen = () => {
  const { wishlistItem } = useShopStore((state) => ({
    wishlistItem: Object.values(state.wishlistItem),
  }));
  return (
    <>
      <StatusBar />
      <SafeAreaView edges={["top"]} className="flex-1 flex">
        <HeaderV2
          hideBackBtn={true}
          headerTitle={`Favourite Items`}
          showCart={true}
        />
        <ScrollView className="flex-1 px-6 py-4">
          {wishlistItem.length > 0 ? (
            <View className=" flex flex-row flex-wrap ">
              {wishlistItem.map((product) => (
                <ProductCard key={product.id} productData={product} />
              ))}
            </View>
          ) : (
            <View className="flex-1 flex items-center justify-center">
              <Text className="text-4xl font-semibold">No Items</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FavouriteScreen;
