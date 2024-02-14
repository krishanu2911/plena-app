import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavouriteScreen, HomeScreen } from "../screens";
import { View } from "react-native";
import CustomTab from "../components/customTab";
import { categoryBlack, categoryYellow, heartFilled, heartOutline, homeBlack, homeYellow, threeDot } from "../constants/imageUrl";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
        swipeEdgeWidth: 1,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarButton: (props) => (
            <CustomTab
              active={props.accessibilityState.selected}
              tabName="Home"
              iconUrl={homeBlack}
              activeIconUrl={homeYellow}
              {...props}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => (
            <CustomTab
              active={props.accessibilityState.selected}
              tabName="Categories"
              iconUrl={categoryBlack}
              activeIconUrl={categoryYellow}
              {...props}
            />
          ),
        }}
        name="Categories"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => (
            <CustomTab
              active={props.accessibilityState.selected}
              tabName="Favourite"
              iconUrl={heartOutline}
              activeIconUrl={heartFilled}
              {...props}
            />
          ),
        }}
        name="Favourite"
        component={FavouriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => (
            <CustomTab
              active={props.accessibilityState.selected}
              tabName="More"
              iconUrl={threeDot}
              {...props}
            />
          ),
        }}
        name="More"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
