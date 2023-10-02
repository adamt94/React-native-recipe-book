import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { getCategoryName } from "../data/mockDataAPI";
import { router } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import { Recipe } from "@/types/recipe";


type RecipeScreenProps = {
  recipe: Recipe;
};
export default function RecipeScreen({ recipe }: RecipeScreenProps) {
  return (
    <ScrollView className="">
      <View className="">
        <View className="">
          <Image
            className="h-64 w-full"
            source={{ uri: recipe.photosArray[0] || "" }}
          />
        </View>
      </View>
      <View className="flex flex-col items-center p-2 py-4">
        <Text className="text-2xl font-bold py-2">{recipe?.title}</Text>
        <View className="">
          <TouchableHighlight
            onPress={() => router.push({ pathname: "categories" })}
          >
            <Text className="font-bold py-2">
              {getCategoryName(recipe?.categoryId || 1).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View>
          <Text className="font-bold">{recipe?.time} minutes</Text>
        </View>

        <View className="py-4">
          <PrimaryButton
            onPress={() => {
              router.push({
                pathname: "ingrediants",
                params: { id: recipe?.recipeId },
              });
            }}
          />
        </View>
        <View className="">
          <Text className="px-2 text-sm">{recipe?.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
