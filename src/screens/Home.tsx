import React from "react";
import {
  FlatList,
  View,
} from "react-native";
import { recipes } from "../data/data";
import { router } from "expo-router";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";
import { getCategoryName } from "@/data/mockDataAPI";

export default function HomeScreen() {

  const onPressRecipe = (item: Recipe) => {
    router.push({pathname: "(navigation)/recipe", params: { id: item.recipeId }});
  };

  const renderRecipes = ({ item }: { item: Recipe}) => (
    <RecipeCard image={item.photo_url} title={item.title} subTitle={getCategoryName(item.categoryId)} onPress={()=>onPressRecipe(item)} /> );

  return (
    <View className="w-screen bg-surface dark:bg-surfaceDark">
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
