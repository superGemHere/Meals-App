import React, { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";



const MealsOverviewScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(
    () => {
      const categoryTitle = CATEGORIES.find(
        category => category.id === categoryId
      ).title;

      navigation.setOptions({ title: categoryTitle });
    },
    [navigation, categoryId]
  );

  return <MealsList items={displayedMeals} navigation={navigation}/>
  
};

export default MealsOverviewScreen;

