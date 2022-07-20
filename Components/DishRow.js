import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../assets/colors/colors'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
const DishRow = ({
    id,
    name,
    description,
    price,
    image,
}) => {
    const [isPressed, setisPressed] = useState(false)
  return (
    <>
    <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        style={{backgroundColor: colors.white, padding: 12, borderWidth: 1, borderColor: colors.gray, borderBottomColor: isPressed?  colors.white : colors.darkGray, borderTopColor: colors.white}}
        >
    <View style={{display: 'flex', flexDirection: 'row', paddingRight: 8}}>
        <View style={{display: 'flex', flex: 1 }}>
            <Text style={{fontSize: 18, marginBottom: 2, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{color:colors.darkGray, fontSize: 12}}>{description}</Text>
            <Text style={{color:colors.darkGray, marginTop: 8}}>
                <Currency quantity={price} currency="GBP"/>
            </Text>
        </View>
        <View>
        <Image 
            source={image}
            style={{width: 80, height: 80, backgroundColor: colors.gray,marginTop: 5, padding:12, borderWidth: 1, borderColor: colors.darkGray}}
            />
        </View>
    </View>
    </TouchableOpacity>

    {isPressed && (
        <View style={{backgroundColor: colors.white, paddingHorizontal: 1, borderWidth: 1,borderColor: colors.white, borderBottomColor: colors.darkGray}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 1, paddingBottom: 12,}}>
                <TouchableOpacity>
                    <MinusCircleIcon color={colors.green} size={40} />
                </TouchableOpacity>

                <Text>0</Text>

                <TouchableOpacity> 
                    <PlusCircleIcon color={colors.green} size={40} />
                </TouchableOpacity>

            </View>
        </View>
    )}
    </>
  )
}

export default DishRow

const styles = StyleSheet.create({})