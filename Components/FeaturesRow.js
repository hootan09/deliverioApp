import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import colors from '../assets/colors/colors'
import ResturantCard from './ResturantCard'

const FeaturesRow = ({title, description, data}) => {
  return (
    <View>
        <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 2}}>{title}</Text>
            <ArrowRightIcon color={colors.green}/>
        </View>

        <Text style={{fontSize: 15, fontWeight: 'bold' ,color: colors.darkGray, paddingHorizontal: 4}}>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                borderRadius: 40,
            }}
            showsHorizontalScrollIndicator={false}
            style={{paddingTop: 16}}
        >

        {/* Resturant Card */}
        {data.map(item => (
            <ResturantCard
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    rating={item.rating}
                    genre={item.genre}
                    address={item.address}
                    short_description={item.short_description}
                    dishes={item.dishes}
                    lon={item.lon}
                    lat={item.lot}
            />
        ))}

        </ScrollView>
    </View>
  )
}

export default FeaturesRow

const styles = StyleSheet.create({})