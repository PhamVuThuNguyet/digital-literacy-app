import React from "react";
import Introduction from "./screens/Introduction";
import Knowledge from "./screens/Knowledge";
import Game from "./screens/Game";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import CustomColor from "@app/assets/colors";

const bottomBarStyles = {
  height: 60,
  paddingHorizontal: 5,
  paddingBottom: 0,
  backgroundColor: CustomColor.whiteColor,
  position: "absolute",
  borderTopWidth: 0.5,
  borderTopColor: "rgba(0 ,0, 0, 0.25)",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const options = {
    tabBarShowLabel: false,
    headerShown: false,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: bottomBarStyles,
      })}
    >
      <Tab.Screen
        name="Introduction"
        component={Introduction}
        options={({ navigation, route }) => ({
          ...options,
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ focused }) => (
            <Icon
              color={
                focused ? CustomColor.primaryColor : CustomColor.blackIconColor
              }
              name={focused ? "home" : "home-outline"}
              size={26}
              type="ionicon"
            />
          ),
        })}
      />
      <Tab.Screen
        name="Knowledge"
        component={Knowledge}
        options={({ navigation, route }) => ({
          ...options,
          tabBarLabel: "Kiến thức",
          tabBarIcon: ({ focused }) => (
            <Icon
              color={
                focused ? CustomColor.primaryColor : CustomColor.blackIconColor
              }
              name={focused ? "school" : "school-outline"}
              size={28}
              type="material-community"
            />
          ),
        })}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={({ navigation, route }) => ({
          ...options,
          tabBarLabel: "Trò chơi",
          tabBarIcon: ({ focused }) => (
            <Icon
              color={
                focused ? CustomColor.primaryColor : CustomColor.blackIconColor
              }
              name={focused ? "game-controller" : "game-controller-outline"}
              size={26}
              type="ionicon"
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
          ...options,
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ focused }) => (
            <Icon
              color={
                focused ? CustomColor.primaryColor : CustomColor.blackIconColor
              }
              name={focused ? "person" : "person-outline"}
              size={26}
              type="ionicon"
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
