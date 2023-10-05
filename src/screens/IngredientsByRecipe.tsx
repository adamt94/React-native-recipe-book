import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Ingredient, Recipe } from "@/types/recipe";
import { router } from "expo-router";
import RecipeCard from "@/components/RecipeCard";
import { getCategoryName } from "@/data/mockDataAPI";

type IngrediantByRecipeScreenProps = {
  recipes: Recipe[];
  ingredient: Ingredient;
};

export default function IngrediantByRecipeScreen({
  recipes,
  ingredient,
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
          source={{ uri: "" + ingredient.photo_url }}
        />
      </View>
      <Text className="text-xl text-center py-2 text-onSurface font-bold dark:text-onSurfaceDark">
        {ingredient.name}
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
