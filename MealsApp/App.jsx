import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#179da1",
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#86e2ee"
        }
      }
    }>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
      }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

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
                name="Drawer" 
                component={DrawerNavigator} 
                options={{
                title: "All Categorties",
                headerShown: false
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
              <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
