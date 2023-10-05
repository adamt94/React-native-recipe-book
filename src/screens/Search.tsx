import React, { useLayoutEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { getCategoryName, getRecipesByRecipeName } from "@/data/mockDataAPI";
import { router, useNavigation } from "expo-router";
import { Recipe } from "@/types/recipe";
import { Ionicons } from "@expo/vector-icons";
import RecipeCard from "@/components/RecipeCard";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [data, setData] = useState<Recipe[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="flex flex-row justify-center items-center w-64 bg-onPrimary dark:bg-onPrimaryDark rounded-lg px-4 text-onPrimary text-sm rounded-lg block">
          <Ionicons
            className="px-2"
            name="search-sharp"
            size={24}
          />
          <TextInput
            className="text-onPrimaryContainer dark:text-onPrimaryContainerDark text-sm rounded-lg focus:border-primary block w-full p-1"
            onChangeText={handleSearch}
            value={value}
            autoFocus={true}
          />
          <Pressable onPress={() => handleSearch(value)}>
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  const handleSearch = (text: string) => {
    setValue(text);
    const recipes = getRecipesByRecipeName(text);
    setData(recipes);
  };

  const onPressRecipe = (item: Recipe) => {
    router.push({
      pathname: "(navigation)/recipe",
      params: { id: item.recipeId },
    });
  };

  const renderRecipes = ({ item }: { item: Recipe }) => (
    <RecipeCard
      image={item.photo_url}
      title={item.title}
      subTitle={getCategoryName(item.categoryId)}
      onPress={() => {
        onPressRecipe(item);
      }}
    />
  );

  return (
    <View className="w-screen bg-surface dark:bg-surfaceDark h-full">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
