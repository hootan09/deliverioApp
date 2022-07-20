import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import foodImage from '../assets/images/foodSample/food.jpg'
const Categories = ({data}) => {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{paddingHorizontal: 15,paddingTop: 10}}
    >
      {data.map(item => (
        <CategoryCard
          key={item.id}
          img={item.img} 
          title={item.title}/>
      ))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})