import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";
import { removeFromStorage } from "../../services/auth.helper";
import {
  IAuthResponse,
  ILoginForm,
  IRegisterForm,
  IUser,
} from "@/types/auth.types";
import { AxiosError } from "axios";

const AUTH_ACTION = "auth";

export const signIn = createAsyncThunk<
  IUser,
  IRegisterForm,
  { rejectValue: string }
>(`${AUTH_ACTION}/signIn`, async (data, thunkApi) => {
  try {
    const response = await AuthService.signIn(data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk<
  IUser,
  ILoginForm,
  { rejectValue: string }
>(`${AUTH_ACTION}/login`, async (data: ILoginForm, thunkApi) => {
  try {
    const response = await AuthService.login(data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const checkEmail = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(`${AUTH_ACTION}/checkEmail`, async (data: string, thunkApi) => {
  try {
    const response = await AuthService.checkEmail(data);

    return response;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  removeFromStorage();
});
