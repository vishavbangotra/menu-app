import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = () => {
    const renderItem = (itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
  return (
    <SafeAreaView>
      <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderItem} numColumns={2}/>
    </SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})