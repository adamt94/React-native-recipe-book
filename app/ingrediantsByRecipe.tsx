import { getIngrediantById, getRecipesByIngredient } from '@/data/mockDataAPI';
import IngrediantByRecipeScreen from '@/screens/IngrediantsByRecipe';
import { Stack, useLocalSearchParams } from 'expo-router';


export default function IngrediantByRecipe() {
  const { id } = useLocalSearchParams();
  const ingredient = getIngrediantById(Number(id));

  const recipes = getRecipesByIngredient(Number(id));

  if(ingredient === undefined) return (<></>);
  return (
    <>
    <Stack.Screen
    options={{
      title: ingredient?.name
      
    }}
  />
   <IngrediantByRecipeScreen recipes={recipes} ingredient={ingredient}/>
   </>

  );
}
