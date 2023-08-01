import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, updateUserThunk } from "./operations";
// import { updateUser } from "../../service/api";

const initialState = {
  items: [],
  page: 0,
  loading: false,
  error: null,
};

const pending = (state) => {
  state.loading = true;
  state.error = "";
};
const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    resetPage: (state) => {
      state.page = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((el) => el.id === payload);
        state.items.splice(index, 1);
        state.loading = false;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/pending", pending))
      .addMatcher((action) => action.type.endsWith("/rejected", rejected));
  },
});

export const { nextPage, resetPage } = userSlice.actions;
export const userReducer = userSlice.reducer;
