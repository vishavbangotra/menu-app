import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {MEALS} from '../data/dummy-data'

const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <View style={styles.mealDetails}>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Text style={styles.text}>Duration: {selectedMeal.duration} minutes</Text>
            <Text style={styles.text}>Complexity: {selectedMeal.complexity}</Text>
            <Text style={styles.text}>Affordability: {selectedMeal.affordability}</Text>
        </View>
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(131, 0, 0)',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    mealDetails: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
