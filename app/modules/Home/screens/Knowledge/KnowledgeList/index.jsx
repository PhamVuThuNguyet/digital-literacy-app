import CustomColor from "@app/assets/colors";
import styles from "@app/modules/Auth/styles";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import KnowledgeItem from "../KnowledgeItem";

export default function KnowledgeList({ route, navigation }) {
  const { knowledge } = route.params;

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={style.title}>Chọn kĩ năng muốn tìm hiểu</Text>
          </View>
          <View>
            {knowledge.data.map((item, index) => (
              <KnowledgeItem navigation={navigation} key={index} item={item}></KnowledgeItem>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: CustomColor.primaryColor,
  },
  title: {
    marginTop: 32,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  list: {
    margin: 0,
    color: "white",
  },
});
