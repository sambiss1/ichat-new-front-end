/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

// User slice
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  info: {},
  auth: false,
  error: false,
  reducers: {
    getUser: (state, action) => {
      return state;
    },
    setUserInfo: (state, action) => {
      return {
        ...state,
        info: action.payload,
      };
    },
    setAuth: (state, action) => {
      return {
        ...state,
        auth: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export const { getUser, setUserInfo, setAuth, setError } = userSlice.actions;

export default userSlice;
