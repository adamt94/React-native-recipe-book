import { getCategoryName } from "@/data/mockDataAPI";
import { Recipe } from "@/types/recipe";
import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SCREEN_WIDTH = width < height ? width : height;

type RecipeCardProps = {
  image: string;
  title: string;
  subTitle: string;
  onPress: () => void;
};

export default function RecipeCard({
  image,
  title,
  subTitle,
  onPress,
}: RecipeCardProps) {
  return (
    <TouchableHighlight
      className="m-2 rounded-xl"
      underlayColor={"#ccc"}
      onPress={() => onPress()}
    >
      <View
        style={{ width: SCREEN_WIDTH / 2 - 16 }}
        className="flex-1 rounded-xl bg-surfaceContainerHighest dark:bg-surfaceContainerHighestDark justify-center items-center bg"
      >
        <Image
          className=" rounded-t-lg h-40 w-full object-fill"
          source={{ uri: image }}
        />
        <View className="flex-grow flex items-center px-1 py-2 gap-2">
          <Text className="text-lg text-center text-onSurfaceVariant dark:text-onSurfaceVariantDark">
            {title}
          </Text>
          <Text className="text-onSurface dark:text-onSurfaceDark">
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
