import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";

import { store } from "./store/redux/store";

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
        },
        drawerStyle: {
          backgroundColor: "#86e2ee",
          width: '70%',
        },
        drawerType: "slide",
        drawerActiveBackgroundColor: "#179da1",
        drawerActiveTintColor: "white",
      }
    }>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({focused, size, color}) => {
          return <Ionicons name="list" size={size} color={color} />}
      }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title: "Favorites",
        drawerIcon: ({focused, size, color}) => {
          return <Fontisto name="favorite" size={size} color={color} />}
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
                },
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
