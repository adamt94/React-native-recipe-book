import { getNumberOfRecipes } from "@/data/mockDataAPI";
import { Category } from "@/types/recipe";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

type CategoriesScreenProps = {
  categories: Category[];
};

export default function CategoriesScreen(
  { categories }: CategoriesScreenProps,
) {
  
  const onPressCategory = (item: Category) => {
    // const title = item.name;
    // const category = item;
    // navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }: { item: Category}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View className=" flex flex-col items-center p-2">
        <Image
          className="h-32 w-full rounded-t-3xl"
          source={{ uri: item.photo_url }}
        />
        <Text className="text-xl font-bold py-2">{item.name}</Text>
        <Text>
          {getNumberOfRecipes(item.id)} recipes
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
      />
    </View>
  );
}


