import { SplashScreen } from "expo-router";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router";

import { Slot } from "expo-router";
import App from "./index";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default Layout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <App />
    </SafeAreaView>
  );
};
