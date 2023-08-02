import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, updateUserThunk } from "./operations";

const initialState = {
  items: [],
  page: 1,
  loading: false,
  error: null,
  filter: "all",
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
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.map((e) =>
          e.id === payload.id ? payload : e
        );
        state.loading = false;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/pending", pending))
      .addMatcher((action) => action.type.endsWith("/rejected", rejected));
  },
});

export const { updateFilter } = userSlice.actions;
export const userReducer = userSlice.reducer;
