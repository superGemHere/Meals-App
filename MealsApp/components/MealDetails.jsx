import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetails = ({duration, complexity, affordability, additionalStyles, additionalTextStyles}) => {
  return (
    <View style={[styles.details, additionalStyles]}>
      <Text style={[styles.detailItem, additionalTextStyles]}>
        {duration}m
      </Text>
      <Text style={[styles.detailItem, additionalTextStyles]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, additionalTextStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
   details: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 8
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12
    }
});
