import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";
const commonStyle = StyleSheet.create({
  textPrimary: {
    color: CustomColor.primaryColor,
  },
  secondPrimary: {
    color: CustomColor.buttonColor,
  },
  layout: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});
export default commonStyle;
