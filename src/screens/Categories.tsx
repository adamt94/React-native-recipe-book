import { getCategories, getNumberOfRecipes } from "@/data/mockDataAPI";
import { Category } from "@/types/recipe";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
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
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitleStyle: {
  //       fontWeight: "bold",
  //       textAlign: "center",
  //       alignSelf: "center",
  //       flex: 1,
  //     },
  //     headerLeft: () => (
  //       <MenuImage
  //         onPress={() => {
  //           navigation.openDrawer();
  //         }}
  //       />
  //     ),
  //     headerRight: () => <View />,
  //   });
  // }, []);

  const onPressCategory = () => {
    // const title = item.name;
    // const category = item;
    // navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }: any) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>
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
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 215,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: "100%",
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
});
