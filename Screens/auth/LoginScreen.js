import React, { useState } from "react";
import { 
  ImageBackground, 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Dimensions
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({navigation}) => {
  const [isKeyboardShown, setisKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const keyboardHide = () => {
    setisKeyboardShown(false);
    Keyboard.dismiss();
  };

  const submit = () => {
    setState(initialState);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleInputFocus = (textinput) => {
    setFocused({
      [textinput]: true
    })
  }
  const handleInputBlur = (textinput) => {
    setFocused({
      [textinput]: false
    })
  }

return (
  <TouchableWithoutFeedback 
  onPress={keyboardHide}
  >
  <View style={styles.container}
  > 
    <ImageBackground 
      style={styles.image}
      source={require('../../assets/images/photoBG.jpg')}
  >
      <View 
      style={styles.wrapper}>
        <Text style={styles.title}>Увійти</Text>
       
        <View  
       style={{
          ...styles.form,
          marginBottom: isKeyboardShown ? 150 : 0,
        }}
      >  
      
        <TextInput
          style={focused.email ? [styles.input, { borderColor: '#FF6C00',  backgroundColor: '#FFF'}] : styles.input}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
          placeholder='Адреса електронної пошти'
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => {
            handleInputFocus('email')
            setisKeyboardShown(true)}
          }
          onBlur={() => {
            handleInputBlur('email');
            setisKeyboardShown(false)}
          }
        />

      <View  
        style={focused.password ? [styles.passInput, { borderColor: '#FF6C00',  backgroundColor: '#FFF'}] : styles.passInput }
        >
        <TextInput
          secureTextEntry={showPassword}
          value={state.password}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
          maxLength={20}
          placeholder='Пароль'
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => {
            handleInputFocus('password')
            setisKeyboardShown(true) }
          }
          onBlur={() => {
            handleInputBlur('password');
            setisKeyboardShown(false)}
          }
        />

       <TouchableOpacity onPress={togglePassword}>
        {showPassword ? (
        <Text style={styles.passShow}>Показати</Text>  
        ) : (
        <Text style={styles.passShow}>Приховати</Text> 
        )}
       </TouchableOpacity>
       
        </View> 
      </View> 

      {!isKeyboardShown && (
        <>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn} 
          onPress={submit}>
          <Text style={styles.btnTitle}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}
            onPress={() => navigation.navigate('Register')}
        >
            <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
        </>
         )}
      </View>  
     
    </ImageBackground>

  </View> 
  </TouchableWithoutFeedback>
    
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  wrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 111,
    paddingLeft: 16,
  },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign:'center',
    letterSpacing: 0.01,
    color: '#212121',
    marginBottom: 33,
  },

  form: {
  width: "100%",
  },

  input: {
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    width: '100%',
    height: 50,
    padding: 16,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },

  passInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    marginBottom: 43,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    width: '100%',
    height: 50,
    padding: 16,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },

  btn: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    height: 51,
    width: '100%',
    borderRadius: 100,
  },
  btnTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },

  avatar: {
    position: 'relative',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginBottom: 32,
    marginTop: -60,
  },

  svg: {
    position: 'absolute',
    right: -12,
    bottom: 14,
  },

 passShow: {
  fontFamily: 'Roboto-Regular',
  fontSize: 16,
  lineHeight: 19,
  color: '#1B4371',
 },

});

export default LoginScreen;