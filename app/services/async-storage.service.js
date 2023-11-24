import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageService = {
  setToken: async ({ accessToken, user }) => {
    await AsyncStorage.setItem("@accessToken", accessToken);
    await AsyncStorage.setItem("@user", JSON.stringify(user));
    await AsyncStorage.setItem("@isLoggedIn", "true");
  },
  getAccessToken: async () => {
    const accessToken = await AsyncStorage.getItem("@accessToken");
    return accessToken;
  },
  getLoginState: async () => {
    const isLoggedIn = await AsyncStorage.getItem("@isLoggedIn");
    return isLoggedIn === "true";
  },
  getUserInfo: () => {
    return AsyncStorage.getItem("@user");
  },
  setUserInfo: (userInfo) => {
    return AsyncStorage.setItem("@user", JSON.stringify(userInfo));
  },
  clearAll: async () => {
    try {
      await AsyncStorage.removeItem("@accessToken");
      await AsyncStorage.removeItem("@user");
      await AsyncStorage.setItem("@isLoggedIn", "false");
    } catch (e) {
      // saving error
      console.log(e);
    }
  },
};

export default AsyncStorageService;
