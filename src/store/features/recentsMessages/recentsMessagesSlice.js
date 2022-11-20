/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");


export const getAllRecentsMessages = createAsyncThunk(
  "recentsMessages/getAllRecentsMessages",
  async () => {
    return axios({
      method: "GET",
      url: `http://localhost:8000/api/conversations/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.data.conversations)

      .catch((error) => error);
  }
);

export const recentsMessagesSlice = createSlice({
  name: "recentsMessages",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducer: {
    getMessages: (state, action) => {
      return state.data;
    },
  },
  extraReducers: {
    [getAllRecentsMessages.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllRecentsMessages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getAllRecentsMessages.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getMessages } = recentsMessagesSlice.actions;

export default recentsMessagesSlice;