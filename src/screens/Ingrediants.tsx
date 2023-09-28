import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import { getAllIngredients } from "../data/mockDataAPI";
import { Dimensions } from "react-native";
import { getRecipeById } from "@/data/mockDataAPI";
import { router, useLocalSearchParams } from "expo-router";
import { Ingredient } from "@/types/recipe";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function IngrediantsScreen() {
  const { id } = useLocalSearchParams();
  const recipe = getRecipeById(parseInt(id as string));

  const ingredientsArray = getAllIngredients(recipe?.ingredients ?? []);

  const onPressIngredient = (item: string) => {
    router.push({ pathname: "ingredientsByRecipe", params: { id: item} });
  };

  const renderIngredient = ({ item }: { item: [Ingredient] }) => {
    return (
      <TouchableHighlight
        className="m-2 rounded-t-lg"
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressIngredient(item[0].ingredientId.toString())}
      >
        <View
          style={{ width: SCREEN_WIDTH / 3 - 16 }}
          className="flex-1 justify-center items-center bg"
        >
          <Image
            className="rounded-t-lg h-32 w-full object-contain"
            source={{ uri: item[0].photo_url }}
          />
          <Text className="pt-1">{item[0].name}</Text>
          <Text className="pt-1">{item[0].name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
      />
    </View>
  );
}
