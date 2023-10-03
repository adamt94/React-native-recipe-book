import { getCategoryByID, getRecipesByCategoryID } from "@/data/mockDataAPI";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import RecipesByCategoryScreen from "@/screens/RecipesByCategory";

export default function RecipesByCategory() {
  const { id } = useLocalSearchParams();
  const category = getCategoryByID(Number(id));
  const recipes = getRecipesByCategoryID(Number(id));
  if (category === undefined) return <>undefined ingredient</>;
  return (
    <>
      <RecipesByCategoryScreen recipes={recipes} category={category} />
    </>
  );
}
