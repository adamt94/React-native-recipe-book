import { getCategoryName } from "@/data/mockDataAPI";
import { Recipe } from "@/types/recipe";
import React from "react";
import { TouchableHighlight, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SCREEN_WIDTH = width < height ? width : height;

type RecipeCardProps = {
  recipe: Recipe
  onPress: (item: Recipe) => void;
};

export default function RecipeCard({
  recipe,
  onPress,
}: RecipeCardProps) {
  return (
 <TouchableHighlight
    className="m-2 rounded-xl"
    underlayColor={'#ccc'}
      onPress={() => onPress(recipe)}
    >
      <View style={{width:SCREEN_WIDTH/2 - 16  }} className="flex-1 rounded-xl bg-primaryContainer dark:bg-primaryContainerDark justify-center items-center bg">
        <Image className=" rounded-t-lg h-40 w-full object-fill" source={{ uri: recipe.photo_url }} />
        <Text className=" text-lg text-center text-onPrimaryContainer dark:text-onPrimaryContainerDark">{recipe.title}</Text>
        <Text className="py-2 text-onSurface dark:text-onSurfaceDark">{getCategoryName(recipe.categoryId)}</Text>
      </View>
    </TouchableHighlight>

     );
}
