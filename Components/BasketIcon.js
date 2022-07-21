import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'
import colors from '../assets/colors/colors'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View style={{position: 'absolute', width: '90%', zIndex: 50, bottom: 40, marginHorizontal: '5%'  }}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 1,backgroundColor: colors.green, padding: 16, borderRadius: 8}}>
            <Text style={{color:colors.white, fontWeight: 'bold', fontSize: 25, backgroundColor: '#01A296', paddingHorizontal: 8, paddingVertical: 4}}>{items.length}</Text>
            <Text style={{flex: 1, color:colors.white, fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>View Basket</Text>
            <Text style={{fontSize:20, color:colors.white, fontWeight: 'bold'}}>
                <Currency quantity={basketTotal} currency='GBP' />
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon

const styles = StyleSheet.create({})