import React, { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { getCategoryName, getRecipesByRecipeName } from "@/data/mockDataAPI";
import { router, useNavigation } from "expo-router";
import { Recipe } from "@/types/recipe";
import { Ionicons } from "@expo/vector-icons";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function SearchScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [data, setData] = useState<Recipe[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="flex flex-row justify-center items-center w-64 rounded-lg px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
          <Ionicons
            className="px-2"
            name="search-sharp"
            size={24}
            color="grey"
          />
          <TextInput
            className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
            onChangeText={handleSearch}
            value={value}
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
    router.push({ pathname: "recipe", params: { id: item.recipeId } });
  };

  const renderRecipes = ({ item }: { item: Recipe }) => (
    <TouchableHighlight
      className="flex m-2 justify-center items-center bg rounded-lg"
      style={{ width: SCREEN_WIDTH / 2 - 16 }}
      underlayColor={"#ccc"}
      onPress={() => onPressRecipe(item)}
    >
      <View
        style={{ width: SCREEN_WIDTH / 2 - 16 }}
        className=" flex items-center"
      >
        <Image
          className=" rounded-t-lg h-40 w-full object-fill"
          source={{ uri: item.photo_url }}
        />
        <Text className=" text-lg text-center">{item.title}</Text>
        <Text className="py-2">{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View className="w-screen">
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
