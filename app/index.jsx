import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Main from "./modules";
import { store } from "./redux/store";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs(); //Ignore all log notifications

StatusBar.setBarStyle("light-content", true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
