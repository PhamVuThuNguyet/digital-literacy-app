import {
    Text,
} from "react-native";

export default function Question({question}) {
    return (
        <Text className="p-4 bg-white text-center font-bold text-2xl text-red-900 mt-10">
            {question}
        </Text>
    )
}