import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import CustomColor from "@app/assets/colors";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GameHeader() {
  const navigation = useNavigation();

  const backAction = () => {
    Alert.alert("Thông báo", "Bạn thực sự muốn rời khỏi trò chơi?", [
      {
        text: "Hủy",
        onPress: () => null,
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backAction}>
        <Icon
          color={CustomColor.blackColor}
          name="arrow-back-outline"
          size={28}
          type="ionicon"
        />
      </TouchableOpacity>
      <Text style={styles.label}>Trò chơi</Text>
    </View>
  );
}
