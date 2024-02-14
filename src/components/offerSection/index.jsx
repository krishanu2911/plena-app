import { ScrollView } from "react-native-gesture-handler";
import OfferItem from "./offerItem";

const OfferSection = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      className="w-full h-full pl-6 py-6"
    >
      <OfferItem />
      <OfferItem />
      <OfferItem />
    </ScrollView>
  );
};

export default OfferSection;
