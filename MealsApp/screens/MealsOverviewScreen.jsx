import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
   const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
