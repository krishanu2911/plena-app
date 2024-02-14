import { Image, Text, View, useWindowDimensions } from "react-native";
import { imgPlaceHolder } from "../../constants/imageUrl";

const OfferItem = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width: width * 0.62,
      }}
      className=" bg-[#F9B023] p-6 rounded-xl mr-2 flex flex-row justify-between items-center"
    >
      <Image
        source={{ uri: imgPlaceHolder }}
        resizeMode="contain"
        className="w-16 h-16"
      />
      <View className="flex items-start pl-4">
        <Text className="text-sm text-white">Get</Text>
        <Text className="text-lg font-bold text-white">50% OFF</Text>
        <Text className="text-sm text-white">On first 03 order</Text>
      </View>
    </View>
  );
};

export default OfferItem;
