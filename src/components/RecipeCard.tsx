import { getCategoryName } from "@/data/mockDataAPI";
import { Recipe } from "@/types/recipe";
import React from "react";
import { TouchableHighlight, Text, View, Image, Dimensions } from "react-native";

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
    underlayColor={'#ccc'}
      onPress={() => onPress()}
    >
      <View style={{width:SCREEN_WIDTH/2 - 16  }} className="flex-1 rounded-xl bg-primaryContainer dark:bg-primaryContainerDark justify-center items-center bg">
        <Image className=" rounded-t-lg h-40 w-full object-fill" source={{ uri: image }} />
        <Text className=" text-lg text-center text-onPrimaryContainer px-1 dark:text-onPrimaryContainerDark">{title}</Text>
        <Text className="py-2 text-onSurface dark:text-onSurfaceDark">{subTitle}</Text>
      </View>
    </TouchableHighlight>

     );
}
