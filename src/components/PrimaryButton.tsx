import React from "react";
import { TouchableHighlight, Text, View } from "react-native";

type ViewIngredientsButtonProps = {
  onPress: () => void;
};

export default function ViewIngredientsButton({
  onPress,
}: ViewIngredientsButtonProps) {
  return (
    <TouchableHighlight
      className=" h-14 w-48 rounded-full bg-primaryContainer border border-primary opacity-50 py-2"
      underlayColor="rgba(73,182,77,0.9)"
      onPress={onPress}
    >
      <View className="h-full w-full py-2">
        <Text className="text-center text-primary">View Ingredients</Text>
      </View>
    </TouchableHighlight>
  );
}
