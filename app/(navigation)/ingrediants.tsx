import IngredientsScreen from "@/screens/Ingredients";
import { Stack } from "expo-router";

const Ingrediants = () => (
  <>
    <Stack.Screen
      options={{
        title: "Ingredients",
      }}
    />

    <IngredientsScreen />
  </>
);

export default Ingrediants;
