import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const carouselRef = useRef(null);
  const renderItem = ({ item }) => {
    return (
      <View key={item} style={{ width: screenWidth }}>
        <Image
          source={{ uri: item }}
          resizeMode="contain"
          className="w-full h-56"
        />
      </View>
    );
  };

  const RenderIndicator = () => (
    <View className="flex flex-row">
      {images.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            carouselRef.current.scrollToIndex({ index });
          }}
          className={`w-6 h-1 rounded-full ${
            activeIndex === index ? "bg-[#FFC83A] " : "bg-[#E7ECF0]"
          } mr-2`}
        />
      ))}
    </View>
  );

  return (
    <View className="w-full relative">
      <FlatList
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setActiveIndex(index);
        }}
      />
      <View className=" absolute bottom-4 left-6">
        <RenderIndicator />
      </View>
    </View>
  );
};

export default Carousel;
