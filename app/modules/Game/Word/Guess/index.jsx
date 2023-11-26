import {
    View,
    Text
} from "react-native";

export default function Guess({ word, guess, isGuessed, longest, offset, isFocus }) {
    const renderEmptyBoxes = (num) => {
        const guessBoxes = [];
        for (let index = 0; index < num; index++) {
            guessBoxes.push(
                <View key={index} className={`flex w-7 aspect-square items-center justify-center`}>
                </View>
            );
        }
        return guessBoxes;
    };
    return (
        <View className="px-2 mb-2 flex flex-row gap-1">
            {renderEmptyBoxes(offset)}
            {
                new Array(word.length).fill(0).map((_, i) => {
                    let bgColor = !isGuessed ? 'bg-yellow-50' : 'bg-green-300';
                    let txtColor = 'text-red-800';
                    if (isFocus) {
                        bgColor = 'bg-blue-300';
                    }
                    if (i === longest - offset) {
                        bgColor = 'bg-red-800';
                        txtColor = 'text-white';
                    }
                    return (
                        <View
                            key={i}
                            className={`flex w-7 aspect-square items-center justify-center borde font-bold uppercase ${txtColor} ${bgColor}`}
                        >
                            <Text>{guess[i]}</Text>
                        </View>
                    )
                })}
        </View>
    )
}
