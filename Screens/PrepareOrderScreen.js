import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import colors from '../assets/colors/colors'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PrepareOrderScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen")
    }, 4000);
  }, [])
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.green, justifyContent: 'center', alignItems: 'center'}}>
      <Animatable.Image
      source={require('../assets/images/loading.gif')}
      animation='slideInUp'
      iterationCount={1}
      style={{width: 150, height: 150}}
    />

    <Animatable.Text
      animation='slideInUp'
      iterationCount={1}
      style={{fontSize: 20, marginVertical: 40, color: colors.white, fontWeight: 'bold', textAlign: 'center'}}
    >
      Waiting for Resturant to accept your order!
    </Animatable.Text>

    <Progress.Circle size={60} indeterminate={true} color={colors.white} />

    </SafeAreaView>
  )
}

export default PrepareOrderScreen

const styles = StyleSheet.create({})