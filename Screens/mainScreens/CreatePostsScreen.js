import React, {useState, useEffect} from 'react';

import { 
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    Keyboard
  } from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";
import ArrowLeft from '../../components/icons/ArrowLeft';
import Photo from '../../components/icons/Photo';
import LocationIcon from '../../components/icons/Location';
import Trash from '../../components/icons/Trash';


const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [name, setName] = useState('');
  const [isKeyboardShown, setisKeyboardShown] = useState(false);


  const keyboardHide = () => {
    setisKeyboardShown(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      setLocation(location);
    })();
  }, []);

    const takePhoto = async () => {
      const photo = await camera.takePictureAsync();
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPhoto(photo.uri);
    };

    const sendPhoto = async () => {
       navigation.navigate('Posts', {photo, name, locationName, location});
    };

    const back = () => {
      navigation.navigate('Posts');
    }

    return (
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <ArrowLeft/>
          </TouchableOpacity>
          <Text style={styles.title}>Створити публікацію</Text>          
        </View>

      <View style={styles.wrapper}>

       <Camera style={styles.camera} ref={setCamera}>
       {photo && (
          <View style={styles.imageContainer}>
          <Image source={{uri: photo}} style={styles.image}/>
        </View>
        )}
        
        <TouchableOpacity onPress={takePhoto}>
          <Photo/>
        </TouchableOpacity>

       </Camera>
       {photo ? (
          <Text style={styles.text}>Редагувати фото</Text> 
          ) : (
          <Text style={styles.text}>Завантажте фото</Text> 
          )}
      
       <TextInput style={styles.input}
        placeholder='Назва...'
        placeholderTextColor={'#BDBDBD'}
        value={name}
        onChangeText={(value) =>{            
          setName(value)
        }}
        onFocus={() => {
          setisKeyboardShown(true)}
        }
        onBlur={() => {
          setisKeyboardShown(false)}
        }

        />

        <View style={styles.locationInput}>
          <LocationIcon style={{position: 'absolute', marginRight: 8}}/>
          <TextInput style={{fontFamily: 'Roboto-Regular', fontSize: 16, lineHeight: 19}}
          placeholder='Місцевість...'
          placeholderTextColor={'#BDBDBD'}
          value={locationName}
          onChangeText={(value) =>{            
          setLocationName(value)
        }}
        onFocus={() => {
          setisKeyboardShown(true)}
        }
        onBlur={() => {
          setisKeyboardShown(false)}
        }
          />
        </View>
        
        <TouchableOpacity onPress={sendPhoto} activeOpacity={0.7} 
        style={{...styles.btn, backgroundColor: photo ? '#FF6C00' : '#F6F6F6'}}>
          <Text style={{...styles.btnTitle, color: photo ? '#fff' : '#BDBDBD'}}>Опублікувати</Text>
        </TouchableOpacity>
      
          <View style={styles.trashWrapper}>
        <TouchableOpacity activeOpacity={0.7} style={styles.trash}>
          <Trash/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
    );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,    
      backgroundColor:'#FFF',
    },
    
    wrapper: {
      paddingHorizontal: 16,
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
      marginLeft: 64,
    },

    camera: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      height: 240,
      width: '100%',
      marginTop: 32,
      marginBottom: 8,
      backgroundColor: '#F6F6F6',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
    },

    text: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 19,
      color: '#BDBDBD',
      marginBottom: 33,
    },

    input: {
      marginBottom: 17,
      borderBottomWidth: 1,
      borderBottomColor: '#E8E8E8',
      paddingVertical: 15,
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 19,
    },

    locationInput: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
      borderBottomWidth: 1,
      borderBottomColor: '#E8E8E8',
      paddingVertical: 15,
    },
    btn: {
      padding: 16,
      height: 51,
      width: '100%',
      borderRadius: 100,
      marginBottom: 90,
    },
    btnTitle: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'Roboto-Regular',
    },
    
    trash: {
      alignItems: 'center', 
      justifyContent: 'center', 
      width: 70, 
      height: 40, 
      borderRadius: 20, 
      backgroundColor: '#F6F6F6',
      paddingVertical: 10,
      marginHorizontal: "auto",
    },

    trashWrapper: {
      alignItems: 'center',
    },

    image: {
      height: 240,
      width: '100%',
    },

    imageContainer: {
      position: "absolute",
      height: 240,
      width: '100%',
      borderRadius: 8,
    },
  });
  
  export default CreatePostsScreen;