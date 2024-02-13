import { createStackNavigator } from "@react-navigation/stack";
import { CartScreen, HomeScreen, SingleProductScreen } from "../screens";
import BottomNavigation from "./bottomNavigation";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{
        swipeEnabled: true,
        swipeEdgeWidth: 1,
        headerShown: false,
        drawerPosition: 'right',
      }} >
      <Stack.Screen name="home" component={BottomNavigation} />
      <Stack.Screen name="singleProduct" component={SingleProductScreen} />
      <Stack.Screen name="cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
