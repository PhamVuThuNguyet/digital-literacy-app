import { observer, useLocalObservable } from 'mobx-react';
import { useEffect, useState, useRef } from 'react'
import Guess from './Guess'
import Question from './Question'
import Manager from './Manager/Manager'
import GameHeader from '../Header';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TextInput
} from "react-native";
import React from 'react';
import { CommonActions, useNavigation } from "@react-navigation/native";

export default observer(function WordGame() {
  const inputRef = useRef(null);
  const navigate = useNavigation();
  const store = useLocalObservable(() => Manager);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    store.init();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onSubmit = () => {
    console.log(inputRef);
    if (inputRef) inputRef.current.clear();
    store.submitGuess();
  }

  const onLineSelect = (n) => {
    store.setCurrentWord(n);
  }

  const renderQuestion = () => {
    if (!store.wordset[store.currentWord + 1]) return;
    if (store.won) {
      return (
        <Question
          question={'Ô đặc biệt\n' + store.special.join('')}
        />
      )
    } else {
      return (
        <Question
          question={store.wordset[store.currentWord + 1].question}
        />
      )
    }
  }

  const renderInput = () => {
    if (store.won) return;
    return (
      <View className="px-4 py-4">
        <TextInput
          className="border p-2 border-white text-white font-bold"
          ref={inputRef}
          onChangeText={(t) => { store.handleText(t) }}
        />
      </View>
    )
  }

  const renderButtonSubmit = () => {
    if (store.won) return;
    return (
      <View className='flex items-center'>
        <TouchableOpacity onPress={() => { onSubmit() }} >
          <View className='w-40'>
            <Text className="uppercase p-6 bg-red-700 text-center font-bold text-white">Hoàn tất</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderButtonWord = () => {
    if (store.won) return;
    return (
      <View className='flex flex-row justify-evenly mt-10'>
        {
          store.guesses.map((_, i) => {
            return (
              <TouchableOpacity key={i + 1} onPress={() => { onLineSelect(i) }}>
                <View className='bg-white aspect-square rounded-full p-2 flex justify-center items-center'>
                  <Text className='text-red-900 font-bold center'>{i + 1}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <>
      <GameHeader />
      <ScrollView className='bg-red-500'>
        <Text className="mb-10 p-8 bg-red-900 text-3xl text-center font-bold uppercase text-white">
          Trò chơi ô chữ
        </Text>
        <View className='flex items-center justify-center'>
          <View>
            {store.guesses.map((_, i) => (
              <>
                <Guess
                  key={i}
                  word={store.wordset[i + 1].word}
                  guess={store.guesses[i]}
                  isGuessed={store.isGuessed(i)}
                  longest={store.longest}
                  offset={store.longest - store.wordset[i + 1].letter}
                  isFocus={i === store.currentWord && !store.won}
                />
              </>
            ))}
          </View>
        </View>
        {
          renderButtonWord()
        }
        {
          renderQuestion()
        }
        {
          renderInput()
        }
        {store.won && <Text className='text-3xl my-10 text-white text-center font-bold'>Chiến thắng!</Text>}
        {store.lost && <Text className='text-3xl my-10 text-white text-center font-bold'>Bạn đã thua!</Text>}
        {(store.won || store.lost) && (
          <View className='flex items-center'>
            <TouchableOpacity onPress={() => { store.init() }}>
              <View className='w-40'>
                <Text className='uppercase p-4 bg-red-700 text-center font-bold text-white'>Chơi lại</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {renderButtonSubmit()}
      </ScrollView>
    </>
  )
})
