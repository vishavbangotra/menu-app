import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
    const renderItem = (itemData) => {
        function pressHandler() {
          navigation.navigate("Meals Overview", {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          });
        };
    return        <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color}/>
    }
  return (
    <SafeAreaView>
      <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderItem} numColumns={2}/>
    </SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})