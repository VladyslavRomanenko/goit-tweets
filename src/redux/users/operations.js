import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, updateUser } from "../../service/api";

export const getUsersThunk = createAsyncThunk("users/getUsers", getUsers);
export const updateUserThunk = createAsyncThunk("users/updateUser", updateUser);
