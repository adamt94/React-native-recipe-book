import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { recipes } from "../data/data";
import { router } from "expo-router";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

export default function HomeScreen() {

  const onPressRecipe = (item: Recipe) => {
    router.push({pathname: "(navigation)/recipe", params: { id: item.recipeId }});
  };

  const renderRecipes = ({ item }: { item: Recipe}) => (
    <RecipeCard recipe={item} onPress={onPressRecipe} /> );

  return (
    <View className="w-screen">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes as Recipe[]}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
