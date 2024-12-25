import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;

  const seletedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: seletedMeal.imageUrl }} />
      <Text style={styles.title}>
        {seletedMeal.title}
      </Text>
      <MealDetails
        duration={seletedMeal.duration}
        complexity={seletedMeal.complexity}
        affordability={seletedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {seletedMeal.ingredients.map(ingredient =>
        <Text key={ingredient}>
          {ingredient}
        </Text>
      )}
      <Text>Steps</Text>
      {seletedMeal.steps.map(step =>
        <Text key={step}>
          {step}
        </Text>
      )}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350
  },
  title: {
     textAlign: "center",
     fontWeight: "bold",
     fontSize: 24,
     margin: 8,
  }
});
