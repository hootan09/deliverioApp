import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../assets/colors/colors'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'

const DishRow = ({id,name,description,price,image,}) => {
    const [isPressed, setisPressed] = useState(false)

    const items = useSelector((state) => selectBasketItemsWithId(state,id))
    const dispatch = useDispatch()


    const addItemToBasket = () =>{
        dispatch(addToBasket({id,name,description,price,image}))
    }

    const removeItemFromBasket = () => {
        if(!items.length > 0 ) return;
        dispatch(removeFromBasket({id}));
    }

    console.log(items);

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
                <TouchableOpacity
                    disabled={items.length == 0}
                    onPress={removeItemFromBasket}
                >
                    <MinusCircleIcon color={items.length == 0 ? colors.gray : colors.green} size={40} />
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity
                    onPress={addItemToBasket}
                > 
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