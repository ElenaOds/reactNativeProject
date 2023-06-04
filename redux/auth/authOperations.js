import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
  } from 'firebase/auth';

import { auth } from '../../firebase/config';
import { updateUserProfile, authLogOut, authStateChange } from './authReducer';

export const authRegisterUser = ({ login, email, password, userAvatar  }) => async (
    dispatch,
    getState
  ) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password );
  
        const uploadedAvatar = await uploadPhotoToServer(
          userAvatar,
          'usersAvatar'
        );

        await updateProfile(auth.currentUser, {
          displayName: login,
          photoURL: uploadedAvatar,
        });
  
        const registeredUser = auth.currentUser;
  
        dispatch(
            updateUserProfile({
            userId: registeredUser.uid,
            login: registeredUser.displayName,
            email: registeredUser.email,
            userAvatar: registeredUser.photoURL,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

export const authSignInUser = ({ email, password }) =>
    async (
        dispatch, 
        getState
        ) => {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("user", user);
      } catch (error) {
        console.log(error.message);
      }
    };

    export const authStateChangedUser = () =>
    async (
        dispatch, 
        getState
        ) => {
        try {
            onAuthStateChanged (auth, user => {
            if (user) {
              const userUpdate = {
                userId: user.uid,
                login: user.displayName,
                email: user.email,
                userAvatar: user.photoURL,
              };
      
              dispatch(authStateChange({ stateChange: true }));
              dispatch(updateUserProfile(userUpdate));
            }
          });
        } catch (error) {
          console.log('error.message', error.message);
        }
      };


      export const authSignOutUser = () =>
      async (
          dispatch, 
          getState
          ) => {
        try {
          await signOut(auth);
          dispatch(authLogOut());
        } catch (error) {
          console.log('error.message', error.message);
        }
      };