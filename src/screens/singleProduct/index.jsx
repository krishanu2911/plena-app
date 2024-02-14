import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderV2 from "../../components/header/headerV2";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import { heartFilled, heartOutline } from "../../constants/imageUrl";
import { useShopStore } from "../../store/shopStore";

const SingleProductScreen = () => {
  const route = useRoute();
  const [prodData, setProdData] = useState(null);
  const getProductDetail = async (prodId) => {
    const prodresponse = await axios.get(
      `https://dummyjson.com/products/${prodId}`
    );
    console.log("Prod Data: ", prodresponse.data);
    setProdData(prodresponse.data);
  };
  const { addToCart, wishlistHandler, wishlistItem } = useShopStore(
    (state) => ({
      addToCart: state.addToCart,
      wishlistHandler: state.wishlistHandler,
      wishlistItem: state.wishlistItem,
    })
  );

  useEffect(() => {
    route.params.productId && getProductDetail(route.params.productId);
  }, [route.params.productId]);
  return (
    <>
      <StatusBar />
      <SafeAreaView edges={["top"]} className="flex-1 flex">
        <View className="flex-1">
          <HeaderV2 showCart={true} />
          {prodData && (
            <View className="relative">
              <Carousel images={prodData.images} />
              <TouchableOpacity
                onPress={() => wishlistHandler(prodData)}
                className="w-10 h-10 p-2 absolute top-4 right-4 bg-white rounded-xl"
              >
                <Image
                  source={{
                    uri: wishlistItem[prodData.id] ? heartFilled : heartOutline,
                  }}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default SingleProductScreen;
