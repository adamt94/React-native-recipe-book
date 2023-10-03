import React from "react";

import { Stack, useLocalSearchParams } from "expo-router";
import RecipeScreen from "@/screens/Recipe";
import { getRecipeById } from "@/data/mockDataAPI";

export default function Recipe() {
  const { id } = useLocalSearchParams();
    
  const recipe = getRecipeById(parseInt(id as string)); 

  if(!recipe) return (<></>);

  return (
    <>
    <Stack.Screen
    options={{
      title: recipe.title,
      
    }}
  />
   <RecipeScreen recipe={recipe}/>
   </>

  );
}



