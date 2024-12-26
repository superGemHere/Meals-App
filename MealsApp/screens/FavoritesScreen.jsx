import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
// import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  console.log(favoriteMealIds);

  const favoriteMeals = MEALS.filter(meal =>favoriteMealIds.includes(meal.id));
  return favoriteMeals.length > 0
    ? <MealsList items={favoriteMeals} />
    : <View style={styles.container}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4
  }
});
