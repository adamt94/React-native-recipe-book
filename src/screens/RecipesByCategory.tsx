import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Category, Recipe } from "@/types/recipe";
import { router } from "expo-router";
import RecipeCard from "@/components/RecipeCard";
import { getCategoryName } from "@/data/mockDataAPI";

type IngrediantByRecipeScreenProps = {
  recipes: Recipe[];
  category: Category;
};

export default function RecipesByCategory({
  recipes,
  category,
}: IngrediantByRecipeScreenProps) {
  const onPressRecipe = (item: Recipe) => {
    router.push({
      pathname: "(navigation)/recipe",
      params: { id: item.recipeId },
    });
  };

  const renderRecipes = ({ item }: { item: Recipe }) => {
    return (
      <RecipeCard
        image={item.photo_url}
        title={item.title}
        subTitle={getCategoryName(item.categoryId)}
        onPress={() => {
          onPressRecipe(item);
        }}
      />
    );
  };

  return (
    <>
      <View>
        <Image
          className="w-full h-60"
          source={{ uri: "" + category.photo_url }}
        />
      </View>
      <Text className="text-xl font-bold text-center py-2">
        {category.name}
      </Text>
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
