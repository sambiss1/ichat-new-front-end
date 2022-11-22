/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");

export const getAllContacts = createAsyncThunk("contactList/getAllUsers", async () => {
  return axios({
    method: "GET",
    url: `http://localhost:8000/api/user/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => response.data)

    .catch((error) => error);
});

export const contactListSlice = createSlice({
  name: "contactList",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getContacts: (state, action) => {
      return state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state, action) => {
        return (state = {
          ...state,
          isLoading: true,
        });
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        return (state = {
          ...state,
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        return (state = {
          isLoading: false,
          error: action.payload,
        });
      });
  },
});

export const { getContacts } = contactListSlice.actions;

export default contactListSlice;

//  extraReducers: {
//     [getAllUsers.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getAllUsers.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     },
//     [getAllUsers.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
