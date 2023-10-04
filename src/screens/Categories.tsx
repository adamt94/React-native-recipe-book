import { getNumberOfRecipes } from "@/data/mockDataAPI";
import { Category } from "@/types/recipe";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableHighlight, View } from "react-native";

type CategoriesScreenProps = {
  categories: Category[];
};

export default function CategoriesScreen(
  { categories }: CategoriesScreenProps,
) {
  const onPressCategory = (item: Category) => {
    router.push({ pathname: "recipesByCategory", params: { id: item.id } });
  };

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableHighlight
      onPress={() => onPressCategory(item)}
    >
      <View className=" flex flex-col items-center p-2">
        <Image
          className="h-32 w-full rounded-t-3xl"
          source={{ uri: item.photo_url }}
        />
        <Text className="text-xl font-bold py-2 text-onSurface dark:text-onSurfaceDark">{item.name}</Text>
        <Text className="text-primary dark:text-primaryDark">
          {getNumberOfRecipes(item.id)} recipes
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View className="bg-surface dark:bg-surfaceDark">
      <FlatList
        data={categories}
        renderItem={renderCategory}
      />
    </View>
  );
}
