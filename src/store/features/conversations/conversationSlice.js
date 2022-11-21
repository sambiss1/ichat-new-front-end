/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import axios from "axios";

const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");

// const contactPersonId = useSelector((state) => state.contactPerson._id);

export const getAConversation = createAsyncThunk(
  "conversation/getAConversation",
  async ({ rejectWithValue, getState }) => {
    const contactPersonId = getState().contactPerson._id;
    return axios({
      method: "GET",
      url: `http://localhost:8000/api/conversations/${userId}/${contactPersonId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.data.conversations.messages)
      .catch((error) => rejectWithValue("Opps there seems to be an error"));
  }
);

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {},
  id: "",
  messages: [],
  selectedConversation: false,
  isLoading: false,
  contactPerson: "",
  error: "",
  reducers: {
    getSelectedConversation: (state, action) => {
      return { ...state };
    },
    selectConversation: (state, action) => {
      return {
        ...state,
        id: action.payload,
        selectedConversation: true,
      };
    },
    getThisContactPerson: (state, action) => {
      return {
        ...state,
        contactPerson: action.payload,
      };
    },
    getMessages: (state, action) => {
      return {
        ...state,
        messages: action.payload,
      };
    },
    getAllMessages: (state, action) => {
      return state.messages;
    },
  },
  extraReducers: {
    [getAConversation.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAConversation.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // state.messages = action.payload;

      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        messages: action.payload,
      });
    },
    [getAConversation.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSelectedConversation,
  selectConversation,
  getMessages,
  getAllMessages,
  getThisContactPerson,
} = conversationSlice.actions;

export default conversationSlice;
