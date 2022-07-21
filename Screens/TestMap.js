import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestMap = () => {
  return (
    <View style={styles.container}>
        <MapView
            initialRegion={{

                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        style={[{ zIndex: 0,}, styles.map]}
        mapType="mutedStandard"
        >
        </MapView>
    </View>
  )
}

export default TestMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})