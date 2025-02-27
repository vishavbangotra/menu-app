import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

const MealTile = (meal) => {
return (
  <View style={styles.mealTile}>
    <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
      <Text style={styles.title}>{meal.title}</Text>
      <Text>{meal.duration}</Text>
      <Text>{meal.complexity}</Text>
      <Text>{meal.affordability}</Text>
    </ImageBackground>
  </View>
);
}

export default MealTile

const styles = StyleSheet.create({
    mealTile: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        overflow: 'hidden',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
})