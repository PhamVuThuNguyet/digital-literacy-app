import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: CustomColor.primaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: -100,
    marginBottom: 48,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFF",
  },
  logoImage: {
    width: 75,
    height: 75,
  },
  formGroup: {
    width: "100%",
    marginTop: -32,
  },
  inputGroup: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 32,
  },
  inputLabel: {
    position: "absolute",
    top: "-15%",
    left: 20,
    backgroundColor: CustomColor.primaryColor,
    color: CustomColor.whiteColor,
    paddingLeft: 4,
    paddingRight: 4,
  },
  inputIconPassword: {
    position: "absolute",
    top: "30%",
    right: 10,
  },
  inputElement: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "solid",
    fontSize: 16,
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 12,
    color: CustomColor.whiteColor,
  },
  inputPasswordElement: {
    paddingRight: 36,
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: CustomColor.buttonColor,
    height: 44,
    marginTop: 32,
  },
  buttonText: {
    marginLeft: 12,
    fontSize: 16,
    color: CustomColor.whiteColor,
    width: 100,
    textAlign: "center",
  },
  forgotPasswordGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
  },
  forgotPasswordLabel: {
    color: CustomColor.whiteColor,
  },
  switchButtonBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  switchPageGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  switchPageButton: {
    color: CustomColor.buttonColor,
    fontWeight: "bold",
  },
  loading: {
    marginTop: 20
  }
});
