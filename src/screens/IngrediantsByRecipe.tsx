import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { getCategoryName } from "../data/mockDataAPI";
import { Ingredient, Recipe } from "@/types/recipe";
import { router } from "expo-router";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

type IngrediantByRecipeScreenProps = {
  recipes: Recipe[];
  ingredient: Ingredient;
};

export default function IngrediantByRecipeScreen({
  recipes,
  ingredient,
}: IngrediantByRecipeScreenProps) {
  const onPressRecipe = (item: Recipe) => {
    router.push({ pathname: "recipe", params: { id: item.recipeId } });
  };

  const renderRecipes = ({ item }: { item: Recipe }) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item)}
      >
        <View
          style={{ width: SCREEN_WIDTH / 2 - 16 }}
          className="flex-1 justify-center items-center bg m-2"
        >
          <Image
            className=" rounded-t-lg h-40 w-full object-fill"
            source={{ uri: item.photo_url }}
          />
          <Text className=" text-lg text-center">{item.title}</Text>
          <Text className="py-2">{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <>
      <Text>{ingredient.name}</Text>
      <View>
        <Image
          className="w-full h-60"
          source={{ uri: "" + ingredient.photo_url }}
        />
      </View>
      <Text className="">Recipes with {ingredient.name}:</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
        />
      </View>
    </>
  );
}
