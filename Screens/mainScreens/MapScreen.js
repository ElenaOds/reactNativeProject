import { 
    View,
    Text, 
    StyleSheet, 
  } from "react-native";
  
  
  const MapScreen = () => {
    return (
        <View> 
            <Text style={styles.title}>Map Screen Page</Text>  
            </View>
        
    );
  };
    
    const styles = StyleSheet.create({
        
    
      title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        textAlign:'center',
        letterSpacing: 0.01,
        color: '#212121',
        marginBottom: 33,
      },
    });
  
  export default MapScreen;