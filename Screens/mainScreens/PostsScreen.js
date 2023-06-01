import { 
    View,
    Text, 
    StyleSheet, 
    TouchableOpacity
  } from "react-native";
  import Svg, { Path } from "react-native-svg";

  
  const PostScreen = () => {
    return (
        <View style={styles.header}>
             <Text style={styles.title}>Публікації</Text>  
             <TouchableOpacity>
            <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24">
            
            <Path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg> 
          </TouchableOpacity>
        </View>
        
    );
  };
    
    const styles = StyleSheet.create({
        
      header: {
        flexDirection: "row",      
        alignItems: "center",
        height: 70,
        backgroundColor: '#fff',
        padding: 10,
        borderColor:"#E8E8E8",
        borderBottomWidth:1,
        justifyContent: "flex-end",
      },
      title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        lineHeight: 22,
        textAlign:'center',
        letterSpacing: -0.408,
        color: '#212121',
        marginRight: 112,
      },
    });
  
  export default PostScreen;