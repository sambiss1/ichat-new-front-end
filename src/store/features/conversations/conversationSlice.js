/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState: {},
  id: "",
  messages: [],
  selectedConversation: false,
  reducers: {
    getSelectedConversation: (state, action) => {
      return { ...state, id: action.payload };
    },
    selectConversation: (state, action) => {
      return { ...state, selectedConversation: true };
    },
  },
});

export const { getSelectedConversation, selectConversation } =
  conversationSlice.actions;

export default conversationSlice;
