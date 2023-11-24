import { View, Text, StyleSheet } from "react-native";
import React from "react";
import KnowledgeHome from "./KnowledgeHome";
import KnowledgeList from "./KnowledgeList";
import KnowledgeDetail from "./KnowledgeDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const options = {
  tabBarShowLabel: false,
  headerShown: false,
};
export default function Knowledge({ navigation }) {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="KnowledgeHome" component={KnowledgeHome} />
      <Stack.Screen name="KnowledgeList" component={KnowledgeList} />
      <Stack.Screen name="KnowledgeDetail" component={KnowledgeDetail} />
    </Stack.Navigator>
  );
}
