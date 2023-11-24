import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import GameHeader from "../Header";
import GameResult from "./Result";
import styles from "./styles";

export default function MultipleChoiceGame() {
  const questions = useSelector((state) => state.static.questions);
  const navigate = useNavigation();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [hasResult, setHasResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [gameResult, setGameResult] = useState(false);

  const handlePressAnswer = (answer) => {
    if (hasResult) return;
    if (answer === selectedAnswer) {
      setSelectedAnswer("");
    } else {
      setSelectedAnswer(answer);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;
    setHasResult(true);
    if (questions[currentQuestion].answers.includes(selectedAnswer)) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setGameResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setHasResult(false);
      setSelectedAnswer("");
    }
  };

  const handleTestAgain = async () => {
    setGameResult(false);
    setHasResult(false);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setCorrectAnswer(0);
  };

  const handleBackHome = () => {
    navigate.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <>
      <GameHeader />
      {gameResult ? (
        <GameResult
          correctAnswer={correctAnswer}
          totalQuestions={questions.length}
          handleTestAgain={handleTestAgain}
          handleBackHome={handleBackHome}
        />
      ) : (
        <View style={styles.container}>
          {questions.length > 0 ? (
            <View style={styles.questionItem}>
              <View style={styles.questionTitleWrap}>
                <Text style={styles.questionTitle}>
                  {currentQuestion + 1}. {questions[currentQuestion].question}
                </Text>
              </View>
              <ScrollView style={styles.scrollView}>
                <View style={styles.questionChoices}>
                  {questions[currentQuestion].choices.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePressAnswer(item)}>
                      {item && (
                        <View
                          style={[
                            styles.questionChoiceWrap,
                            selectedAnswer === item ? styles.selectedAnswerWrap : "",
                            hasResult && questions[currentQuestion].answers.includes(item) ? styles.correctAnswerWrap : "",
                          ]}
                        >
                          <Text
                            style={[
                              styles.questionChoice,
                              selectedAnswer === item ? styles.selectedAnswer : "",
                              hasResult && questions[currentQuestion].answers.includes(item) ? styles.correctAnswer : "",
                            ]}
                          >
                            {item}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
              {hasResult ? (
                <TouchableOpacity onPress={handleNextQuestion}>
                  <View style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                      {currentQuestion === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleCheckAnswer}>
                  <View style={[styles.submitButton, !selectedAnswer ? styles.disabledButton : ""]}>
                    <Text style={styles.submitButtonText}>Kiểm tra</Text>
                  </View>
                </TouchableOpacity>
              )}
              <View style={styles.result}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultItemLabel}>Câu hỏi</Text>
                  <Text style={[styles.resultItemValue]}>
                    {currentQuestion < 9 ? "0" + (currentQuestion + 1) : currentQuestion + 1}
                  </Text>
                </View>
                <View style={[styles.resultItem, styles.backgroundBright]}>
                  <Text style={styles.resultItemLabel}>Câu đúng</Text>
                  <Text style={[styles.resultItemValue, styles.colorBright]}>
                    {correctAnswer < 10 ? "0" + correctAnswer : correctAnswer}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.noData}>Hiện không có câu hỏi nào</Text>
          )}
        </View>
      )}
    </>
  );
}
