import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer> 
          <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: "#179da1",
              },
              headerTitleAlign: "center",
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#86e2ee"
              }
            }
          }>
              <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                title: "All Categories",
                }}
              />
              <Stack.Screen 
                name="Meals Overview" 
                component={MealsOverviewScreen} 
                // options={({route, navigation}) => {
                //   const { categoryId } = route.params;
                //   return {
                //     title: categoryId
                //   };
                // }}
              />
              <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
