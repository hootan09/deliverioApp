import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import colors from '../assets/colors/colors'
import ResturantCard from './ResturantCard'

const FeaturesRow = ({id,title, description}) => {
  return (
    <View>
        <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
            <ArrowRightIcon color={colors.green}/>
        </View>

        <Text style={{fontSize: 15, fontWeight: 'bold' ,color: colors.darkGray, paddingHorizontal: 4}}>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            style={{paddingTop: 16}}
        >

        {/* Resturant Card */}
        <ResturantCard
                id={123}
                imgUrl={'blahblah'}
                title='Yo! Sushi'
                rating={4.5}
                genre="japanes"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
        />
        <ResturantCard
                id={123}
                imgUrl={'blahblah'}
                title='Yo! Sushi'
                rating={4.5}
                genre="japanes"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
        />
        <ResturantCard
                id={123}
                imgUrl={'blahblah'}
                title='Yo! Sushi'
                rating={4.5}
                genre="japanes"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
        />
        <ResturantCard
                id={123}
                imgUrl={'blahblah'}
                title='Yo! Sushi'
                rating={4.5}
                genre="japanes"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
        />

        </ScrollView>
    </View>
  )
}

export default FeaturesRow

const styles = StyleSheet.create({})