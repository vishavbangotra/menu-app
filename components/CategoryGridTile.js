import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={{...styles.gridItem, backgroundColor: color}}>
      <Pressable style={styles.button} android_ripple={{color: 'lightgray'}}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    button: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'auto',
        fontWeight: 'bold',
    },
})
