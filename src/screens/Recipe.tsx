import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import {
  getCategoryName,
} from "../data/mockDataAPI";
import { router } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import { Recipe } from "@/types/recipe";

const { width: viewportWidth } = Dimensions.get("window");

type RecipeScreenProps = {
  recipe: Recipe;
}
export default function RecipeScreen({recipe}: RecipeScreenProps) {

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  const renderImage = ({ item }: any) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref as any}

            data={recipe?.photosArray ?? []}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={() => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={recipe?.photosArray.length ?? 0}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{recipe?.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              //navigation.navigate("RecipesList", { category, title })
              console.log('clicked')
            }
          >
            <Text style={styles.category}>
              {getCategoryName(recipe?.categoryId || 1).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          {/* <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/time.png")}
          /> */}
          <Text style={styles.infoRecipe}>{recipe?.time} minutes </Text>
        </View>

        <View className="py-4">
          <PrimaryButton
            onPress={() => {
              router.push({pathname: "ingrediants", params: { id: recipe?.recipeId }});
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



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,

  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});