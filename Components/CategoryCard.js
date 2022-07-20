import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import foodimage from '../assets/images/food.jpg'
import colors from '../assets/colors/colors'
const CategoryCard = ({image, title}) => {
  return (
    <TouchableOpacity style={{marginRight: 8, position: 'relative',}}>
      <Image source={foodimage} style={{height: 80, width: 90, borderRadius: 10}} />
      <Text style={{position: 'absolute', bottom: 4, left: 4, color: colors.white, fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})