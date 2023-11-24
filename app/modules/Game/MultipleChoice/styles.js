import { StyleSheet } from "react-native";
import CustomColor from "@app/assets/colors";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: CustomColor.secondaryColor,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 24,
  },
  loading: {
    marginTop: 20,
  },
  questionItem: {
    marginTop: 20,
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
  },
  questionTitleWrap: {
    backgroundColor: "#771717",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  questionTitle: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 22,
    color: CustomColor.whiteColor,
  },
  noData: {
    color: CustomColor.whiteColor,
  },
  scrollView: {
    // maxHeight: '50%',
    flex: 1,
  },
  questionChoices: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12",
  },
  questionChoiceWrap: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: CustomColor.whiteColor,
  },
  questionChoice: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
  },
  selectedAnswerWrap: {
    backgroundColor: "#2C8A57",
  },
  selectedAnswer: {
    color: CustomColor.whiteColor,
  },
  correctAnswerWrap: {
    backgroundColor: CustomColor.greenColor,
  },
  correctAnswer: {
    color: CustomColor.whiteColor,
  },
  submitButton: {
    backgroundColor: "#771717",
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
  },
  submitButtonText: {
    color: CustomColor.whiteColor,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 600,
  },
  result: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  resultItem: {
    flex: 1,
    backgroundColor: CustomColor.blueColor,
    padding: 20,
    borderColor: CustomColor.secondaryColor,
    borderWidth: 0.5,
  },
  resultItemLabel: {
    color: CustomColor.whiteColor,
    textAlign: "center",
    fontSize: 32,
    fontWeight: 700,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.3, height: 0.3 },
    textShadowRadius: 2,
  },
  resultItemValue: {
    color: "#384470",
    textAlign: "center",
    fontSize: 40,
    letterSpacing: 0.5,
    marginTop: 12,
    fontWeight: 700,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.3, height: 0.3 },
    textShadowRadius: 2,
  },
  backgroundBright: {
    backgroundColor: "#A2CCB6",
  },
  colorBright: {
    color: "#598D71",
  },
  disabledButton: {
    backgroundColor: CustomColor.lightGrayColor,
  },
  gameResult: {
    paddingTop: 100,
    alignItems: "center",
  },
  gameResultText: {
    marginTop: 32,
    textAlign: "center",
    color: CustomColor.whiteColor,
    fontSize: 18,
    fontWeight: 600,
  },
  gameResultButtonWrap: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  gameResultButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#771717",
    borderRadius: 8,
  },
  gameResultButtonText: {
    color: CustomColor.whiteColor,
    fontSize: 16,
    fontWeight: 600
  },
});
