import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        swipeEnabled: true,
        swipeEdgeWidth: 1,
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
