/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async (content, { rejectWithValue }) => {
    return axios({
      method: "POST",
      url: `http://localhost:8000/api/message/new`,
      data: content,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.data.newMessage.messages)

      .catch(
        (error) =>
          rejectWithValue("Opps there seems to be an error")
      
    );
  }
);

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    data: [],
    isSending: false,
    error: null,
  },
  reducer: {
    getNewMessages: (state, action) => {
      return state.data;
    },
  },
  extraReducers: {
    [sendMessage.pending]: (state, action) => {
      state.isSending = true;
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.isSending = false;
      state.data = action.payload;
    },
    [sendMessage.rejected]: (state, action) => {
      state.isSending = false;
      state.error = action.payload;
    },
  },
});

export const { getNewMessages } = messageSlice.actions;

export default messageSlice;
