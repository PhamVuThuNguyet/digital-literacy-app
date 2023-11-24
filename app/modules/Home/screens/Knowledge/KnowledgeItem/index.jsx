import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import CustomColor from "@app/assets/colors";
import { TouchableOpacity } from "react-native";

export default function KnowledgeItem({ navigation, item }) {
  const { name, img, desc } = item;
  const navToList = () => {
    navigation.navigate("KnowledgeDetail", { name, img, desc });
  };
  return (
    <TouchableOpacity onPress={() => navToList()} style={styles.item} activeOpacity={1}>
      <Image
        style={styles.image}
        source={{
          uri: img || "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View style={styles.text}>
        <Text
          style={{
            color: CustomColor.buttonColor,
            fontWeight: "600",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 110,
    marginTop: 20,
    backgroundColor: "white",
  },
  text: {
    margin: 30,
    flexGrow: 1,
    // padding: 20,
    textAlign: "center",
    overflow: "scroll",
    textWrap: "wrap",
    width: "100%",
    flex: 3,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 110,
    // flex: 1,
    objectFit: "cover",
  },
});
