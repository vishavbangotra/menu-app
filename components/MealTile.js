import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground, Image, Pressable } from 'react-native'

const MealTile = (meal) => {
return (
  <View style={styles.mealTile}>
    <Pressable andriod_ripple={{color: 'lightgray'}}>
      <View>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <Text>{meal.duration}</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability}</Text>
      </View>
    </Pressable>
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
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: 'rgba(255, 98, 0, 0.5)',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%',
        height: '200',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
        backgroundColor: 'rgb(131, 0, 0)',
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})