import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: CustomColor.secondaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 24,
    gap: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFF",
    textTransform: "uppercase",
    letterSpacing: 1,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: 8,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
  },
  itemLabel: {
    color: "#771717",
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: 0.5,
    flex: 1,
    textAlign: "center",
  },
  itemImage: {
    // width: 160,
    objectFit: "cover",
    flex: 1,
    width: "100%",
  },
  itemImage2: {
    width: 200,
    objectFit: "cover",
  },
});
