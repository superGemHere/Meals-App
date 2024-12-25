import { View, Text, FlatList } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (navigation, itemData) => {
  const pressHandler = () => {
    navigation.navigate("Meals Overview", {
      categoryId: itemData.item.id
    });
  };

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem.bind(this, navigation)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
