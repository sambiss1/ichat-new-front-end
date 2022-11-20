/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
import { createSlice } from "@reduxjs/toolkit";

export const contactPersonSlice = createSlice({
  name: "contactPerson",
  initialState: {},
  reducers: {
    getContactPerson: (state, action) => {
     return {...state, ...action.payload}
    },
  },
});

export const { getContactPerson } = contactPersonSlice.actions;

export default contactPersonSlice;
