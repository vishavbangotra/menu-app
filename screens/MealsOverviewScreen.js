import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealTile from '../components/MealTile'
const MealsOverviewScreen = ( {route, navigation} ) => {
    const catId = route.params.categoryId;
    const title = route.params.title;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    const renderMealItem = (itemData) => {
        return (
          <MealTile
            id={itemData.item.id}
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
          />
        );
    }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({}) 