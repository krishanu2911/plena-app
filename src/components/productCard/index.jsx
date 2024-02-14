import { Image, Text, TouchableOpacity, View } from "react-native";
import { heartOutline, heartFilled } from "../../constants/imageUrl";
import { useShopStore } from "../../store/shopStore";

const ProductCard = ({ productData }) => {
  const { addToCart, wishlistHandler, wishlistItem } = useShopStore(
    (state) => ({
      addToCart: state.addToCart,
      wishlistHandler: state.wishlistHandler,
      wishlistItem: state.wishlistItem,
    })
  );

  return (
    <View className="w-[50%] h-64 p-2">
      <View className="flex relative justify-between flex-1 rounded-xl bg-[#F8F9FB]">
        <Image
          source={{ uri: productData.thumbnail }}
          resizeMode="cover"
          className=" w-full h-[65%] rounded-t-xl"
        />
        <View className="flex-1 px-4 py-2 flex flex-row justify-between items-center">
          <View className="flex-1 mr-2">
            <Text className="text-base">${productData.price}</Text>
            <Text className="text-[#616A7D] text-xs">{productData.title}</Text>
          </View>
          <TouchableOpacity onPress={() => addToCart(productData)}>
            <View className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2A4BA0]">
              <Text className="text-white text-xl">+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => wishlistHandler(productData)}
          className="w-6 h-6 absolute top-4 left-4"
        >
          <Image
            source={{
              uri: wishlistItem[productData.id] ? heartFilled : heartOutline,
            }}
            resizeMode="contain"
            className="w-full h-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
