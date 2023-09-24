import React, { useLayoutEffect } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName,
} from "../data/mockDataAPI";
import { Ingredient, Recipe } from "@/types/recipe";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

type IngrediantByRecipeScreenProps = {
  recipes: Recipe[];
  ingredient: Ingredient;
};

export default function IngrediantByRecipeScreen({
  recipes,
  ingredient,
}: IngrediantByRecipeScreenProps) {
  const onPressRecipe = (item: Recipe) => {
    //navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item)}
      >
       
          <View
            style={{ width: SCREEN_WIDTH / 2 - 16 }}
            className="flex-1 justify-center items-center bg m-2"
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
  };

  return (
    <ScrollView className="">
      <View
        style={{
          borderBottomWidth: 0.4,
          marginBottom: 10,
          borderBottomColor: "grey",
        }}
      >
        <Image
          style={styles.photoIngredient}
          source={{ uri: "" + ingredient.photo_url }}
        />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredient.name}:</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 20,
  },
  photoIngredient: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  ingredientInfo: {
    color: "black",
    margin: 10,
    fontSize: 19,
    textAlign: "left",
    fontWeight: "bold",
  },
});
