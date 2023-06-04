import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userId: null,
  login: null,
  email: null,
  userAvatar: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
      userAvatar: payload.userAvatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authLogOut: () => initialState,
  },
});

export const { updateUserProfile, authLogOut, authStateChange } =
  authSlice.actions;

export const authReducer = authSlice.reducer;