import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

import ArrowLeft from '../../components/icons/ArrowLeft';
  
const MapScreen = ({navigation, route}) => {
const latitude = route.params.location.coords.latitude;
const longitude = route.params.location.coords.longitude;
const name = route.params.name;

const back = () => {
  navigation.navigate('Posts');
}

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <ArrowLeft/>
        </TouchableOpacity>
        <Text style={styles.title}>Карта</Text>          
      </View>

    
        <MapView style={{flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}>
          <Marker 
          coordinate={{
            latitude, 
          longitude,
         }}
           title={name}/>
        </MapView>
    
  </View>
        
    );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,    
      backgroundColor:'#FFF',
    },

    header: {
      flexDirection: "row",      
      alignItems: "center",
      height: 70,
      backgroundColor: '#fff',
      borderColor:"#E8E8E8",
      borderBottomWidth: 1,
      justifyContent: "flex-start",
      padding: 16,
    },

    title: {
      fontFamily: 'Roboto-Medium',
      fontSize: 17,
      lineHeight: 22,
      textAlign:'center',
      letterSpacing: -0.408,
      color: '#212121',
      marginLeft: 109,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  
  export default MapScreen;