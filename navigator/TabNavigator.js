import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchedScreen from "../screens/SearchedScreen";
import CheckProduct from "../screens/CheckProduct";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Check: CheckProduct
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ff6b81"
      },
      headerTintColor: "#fff"
    }
  }
);

const Navigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Entypo
            name="home"
            size={focused ? 25 : 21}
            color={focused ? "#f1f2f6" : tintColor}
          />
        )
      }
    },
    Searched: {
      screen: SearchedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialIcons
            name="history"
            size={focused ? 25 : 21}
            color={focused ? "#f1f2f6" : tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#ED4C67" }
  }
);

export default createAppContainer(Navigator);
