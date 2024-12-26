import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleWrapper}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;
const styles = StyleSheet.create({
  subtitleWrapper: {
    borderBottomColor: "#329bbb",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#329bbb"
  }
});
