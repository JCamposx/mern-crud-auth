import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

export const flashMessageSlice = createSlice({
  name: "flashMessage",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = flashMessageSlice.actions;

export default flashMessageSlice.reducer;
