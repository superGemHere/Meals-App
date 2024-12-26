import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const { mealId } = route.params;

  const seletedMeal = MEALS.find(meal => meal.id === mealId);

  const isMealFav = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (isMealFav) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(
    () => {
      navigation.setOptions({
        headerTitle: seletedMeal.title,
        headerRight: () => {
          return (
            <IconButton
              onPress={changeFavoriteStatusHandler}
              icon={isMealFav ? "star" : "star-outline"}
              color={"white"}
            />
          );
        }
      });
    },
    [navigation, changeFavoriteStatusHandler]
  );

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: seletedMeal.imageUrl }} />
      <Text style={styles.title}>
        {seletedMeal.title}
      </Text>
      <MealDetails
        duration={seletedMeal.duration}
        complexity={seletedMeal.complexity}
        affordability={seletedMeal.affordability}
      />
      <View style={styles.listContainerWrapper}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={seletedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={seletedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 8
  },
  listContainerWrapper: {
    alignItems: "center"
  },
  listContainer: {
    maxWidth: "80%"
  }
});
