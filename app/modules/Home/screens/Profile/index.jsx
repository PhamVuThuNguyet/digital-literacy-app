import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EditProfile from "./EditProfile";
import ProfileHome from "./ProfileHome";
const Stack = createNativeStackNavigator();
const options = {
  tabBarShowLabel: false,
  headerShown: false,
};
export default function Profile() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="ProfileHome" component={ProfileHome} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
