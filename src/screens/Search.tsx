import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { getCategoryName, getRecipesByRecipeName } from "@/data/mockDataAPI";
import { useNavigation } from "expo-router";
import { Recipe } from "@/types/recipe";

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
        <View style={styles.searchContainer}>
          {
            /* <Image
             style={styles.searchIcon}
             source={require("../../../assets/icons/search.png")}
           /> */
          }
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch("")}>
            {
              /* <Image
              style={styles.searchIcon}
              source={require("../../../assets/icons/close.png")}
            /> */
            }
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  // useEffect(() => {}, [value]);
  //
  const handleSearch = (text: string) => {
    setValue(text);
    const recipes = getRecipesByRecipeName(text);

    //   var recipeArray1 = getRecipesByRecipeName(text);
    //  var recipeArray2 = getRecipesByCategoryName(text);
    // var recipeArray3 = getRecipesByIngredientName(text);
    //var aux = recipeArray1.concat(recipeArray2);
    //var recipeArray = [...new Set(aux)];
    setData(recipes);
  };

  const onPressRecipe = (item: any) => {
    // navigation.navigate("Recipe", { item });
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

const styles = StyleSheet.create({
  // container: RecipeCard.container,
  // photo: RecipeCard.photo,
  // title: RecipeCard.title,
  // category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    width: 250,
    justifyContent: "space-around",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 50,
  },
});
