import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import { heartFilled, heartOutline } from "../../constants/imageUrl";
import { useShopStore } from "../../store/shopStore";

const SingleProductScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [prodData, setProdData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProductDetail = async (prodId) => {
    try {
      const prodresponse = await axios.get(
        `https://dummyjson.com/products/${prodId}`
      );
      setProdData(prodresponse.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const { addToCart, wishlistHandler, wishlistItem } = useShopStore(
    (state) => ({
      addToCart: state.addToCart,
      wishlistHandler: state.wishlistHandler,
      wishlistItem: state.wishlistItem,
    })
  );

  useEffect(() => {
    setLoading(true);
    route.params.productId && getProductDetail(route.params.productId);
  }, [route.params.productId]);

  const buyNowHandler = () => {
    addToCart(prodData);
    navigation.navigate("cart");
  };

  const addToCartHandler = () => {
    addToCart(prodData);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView edges={["top"]} className="flex-1 flex">
        <View className="flex-1">
          <HeaderV2 showCart={true} />
          {loading ? (
            <View className="flex-1 flex items-center justify-center">
              <Text className="text-4xl font-semibold">Loading....</Text>
            </View>
          ) : (
            <View className="flex-1">
              <View className="w-full px-6">
                <Text className=" text-4xl mb-2 text-black font-light">
                  {prodData?.brand}
                </Text>
                <Text className=" mb-2 text-4xl font-bold text-black">
                  {prodData?.title}
                </Text>
              </View>
              {prodData && (
                <View className="relative">
                  <Carousel images={prodData.images} />
                  <TouchableOpacity
                    onPress={() => wishlistHandler(prodData)}
                    className="w-10 h-10 p-2 absolute top-4 right-4 bg-white rounded-xl"
                  >
                    <Image
                      source={{
                        uri: wishlistItem[prodData.id]
                          ? heartFilled
                          : heartOutline,
                      }}
                      resizeMode="contain"
                      className="w-full h-full"
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View className="flex-1 px-6 py-4">
                <View className="flex flex-row items-center">
                  <Text className="text-2xl mr-4 font-bold text-[#153075]">
                    ${prodData?.price}
                  </Text>
                  <View className="bg-[#153075] px-4 py-1 rounded-full">
                    <Text className="text-base text-white">$22.9 off</Text>
                  </View>
                </View>
                <View className="flex flex-row my-8">
                  <TouchableOpacity
                    onPress={addToCartHandler}
                    className="border border-[#153075] flex-1 p-4 rounded-3xl mr-6"
                  >
                    <Text className="text-xl text-[#153075] text-center ">
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={buyNowHandler}
                    className="bg-[#153075] flex-1 p-4 rounded-3xl"
                  >
                    <Text className="text-xl text-white text-center ">
                      Buy now
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text className=" text-xl mb-2">Detail</Text>
                  <Text className=" text-xl text-black/50">
                    {prodData?.description}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default SingleProductScreen;
