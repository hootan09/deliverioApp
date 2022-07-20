import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import foodImage from '../assets/images/food.jpg'
const Categories = () => {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{paddingHorizontal: 15,paddingTop: 10}}
    >
      <CategoryCard imgurl={foodImage} title="Testing"/>
      <CategoryCard imgurl={foodImage} title="Testing"/>
      <CategoryCard imgurl={foodImage} title="Testing"/>
      <CategoryCard imgurl={foodImage} title="Testing"/>
      <CategoryCard imgurl={foodImage} title="Testing"/>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})