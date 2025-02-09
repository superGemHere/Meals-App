import { View, Text, StyleSheet } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map(dataPoint =>
    <View key={dataPoint} style={styles.listItem}>
      <Text  style={styles.itemText}>
        {dataPoint}
      </Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
   listItem: {
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 4,
      marginHorizontal: 12,
      backgroundColor: '#329bbb'
   },
   itemText: {
      color: '#fff',
      textAlign: 'center',
   }
});
