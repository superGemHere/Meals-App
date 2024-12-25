import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer> 
          <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: "#179da1"
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#86e2ee"
              }
            }
          }>
              <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                title: "All Categories",
              }}/>
              <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
