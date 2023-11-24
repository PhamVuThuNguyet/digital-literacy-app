import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import { Icon } from "react-native-elements";

export default function GameResult({
  correctAnswer,
  totalQuestions,
  handleTestAgain,
  handleBackHome,
}) {
  return (
    <View style={[styles.container, styles.gameResult]}>
      <Icon
        color="#fff"
        name="checkmark-circle-outline"
        size={72}
        type="ionicon"
        onPress={() => setShowPassword(!showPassword)}
      />
      <Text style={styles.gameResultText}>
        Chúc mừng bạn đã hoàn thành bài kiểm tra trắc nghiệm với kết quả{" "}
        {correctAnswer}/{totalQuestions}.
      </Text>
      <View style={styles.gameResultButtonWrap}>
        <TouchableOpacity onPress={handleBackHome}>
          <View style={styles.gameResultButton}>
            <Text style={styles.gameResultButtonText}>Về trang chủ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTestAgain}>
          <View style={styles.gameResultButton}>
            <Text style={styles.gameResultButtonText}>Làm lại</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
