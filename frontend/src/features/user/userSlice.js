import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.data = action.payload;
      state.isAuthenticated = true;
    },
    signin: (state, action) => {
      state.data = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { signup, signin } = userSlice.actions;

export default userSlice.reducer;
