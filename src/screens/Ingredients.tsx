import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import { getAllIngredients } from "../data/mockDataAPI";
import { Dimensions } from "react-native";
import { getRecipeById } from "@/data/mockDataAPI";
import { router, useLocalSearchParams } from "expo-router";
import { Ingredient } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

export default function IngredientsScreen() {
  const { id } = useLocalSearchParams();
  const recipe = getRecipeById(parseInt(id as string));

  const ingredientsArray = getAllIngredients(recipe?.ingredients ?? []);

  const onPressIngredient = (item: string) => {
    router.push({ pathname: "ingredientsByRecipe", params: { id: item} });
  };


  const renderIngredient = ({ item }: { item: [Ingredient] }) => {
    return (
      <RecipeCard image={item[0].photo_url} title={item[0].name} subTitle="" onPress={()=>{onPressIngredient(item[0].ingredientId.toString())}}/>   
    );
  };

  return (
    <View className="bg-surfaceHighest dark:bg-surfaceHighestDark h-full">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
      />
    </View>
  );
}
