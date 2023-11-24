import styles from "@app/modules/Auth/styles";
import commonStyle from "@app/styles/common";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import CustomColor from "@app/assets/colors";

export default function KnowledgeHome({ navigation }) {
  const knowledge = useSelector((state) => state.static.knowledge);

  const { width } = useWindowDimensions();

  const navToList = () => {
    navigation.navigate("KnowledgeList", {
      knowledge,
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={style.heading}>Kiến thức</Text>
        </View>
        <View style={style.group}>
          <View>
            <Text style={style.title}>{knowledge?.title}</Text>
          </View>
          <View>
            <RenderHtml contentWidth={width} source={{ html: knowledge.description }} />
          </View>
        </View>
        <TouchableOpacity activeOpacity={1} style={style.buttonGroup} onPress={navToList}>
          <Text style={style.buttonText}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 40,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 24,
    color: "#771717",
    textAlign: "center",
    fontWeight: "bold",
  },
  list: {
    margin: 0,
    color: "white",
  },
  group: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },
  buttonGroup: {
    borderRadius: 12,
    backgroundColor: CustomColor.buttonColor,
    height: 44,
    marginTop: 32,
  },
  buttonText: {
    textAlign: "center",
    color: CustomColor.whiteColor,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
