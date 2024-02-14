import { Text, View } from "react-native";
import ProductCard from "../productCard";
import { useEffect } from "react";
import axios from "axios";
import { useShopStore } from "../../store/shopStore";

const RecommendedSection = () => {
  const { setProducts, products } = useShopStore((state) => ({
    setProducts: state.setProducts,
    products: state.products,
  }));
  const getProducts = async () => {
    const products = await axios.get("https://dummyjson.com/products");
    setProducts(products.data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View className="mt-2">
      <Text className="text-2xl px-6 text-black font-normal mb-4">
        Recommended
      </Text>
      <View className=" flex flex-row flex-wrap px-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </View>
    </View>
  );
};

export default RecommendedSection;
