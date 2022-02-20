import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    email: "",
  },
  token: "",
  error: null,
  userId: null,
  userName: "User",
  isRegister: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.isRegister = true;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
      state.isRegister = false;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.data.token;
      state.userId = payload.id;
      state.userName = payload.data.UserName;
      state.isRegister = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = "";
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.error = payload;
    },
    // [authOperations.googleLogin.fulfilled](state, { payload }) {
    //   state.token = payload.data.token;
    // },
    // [authOperations.googleLogin.rejected](state, { payload }) {
    //   state.error = payload;
    // },

    [authOperations.googleAuth](state, { payload }) {
      state.token = payload.token;
      state.isRegister = true;
    },
  },
});

export default authSlice.reducer;
