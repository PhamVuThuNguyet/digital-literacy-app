import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MultipleChoiceGame from "../Game/MultipleChoice";
import WordGame from "../Game/Word";
import Home from "../Home";

const Stack = createNativeStackNavigator();

export default function RootStackNavigation() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MultipleChoiceGame" component={MultipleChoiceGame} />
      <Stack.Screen name="WordGame" component={WordGame} />
    </Stack.Navigator>
  );
}
