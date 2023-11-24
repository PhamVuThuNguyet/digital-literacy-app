import CustomColor from "@app/assets/colors";
import styles from "@app/modules/Auth/styles";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, Image } from "react-native";
import RenderHtml from "react-native-render-html";

export default function KnowledgeDetail({ route, navigation }) {
  const { width } = useWindowDimensions();

  const { name, desc, img } = route.params;
  return (
    <View style={style.container}>
      <View>
        <View style={style.item}>
          <Image
            style={style.image}
            source={{
              uri: img || "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View style={style.text}>
            <Text
              style={{
                color: CustomColor.buttonColor,
                alignContent: "center",
                alignSelf: "center",
                alignItems: "center",
                textAlignVertical: "center",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 19,
              }}
            >
              {name}
            </Text>
          </View>
        </View>
        <View style={style.group}>
          <View>
            <RenderHtml contentWidth={width} source={{ html: desc }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: CustomColor.secondaryColor,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },

  group: {
    marginTop: 40,
    backgroundColor: "white",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    // textAlign: "center",
    width: "100%",
    height: 110,
    // marginLeft: 20,
    // marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",

    // flex: 1,
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
  },
  image: {
    width: 120,
    height: 110,
    // flex: 1,
    objectFit: "cover",
  },
});
