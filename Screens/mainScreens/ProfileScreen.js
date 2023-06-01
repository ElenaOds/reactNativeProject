import { 
    Text, 
    StyleSheet, 
  } from "react-native";
  
  
  const ProfileScreen = () => {
    return (
      <Text style={styles.title}>Profile Screen Page</Text>      
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
  
  export default ProfileScreen;