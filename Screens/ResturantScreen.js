import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import colors from '../assets/colors/colors'
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import { StarIcon } from 'react-native-heroicons/solid'

const ResturantScreen = ({navigation}) => {

  // const navigation = useNavigation()

  const {params: {
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lon,
    lat,
  }} = useRoute();

  return (
    <ScrollView style={styles.container}>
      <View style={{position: 'relative'}}>
        <Image
          source={imgUrl}
          style={{width: '100%', height: 230}}
         />
         <TouchableOpacity 
         onPress={navigation.goBack}
         style={{position: 'absolute', top: 56, left: 20, backgroundColor: colors.gray, padding: 8, backgroundColor: colors.white, borderRadius: 20}}>
          <ArrowLeftIcon size={20} color={colors.green}/>
         </TouchableOpacity>
      </View>

      <View style={{backgroundColor: colors.white}}>
        <View style={{paddingHorizontal: 16, paddingTop: 16}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginLeft: 1, marginBottom: 4}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 1 }}>
              <StarIcon size={22} color={colors.green} opacity={1.5}/>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.darkGray}}>
                <Text style={{color: colors.green}}>{rating}</Text> . {genre}
            </Text>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 4 }}>
              <LocationMarkerIcon size={22} color={colors.darkGray} opacity={1.4}/>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.gray}}>
                <Text style={{color: colors.gray}}>Nearby . {address}</Text> 
            </Text>
            </View>
          </View>

          <Text style={{color: colors.darkGray, marginTop: 8, paddingBottom: 16}}>{short_description}</Text>
        </View>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding:16, borderTopWidth: 1, borderTopColor: colors.darkGray, borderBottomWidth: 1, borderBottomColor: colors.gray}}>
          <QuestionMarkCircleIcon color={colors.gray} opacity={0.6} size={20}/>
          <Text style={{flex: 1,paddingLeft: 8, fontWeight: 'bold', fontSize: 15 }}>Have a food allergy?</Text>
          <ChevronRightIcon size={20} color={colors.green} opacity={0.7} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{paddingHorizontal: 16, paddingTop: 12, marginBottom: 12, fontSize:22, fontWeight: 'bold'}}>Menu</Text>

      {/* DishRows */}
      
      </View>

    </ScrollView>
  )
}

export default ResturantScreen

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
    flex: 1,
    // color: colors.white,
  },
})