import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";

export default styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: CustomColor.whiteColor,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: "#771717",
    borderBottomWidth: 0.2,
    gap: 20
  },
  label: {
    fontSize: 18
  }
});
