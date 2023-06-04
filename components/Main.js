import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from "../router/router";
import { NavigationContainer } from '@react-navigation/native';
import { getUser } from '../redux/auth/authSelector';
import { authStateChangedUser } from '../redux/auth/authOperations';

const Main = () => {
const userDB = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangedUser());
  }, []);

  const routing = useRoute(userDB.stateChange);


    return (
        <NavigationContainer>
        {routing}
      </NavigationContainer>
    );
};  

export default Main;