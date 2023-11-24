import { observer, useLocalObservable } from "mobx-react";
import { useEffect, useState, useRef } from "react";
import Guess from "./Guess";
import Question from "./Question";
import Manager from "./Manager/Manager";
import GameHeader from "../Header";
import { Text, View, TouchableWithoutFeedback, ScrollView, Keyboard, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default observer(function WordGame() {
  const words = useSelector((state) => state.static.words);

  console.log("words", words);

  const inputRef = useRef(null);
  const navigate = useNavigation();
  const store = useLocalObservable(() => Manager);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const fetchWordGame = async () => {
    try {
      store.init([[{ special: words.special }, ...words.words]]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWordGame();
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true); // or some other action
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false); // or some other action
    });
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  // useEffect(() => {
  //   store.init()
  //   // window.addEventListener('keyup', store.handleKeyup)
  //   return () => {
  //     // window.removeEventListener('keyup', store.handleKeyup)
  //   }
  // }, []);

  const AddSomething = React.forwardRef((props, ref) => (
    <TextInput
      // editable={false}
      ref={ref}
    />
  ));

  const onSubmit = () => {
    store.submitGuess();
  };

  const onLineSelect = (n) => {
    this.inputRef.focus();
    store.setCurrentWord(n);
  };

  const renderQuestion = () => {
    if (!store.wordset[store.currentWord + 1]) return;
    return <Question question={store.wordset[store.currentWord + 1].question} />;
  };

  const renderButtonSubmit = () => {
    if (store.won) return;
    return (
      <View className="flex items-center">
        <TouchableOpacity
          onPress={() => {
            onSubmit();
          }}
        >
          <View className="w-40">
            <Text className="uppercase p-6 bg-red-700 text-center font-bold text-white mt-10">Hoàn tất</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButtonWord = () => {
    if (store.won) return;
    return (
      <View className="flex flex-row justify-evenly">
        {store.guesses.map((_, i) => {
          return (
            <TouchableOpacity
              key={i + 1}
              onPress={() => {
                onLineSelect(i);
              }}
            >
              <View className="bg-white aspect-square rounded-full p-2 flex justify-center items-center">
                <Text className="text-red-900 font-bold center">{i + 1}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <GameHeader />
      <ScrollView className="bg-red-500">
        <Text className="mb-10 p-8 bg-red-900 text-3xl text-center font-bold uppercase text-white">Trò chơi ô chữ</Text>
        {store.guesses.map((_, i) => (
          <>
            <Guess
              key={i}
              word={store.wordset[i + 1].word}
              guess={store.guesses[i]}
              isGuessed={store.isGuessed(i)}
              offset={4 - store.wordset[i + 1].letter}
              isFocus={i === store.currentWord && !store.won}
            />
          </>
        ))}
        <AddSomething
          ref={(ref) => {
            this.inputRef = ref;
          }}
        />
        {renderButtonWord()}
        {renderQuestion()}
        {store.won && <Text className="text-4xl my-10 text-white center font-bold">Chiến thắng!</Text>}
        {store.lost && <Text>You lost!</Text>}
        {(store.won || store.lost) && (
          <TouchableWithoutFeedback
            onPress={() => {
              store.init();
            }}
          >
            <View className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4">
              <Text>Chơi lại</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        {renderButtonSubmit()}
      </ScrollView>
    </>
  );
});
