import React, {useState, useEffect} from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    TouchableOpacity,
    FlatList,
    Image,
  } from "react-native";

import LogOut from '../../components/icons/LogOut';
import LocationIcon from '../../components/icons/Location';
import Message from '../../components/icons/Message';

const PostScreen = ({route, navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>  
        <TouchableOpacity>
          <LogOut/>
        </TouchableOpacity>
        </View>

      <View style={styles.wrapper}>
          <View style={styles.avatar}>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.name}>Наталія Романова</Text>
            <Text style={styles.email}>mail@mail.com</Text>
          </View>
        </View>
      <View style={styles.postsWrapper}>
        <FlatList 
        
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <Image source={{uri: item.photo}} style={styles.image}/>
                <Text style={styles.postsName}>{item.name}</Text>
                
                <View style={styles.postsInfo}>
                {/* <View style={styles.postsInfoWrapper}> */}
                <TouchableOpacity style={styles.postsInfoWrapper}
                  onPress={()=>navigation.navigate("CommentsScreen")}
                >
                <Message />
                <Text style={styles.postsMessage}>{item.comment ||'0'}</Text>
                </TouchableOpacity>
                {/* </View> */}
                <View style={styles.postsInfoWrapper}> 
                  <LocationIcon/>
                <Text style={styles.postsLocation}>{item.locationName}</Text>
                </View>
                </View>
              </View>
      
            )}
            />
      </View>
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
        justifyContent: "flex-end",
        padding: 16,
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

      wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 32,
      },

      avatar: {
        width: 60,
        height: 60,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        marginRight: 8,
      },

      infoWrapper: {
        display: 'flex',
        flexDirection: 'column',
      },

      name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
      },

      email: {
        fontFamily: 'Roboto-Regular',
        fontSize: 11,
        lineHeight: 13,
        color: 'rgba(33, 33, 33, 0.8)',
      },
      image: {
        height: 240,
        width: '100%',
        marginBottom: 8,
        borderRadius: 8,
      },

      postsWrapper: {
        paddingHorizontal: 16,
      },
      postsName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        marginBottom: 11,
      },

      postsInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alingItems: 'center',
        marginBottom: 34,
      },
      postsInfoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alingItems: 'center',
        justifyContent: 'center',
      },

      postsMessage: {
        marginLeft: 9,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
      },

      postsLocation: {
        marginLeft: 8,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        textDecorationLine: 'underline',
      },
    });
  
  export default PostScreen;