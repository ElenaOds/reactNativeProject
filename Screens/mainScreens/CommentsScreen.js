import React, {useState} from 'react';

import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,

} from "react-native";
import ArrowLeft from '../../components/icons/ArrowLeft';
import ArrowUp from '../../components/icons/ArrowUp';
  
  const CommentsScreen = ({navigation, route}) => {
    const [comment, setComment] = useState('');
    const [text, setText ] =  useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isKeyboardShown, setisKeyboardShown] = useState(false);

    const keyboardHide = () => {
      setisKeyboardShown(false);
      Keyboard.dismiss();
    };
  
  const photo = route.params.photo;
  
  const back = () => {
    navigation.navigate('Posts');
  };

  const createComment = async () => {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
    setText(comment);
    setComment('');
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <ArrowLeft/>
          </TouchableOpacity>
          <Text style={styles.title}>Коментарі</Text>          
        </View>

        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
      <View style={styles.wrapper}>
          <View style={styles.commentsList}>
            <View style={styles.commentsWrapper}>
              <View style={styles.avatar}>
                <Image source={require("../../assets/images/ellipse.png")}/>
              </View>
            <View style={styles.commentWrapper}>
              <Text style={styles.text}>{text}</Text>
              <Text style={styles.date}>{date} | {time}</Text>
            </View>
          </View>

          </View>

        <View style={{...styles.inputWrapper, marginBottom: isKeyboardShown ? 150 : 0}} >
          <TextInput
            style={styles.input}                    
            value={comment}
            placeholder = "Коментувати..."
            onChangeText={text => setComment(text)}
            onFocus={() => {
              setisKeyboardShown(true)}
            }
            onBlur={() => {
              setisKeyboardShown(false)}
            }
          />
          <TouchableOpacity onPress={createComment}>
            <ArrowUp/>
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

    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },

    image: {
      height: 240,
      marginBottom: 8,
      borderRadius: 8,
      marginTop: 32,
      marginBottom: 32,
      marginLeft: 16,
      marginRight: 16,
    },

    inputWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      height: 50,
      width: '100%',
      borderRadius: 100,
      marginTop: 31,
      backgroundColor: '#F6F6F6',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
      lineHeight: 19,
      color: '#BDBDBD', 
    },

    input: {
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
      lineHeight: 19,
     color: '#212121', 
    },

    commentsList: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 200,
    },

    commentsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    avatar: {
      marginRight: 16,
    },

    commentWrapper: {
      width: '88%',
      padding: 16,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderColor: '#000',
    },
    text: {
      marginBottom: 8,
      fontFamily: 'Roboto-Regular',
      fontSize: 13,
      lineHeight: 18,
      color: '#212121',
    },
    date: {
      textAlign: 'right',
      fontFamily: 'Roboto-Regular',
      fontSize: 10,
      lineHeight: 12,
      color: '#BDBDBD',
    },
  });
  
  export default CommentsScreen;