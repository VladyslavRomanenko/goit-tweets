// export const getUsersThunk = createAsyncThunk("users/getUsers", getUsers);
// export const updateUserThunk = createAsyncThunk("users/updateUser", updateUser);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64c7bd3fa1fe0128fbd53a74.mockapi.io";

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (count, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/users", {
        params: {
          page: 1,
          limit: count,
        },
      });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async ({ id, isFollow, followers }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        isFollow,
        followers,
      });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
