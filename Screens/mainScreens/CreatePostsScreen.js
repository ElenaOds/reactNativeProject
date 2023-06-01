import { 
    Text, 
    StyleSheet, 
  } from "react-native";
  
  
  const CreatePostsScreen = () => {
    return (
      <Text style={styles.title}>Create Posts Screen Page</Text>      
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
  
  export default CreatePostsScreen;