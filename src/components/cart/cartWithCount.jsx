import { Image, View } from "react-native"
import { cartBagIcon } from "../../constants/imageUrl"

const CartWithCount = () => {
    return <View>
        <Image
          source={{ uri: cartBagIcon }}
          resizeMode="contain"
          className="w-8 h-8"
        />
    </View>
}