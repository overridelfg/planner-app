import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { checkEmail, login, logout, signIn } from "./user.actions";
import { IUser } from "@/types/auth.types";
import { getStoreLocal } from "@/utils/local-storage";

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isEmailValid: boolean;
  message: string;
}

const initialState: IInitialState = {
  user: getStoreLocal("user"),
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEmailValid: false,
  message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "success";
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "error";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "success";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload ?? "error";
      })
      .addCase(checkEmail.pending, (state) => {
        state.isLoading = true;
        state.isEmailValid = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isEmailValid = true;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(checkEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isEmailValid = false;
        state.isError = true;
        state.message = payload ?? "error";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});
