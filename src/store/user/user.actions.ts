import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";
import { removeFromStorage } from "../../services/auth.helper";
import { ILoginForm, IRegisterForm } from "@/types/auth.types";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data: IRegisterForm, thunkApi) => {
    try {
      const response = await AuthService.signIn(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginForm, thunkApi) => {
    try {
      const response = await AuthService.login(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  removeFromStorage();
});
