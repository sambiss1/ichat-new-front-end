import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
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

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getUsers: (state, action) => {
      return state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        return (state = {
          ...state,
          isLoading: true,
        });
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        return (state = {
          ...state,
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        return (state = {
          isLoading: false,
          error: action.payload,
        });
      });
  },
});

export const { getUsers } = userSlice.actions;

export default userSlice;
