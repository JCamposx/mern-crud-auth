import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  data: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.data = action.payload.user;
      state.isAuthenticated = true;
      Cookie.set("token", action.payload.user.token);
    },
    signin: (state, action) => {
      state.data = action.payload.user;
      state.isAuthenticated = true;
      Cookie.set("token", action.payload.user.token);
    },
    logout: (state) => {
      state.data = null;
      state.isAuthenticated = false;
      Cookie.remove("token");
    },
  },
});

export const { signup, signin, logout } = userSlice.actions;

export default userSlice.reducer;
