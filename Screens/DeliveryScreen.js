import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import React from 'react'
import { selectResturant } from '../features/basketSlice'
import colors from '../assets/colors/colors'
import { XIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps'



const DeliveryScreen = ({navigation}) => {

    const resturant = useSelector(selectResturant)
    console.log(resturant);
  return (
    <View style={{backgroundColor: colors.green, flex: 1}}>
      <SafeAreaView style={{zIndex: 50}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding: 20}}>
            <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
                <XIcon color={colors.white} />
            </TouchableOpacity>
            <Text style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>Order Help</Text>
        </View>

        <View style={[{backgroundColor: colors.white, marginHorizontal: 20, marginVertical: 8, borderRadius:8, padding:24, zIndex:50, }, styles.shadow]}>
            <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color:colors.darkGray}}>Estimate Arrival</Text>
                    <Text style={{fontSize: 35, fontWeight: 'bold'}}>45-55 Minutes</Text>
                </View>
                <Image 
                    source={require('../assets/images/foodSample/delivery2.jpg')}
                    style={{width: 80, height: 80}}
                />
            </View>

            <Progress.Bar size={30} indeterminate={true} color={colors.white}/>

            <Text style={{marginTop: 12, color:colors.darkGray, fontSize: 15, fontWeight: 'bold'}}>
                Your order at {resturant.title} is being prepared
            </Text>

        </View>
      </SafeAreaView>
        <MapView
            initialRegion={{
                latitude: resturant.lat,
                longitude: resturant.lon,
                latitudeDelta: 1.0,
                longitudeDelta: 1.0,
            }}
        style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            marginTop: -40, 
            zIndex: 0}}
        mapType="mutedStandard"
        >
        </MapView>
    </View>
  )
}

export default DeliveryScreen

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