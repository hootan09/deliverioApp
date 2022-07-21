import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect,useState} from 'react'
import colors from '../assets/colors/colors'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal, selectResturant } from '../features/basketSlice'
import sampleData from '../assets/data/sampleData'
import Currency from 'react-currency-formatter'

const BasketScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const {title,rating,genre,address,short_description,imgUrl} = useSelector(selectResturant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

    useEffect(() => {
      const groupItems = items.reduce((results, item) =>{
        (results[item.id] = results[item.id] || []).push(item);
        return results
      }, {})
      setGroupItemsInBasket(groupItems);
    }, [items])
    

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, backgroundColor: colors.gray}}>
            <View style={[{padding: 20, borderBottomColor: colors.green, backgroundColor: colors.white}, styles.shadow]}>
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold', textAlign:"center"}}>Basket</Text>
                    <Text style={{textAlign: 'center',color:colors.darkGray, fontSize: 15}}>{title}</Text>
                </View>

                <TouchableOpacity
                onPress={navigation.goBack}
                style={{borderRadius: 10, color: colors.white, position: 'absolute', right: 25}}
                >
                    <XCircleIcon color={colors.green} height={50} width={50} />
                </TouchableOpacity>
            </View>

            <View style={{display: 'flex', marginTop:10, alignItems: 'center',flexDirection: 'row', paddingRight: 16, paddingHorizontal:10, backgroundColor: colors.white }}>
                <Image source={sampleData.delivery} style={{height:28, width:28, backgroundColor: colors.gray, padding: 16, borderRadius: 15, marginVertical: 20}}/>
                <Text style={{flex: 1, marginLeft: 10, fontSize:20, fontWeight: '600'}}>Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text style={{color:colors.green}}>Change</Text>
                </TouchableOpacity>
            </View>

           <ScrollView style={{marginTop: 10}}>
                {Object.entries(groupItemsInBasket).map(([key,items]) => (
                    <View key={key} style={{display:'flex', flexDirection: 'row', backgroundColor: colors.white, paddingHorizontal: 20, paddingVertical: 8, alignItems: 'center', borderBottomColor: colors.darkGray, borderWidth: 1, borderTopColor: colors.white, borderRightColor: colors.white, borderLeftColor: colors.white  }}>
                        <Text style={{fontSize:15, fontWeight: 'bold', color: colors.green}}>{items.length} x </Text>
                        <Image 
                            source={items[0].image}
                            style={{width: 80, height: 80, borderRadius: 15}}
                        />
                        <Text style={{flex: 1, fontSize:15,fontWeight: 'bold', marginLeft: 5}}>{items[0].name}</Text>

                        <Text style={{color: colors.darkGray, marginRight: 8, fontSize: 15, fontWeight: 'bold'}}>
                            <Currency quantity={items[0].price} currency="GBP" />
                        </Text>

                        <TouchableOpacity
                            onPress={()=> dispatch(removeFromBasket({id: items[0].id}))}
                        >
                            <Text
                                style={{color: colors.green, fontSize: 15, fontWeight: 'bold'}}
                            >Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView> 

            <View style={{backgroundColor: colors.white, padding: 10, paddingBottom: 16}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',padding:5}}>
                    <Text style={{color:colors.darkGray}}>Subtotal</Text>
                    <Text style={{color:colors.darkGray}}>
                        <Currency quantity={basketTotal} currency="GBP" />
                    </Text>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',padding:5}}>
                    <Text style={{color:colors.darkGray}}>Delivery Fee</Text>
                    <Text style={{color:colors.darkGray}}>
                        <Currency quantity={5.99} currency="GBP" />
                    </Text>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',padding:5}}>
                    <Text style={{color:colors.black,fontSize: 15}}>Order Total</Text>
                    <Text style={{color:colors.black, fontWeight: 'bold', fontSize: 15}}>
                        <Currency quantity={basketTotal + 5.99} currency="GBP" />
                    </Text>
                </View>

                <TouchableOpacity 
                    onPress={()=> navigation.navigate('PrepareOrderScreen')}
                    style={{borderRadius:15, backgroundColor: colors.green, padding: 16 }}>
                    <Text style={{textAlign: 'center',fontWeight: 'bold', fontSize: 20, color:colors.white }}>Place Order</Text>
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        backgroundColor: colors.white
    },
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