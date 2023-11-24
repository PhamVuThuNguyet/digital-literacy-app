import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: CustomColor.secondaryColor,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: CustomColor.primaryColor,
    margin: 12,
    padding: 12,
    borderRadius: 12,
  },
  avatar: {
    height: 60,
    width: 60,
    objectFit: "cover",
    borderRadius: "50%",
    borderWidth: 0.3,
    borderColor: "rgba(255, 255 ,255, 0.5)",
  },
  nameWrap: {
    display: "flex",
    marginLeft: 20,
    gap: 8,
  },
  username: {
    color: CustomColor.lightGrayColor_80,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: CustomColor.lightGrayColor,
  },
  item: {
    padding: 12,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: CustomColor.lightGrayColor_60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemText: {
    fontSize: 16,
    color: CustomColor.lightGrayColor,
  },
});
