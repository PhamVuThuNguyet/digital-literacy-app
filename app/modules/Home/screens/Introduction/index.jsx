import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Introduction({ navigation }) {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Năng lực số</Text>
      <TouchableOpacity onPress={() => handlePress("Knowledge")}>
        <View style={styles.item}>
          <Image style={styles.itemImage2} source={require("@app/assets/images/introduction-1.png")} />
          <Text style={styles.itemLabel}>Kiến thức</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("Game")}>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Trò chơi</Text>
          <Image style={styles.itemImage} source={require("@app/assets/images/introduction-2.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.item}>
          <Image style={styles.itemImage2} source={require("@app/assets/images/introduction-3.png")} />
          <Text style={styles.itemLabel}>Tư vấn</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
