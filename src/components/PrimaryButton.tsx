import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

type ViewIngredientsButtonProps = {
  onPress: () => void;
};

export default function ViewIngredientsButton({
  onPress,
}: ViewIngredientsButtonProps) {
  return (
    <TouchableHighlight
      className=" h-14 w-48 rounded-full bg-primaryContainer dark:bg-primaryContainerDark py-2"
      underlayColor="rgba(0,0,0,0.1)"
      onPress={onPress}
    >
      <View className="h-full w-full py-2">
        <Text className="text-center text-onPrimaryContainer dark:text-onPrimaryContainerDark">
          View Ingredients
        </Text>
      </View>
    </TouchableHighlight>
  );
}
