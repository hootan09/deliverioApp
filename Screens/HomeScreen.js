import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import avatar from '../assets/images/person.png'
import colors from '../assets/colors/colors'
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../Components/Categories'
import FeaturesRow from '../Components/FeaturesRow'

import sampleData from '../assets/data/sampleData'

const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Testing"
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={{ backgroundColor: colors.white, paddingBottom: 5, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
          <Image
            source={avatar}
            style={{ width: 32, height: 32, borderRadius: 15 }}
          />
          <View>
            <Text style={{ fontWeight: '100', fontSize: 15, color:colors.darkGray, fontWeight: '400'}}>
              Deliver Now!
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: colors.black, fontSize: 18 }}>Current Location</Text>
              <ChevronDownIcon size={20} color={colors.green} style={{ alignSelf: 'center' }} />
            </View>
          </View>
        </View>
        <UserIcon size={20} color={colors.green} />
      </View>

      {/* Search */}
      <View style={{backgroundColor: colors.white,padding: 10, display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
        <View style={{backgroundColor: colors.darkGray, padding: 8, flex: 1, display: 'flex', flexDirection: 'row', alignContent:'center'}}>
          <SearchIcon size={20} color={colors.gray} style={{alignSelf: 'center', padding: 12}}/>
          <TextInput placeholder='Resturants and Caffe' placeholderTextColor={colors.gray} keyboardType='default' style={{color: colors.gray}} />
        </View>
        <AdjustmentsIcon size={20} color={colors.green} style={{alignSelf: 'center', margin: 1}} />
      </View>

      {/* Body */}
      <ScrollView>
        
        {/* Categories */}
        <Categories
          data={sampleData.category}
        />

        {/* Featured Rows */}
        <FeaturesRow 
          title="Offer Near You"
          description="Best Place Base by Location"
          data={sampleData.feature1}
        />

        {/* Tasty Discounts */}
        <FeaturesRow 
          title="Tasty Discount"
          description="Paid placements from our partners"
          data={sampleData.feature2}
        />

        {/* Offers Near You */}
        <FeaturesRow 
          title="Featured"
          description="Paid placements from our partners"
          data={sampleData.feature3}
        />

      </ScrollView>

    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    color: colors.white,
  },
})