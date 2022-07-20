import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import colors from '../assets/colors/colors'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const ResturantCard = ({
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lon,
    lat,
}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
     onPress={()=> navigation.navigate('ResturantScreen', {
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lon,
      lat,
     })}
     style={[{backgroundColor: colors.white, marginRight: 12, }, styles.shadow]}>
      <Image
        source={imgUrl}
        style={{height: 140, width: 250, borderRadius: 10}}
      />
      <View style={{paddingHorizontal: 12, paddingBottom: 16}}>
        <Text style={{fontWeight: 'bold', fontSize:18, paddingTop: 8}}>{title}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <StarIcon color={colors.green} opacity={0.5} size={22}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.darkGray}}>
                <Text style={{color: colors.green}}>{rating}</Text> . {genre}
            </Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 1}}>
            <LocationMarkerIcon color={colors.darkGray} size={22} opacity={0.4} />
            <Text style={{fontSize: 15, color: colors.darkGray}}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard

const styles = StyleSheet.create({
    shadow: {  
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.27,
    elevation: 10,
      }
})