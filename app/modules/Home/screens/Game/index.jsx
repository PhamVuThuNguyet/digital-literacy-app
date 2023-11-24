import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Game({ navigation }) {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trò chơi</Text>
      <TouchableOpacity
        onPress={() => handlePress("MultipleChoiceGame")}
      >
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Trắc nghiệm</Text>
          <Image
            style={styles.itemImage}
            source={require("@app/assets/images/game-1.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("WordGame")}>
        <View style={styles.item}>
          <Image
            style={styles.itemImage2}
            source={require("@app/assets/images/game-2.png")}
          />
          <Text style={styles.itemLabel}>Ô chữ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
