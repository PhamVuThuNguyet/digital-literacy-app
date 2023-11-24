import React, { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/core";
import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";

const AuthStack = createNativeStackNavigator();

export default function AuthStackNagivation() {
  const route = useRoute();
  useEffect(() => {
    if (route.name === "Auth") {
      const backAction = () => {
        Alert.alert(null, "Bạn chắc chắn muốn thoát ứng dụng ?", [
          {
            text: "Huỷ bỏ",
            onPress: () => null,
            style: "cancel",
          },
          { text: "Thoát", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }
  }, []);

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
