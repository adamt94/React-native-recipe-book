import { getIngredientById, getRecipesByIngredient } from "@/data/mockDataAPI";
import IngrediantByRecipeScreen from "@/screens/IngredientsByRecipe";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function IngrediantByRecipe() {
  const { id } = useLocalSearchParams();
  const ingredient = getIngredientById(Number(id));
  const recipes = getRecipesByIngredient(Number(id));
  if (ingredient === undefined) return <Text>undefined ingredient</Text>;
  return (
    <>
      <IngrediantByRecipeScreen recipes={recipes} ingredient={ingredient} />
    </>
  );
}
