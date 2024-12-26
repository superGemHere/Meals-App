import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const seletedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonHandler = () => {
    console.log("Mark as favorite");
  };

  useLayoutEffect(
    () => {
      navigation.setOptions({
        headerTitle: seletedMeal.title,
        headerRight: () => {
          return (
            <IconButton
              onPress={headerButtonHandler}
              icon={"star"}
              color={"white"}
            />
          );
        }
      });
    },
    [navigation, headerButtonHandler]
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
