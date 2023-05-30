import React, {useState } from "react";
import { 
    ImageBackground, 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Keyboard, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Dimensions, 
    KeyboardAvoidingView ,
    Button
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const RegisterScreen = ({navigation}) => {
  const [isKeyboardShown, setisKeyboardShown] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
 
 
  const keyboardHide = () => {
    setisKeyboardShown(!isKeyboardShown);
    Keyboard.dismiss();
    console.log({ login, email, password });
  };
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
<TouchableWithoutFeedback onPress={keyboardHide}>
  <View style={styles.container}> 
    <ImageBackground 
      style={styles.image}
      source={require('../../assets/images/photoBG.jpg')}
    >
      <View 
        style={styles.wrapper}> 
      <View style={styles.avatar}>
          <Svg style={styles.svg}
            width={25}
            height={25}
            viewBox="0 0 25 25">
            <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"  d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00" />
          </Svg>

          <TextInput
            inlineImagePadding={0}
          />
      </View>
      <Text style={styles.title}>Регистрация</Text>

     <View  
       style={{
          ...styles.form,
          marginBottom: isKeyboardShown ? -90 : 0,
        }}
      >  
       
      <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
        <TextInput
          style={focused.login ? [styles.input, { borderColor: '#FF6C00',  backgroundColor: '#FFF'}] : styles.input}
          onChangeText={setLogin}
          value={login}
          maxLength={20}
          onFocus={() => handleInputFocus('login')}
          onBlur={() => handleInputBlur('login')}
          keyboardShow={setisKeyboardShown}
          placeholder='Логин'
          placeholderTextColor={'#BDBDBD'}
        />
         

        <TextInput
          style={focused.email ? [styles.input, { borderColor: '#FF6C00',  backgroundColor: '#FFF'}] : styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Адрес электронной почты'
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => handleInputFocus('email')}
          onBlur={() => handleInputBlur('email')}
          keyboardShow={setisKeyboardShown}
        />

        <View 
       style={focused.password ? [styles.passInput, { borderColor: '#FF6C00',  backgroundColor: '#FFF'}] : styles.passInput }
        >
        <TextInput
        label='Password'
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          value={password}
          maxLength={20}
          placeholder='Пароль'
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => handleInputFocus('password')}
          onBlur={() => handleInputBlur('password')}
          keyboardShow={setisKeyboardShown}
        />

       <TouchableOpacity onPress={togglePassword}>
        {showPassword ? (
        <Text style={styles.passShow}>Показать</Text>  
        ) : (
        <Text style={styles.passShow}>Скрыть</Text> 
        )}
       </TouchableOpacity>
       
        </View>
        </KeyboardAvoidingView>
      </View> 
   
       {!isKeyboardShown && (
        <>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn} 
          onPress={()=>setisKeyboardShown(false)}>
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.text}>Уже есть экаунт? Войти</Text>
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
    paddingBottom: 66,
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

export default RegisterScreen;
