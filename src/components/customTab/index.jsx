import { Image, Text, TouchableOpacity, View } from "react-native";

const CustomTab = ({ tabName, iconUrl, activeIconUrl, active, onPress }) => {
  return (
    <View className="flex-1 relative">
      {active ? (
        <View
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: [{ translateX: -30 }],
            borderRadius: 28, // Half of width/height to make it rounded-full
            borderWidth: 4, // Set the thickness of the border
            borderColor: "rgba(255, 255, 255, 1)",
          }}
          className="w-14 h-14 bg-[#1B262E] rounded-full flex items-center justify-center"
        >
          <Image
            source={{ uri: activeIconUrl }}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          className=" flex-1 flex items-center justify-center"
        >
          <Image
            source={{ uri: iconUrl }}
            resizeMode="contain"
            className="w-6 h-6"
          />
          <Text className="text-xs">{tabName}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTab;
