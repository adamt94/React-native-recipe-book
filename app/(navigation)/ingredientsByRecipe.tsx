import { getIngredientById, getRecipesByIngredient } from "@/data/mockDataAPI";
import IngrediantByRecipeScreen from "@/screens/IngredientsByRecipe";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function IngrediantByRecipe() {
  const { id } = useLocalSearchParams();
  const ingredient = getIngredientById(Number(id));
  const recipes = getRecipesByIngredient(Number(id));
  if (ingredient === undefined) return <Text>undefined ingredient</Text>;
  return (
    <View className="bg-surface dark:bg-surfaceDark h-full">
      <Stack.Screen
        options={{
          title: "Recipes",
        }}
      />

      <IngrediantByRecipeScreen recipes={recipes} ingredient={ingredient} />
    </View>
  );
}
