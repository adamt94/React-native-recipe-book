import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { recipes } from "../data/data";
import { getCategoryName } from "../data/mockDataAPI";
import { router } from "expo-router";
import { Recipe } from "@/types/recipe";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function HomeScreen() {

  const onPressRecipe = (item: Recipe) => {
    router.push({pathname: "(navigation)/recipe", params: { id: item.recipeId }});
  };

  const renderRecipes = ({ item }: { item: Recipe}) => (
    <TouchableHighlight
    className="m-2 rounded-t-lg"
    underlayColor={'#ccc'}
      onPress={() => onPressRecipe(item)}
    >
      <View style={{width:SCREEN_WIDTH/2 - 16  }} className="flex-1 justify-center items-center bg">
        <Image className=" rounded-t-lg h-40 w-full object-fill" source={{ uri: item.photo_url }} />
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
        data={recipes as Recipe[]}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
