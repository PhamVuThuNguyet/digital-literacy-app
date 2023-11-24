import userApi from "@app/api/user.api";
import { login } from "@app/redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./Auth";
import RootScreen from "./Stacks";
import asyncStorageService from "@app/services/async-storage.service";
import questionApi from "@app/api/question.api";
import wordGameApi from "@app/api/word-game.api";
import knowledgeApi from "@app/api/knowledge.api";
import { setStaticData } from "@app/redux/slices/staticSlice";

const Stack = createNativeStackNavigator();

export default function Main() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);

  const fetchStaticData = async () => {
    try {
      const [questionRes, knowledgeRes, wordGameRes] = await Promise.all([
        questionApi.getQuestions({ isShow: true }),
        knowledgeApi.getKnowledge(),
        wordGameApi.getWordGame(),
      ]);

      const questions = questionRes.data;
      const knowledge = knowledgeRes.data[0];
      const words = wordGameRes.data[0];
      dispatch(
        setStaticData({
          questions,
          words,
          knowledge,
        })
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  async function getIsLoggedIn() {
    try {
      await fetchStaticData();
      const isLoggedIn = await asyncStorageService.getLoginState();
      if (isLoggedIn) {
        const userInfo = await asyncStorageService.getUserInfo();
        const { data } = await userApi(userInfo._id);
        dispatch(login(data));
      }
    } catch (error) {
      const userInfo = await asyncStorageService.getUserInfo();
      const user = userInfo ? JSON.parse(userInfo) : {};
      dispatch(login(user));
    }
  }

  if (isLoading) {
    return <AppLoading startAsync={getIsLoggedIn} onFinish={() => setIsLoading(false)} onError={console.warn} />;
  } else {
    return (
      <>
        {/* <ExitApp /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuth ? (
            <Stack.Screen name="Root" component={RootScreen} />
          ) : (
            <Stack.Screen name="Auth" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </>
    );
  }
}
