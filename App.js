import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        headerTintColor: "black",
        contentStyle: { backgroundColor: "lightgray" },
      }}>
        <Stack.Screen
          name="Meals Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            headerStyle: { backgroundColor: "lightgray" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="Meals Overview"
          component={MealsOverviewScreen}
          options={({route, navigation}) => {
            const catId = route.params.categoryId;
            const title = route.params.title;
            return {
              title: title,
              headerStyle: { backgroundColor: "lightgray" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "lightgray" },
            };
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
