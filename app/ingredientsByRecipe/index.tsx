import { getIngrediantById, getRecipesByIngredient } from "@/data/mockDataAPI";
import IngrediantByRecipeScreen from "@/screens/IngrediantsByRecipe";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function IngrediantByRecipe() {
  console.log("TESTING!@£@!@!£!@£!£")
  const { id } = useLocalSearchParams();
  const ingredient = getIngrediantById(Number(id));

  const recipes = getRecipesByIngredient(Number(id));
  console.log(recipes);
  if (ingredient === undefined) return <Text>undefined ingredient</Text>;
  return (
    <>
    
      <IngrediantByRecipeScreen recipes={recipes} ingredient={ingredient} />
    </>
  );
}
