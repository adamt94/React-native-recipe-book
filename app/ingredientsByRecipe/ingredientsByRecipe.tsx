import { getIngrediantById, getRecipesByIngredient } from "@/data/mockDataAPI";
import IngrediantByRecipeScreen from "@/screens/IngrediantsByRecipe";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function IngediantByRecipe() {
  const { id } = useLocalSearchParams();
  const ingredient = getIngrediantById(Number(id));

  const recipes = getRecipesByIngredient(Number(id));
  console.log(recipes);
  if (ingredient === undefined) return <Text>undefined ingredient</Text>;
  return (
    <>
      <Stack.Screen
        options={{
          title: ingredient?.name,
        }}
      />
      <IngrediantByRecipeScreen recipes={recipes} ingredient={ingredient} />
    </>
  );
}
