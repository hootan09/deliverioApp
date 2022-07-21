import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useSelector } from 'react-redux'
import { selectResturant } from '../features/basketSlice'
import sampleData from '../assets/data/sampleData'
const BasketScreen = ({navigation}) => {

    const {title,rating,genre,address,short_description,imgUrl} = useSelector(selectResturant);
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
                <Text style={{flex: 1, marginLeft: 10, fontSize:15,}}>Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text style={{color:colors.green}}>Change</Text>
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