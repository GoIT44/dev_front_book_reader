import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  token,
  onSignUp,
  onLogIn,
  onLogOut,
  onGoogleIn,
} from "../../services/auth";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const googleAuth = createAction("auth/google");

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onSignUp(credentials);
      Notify.success("Вы успешно зарегистрированы!");
      return data;
    } catch (error) {
      return rejectWithValue(Notify.failure(error.response.data.message));
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onLogIn(credentials);
      token.set(data.data.token);

      return data;
    } catch (error) {
      return rejectWithValue(Notify.failure(error.response.data.message));
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await onLogOut();
      token.unset();
    } catch (error) {
      return rejectWithValue(Notify.failure(error.response.data.message));
    }
  }
);

const googleLogin = createAsyncThunk(
  "auth/google-auth",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onGoogleIn(credentials);
      token.set(data.data.token);

      return data;
    } catch (error) {
      return rejectWithValue(Notify.failure(error.response.data.message));
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  googleLogin,
  googleAuth,
};
export default authOperations;
