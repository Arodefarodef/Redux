import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

const redux = createSlice({
  name: "second",
  initialState,
  reducers: {
    setIndex: (state, { payload }) => {
      return (state.index = payload);
    },
  },
});

export const { setIndex } = redux.actions;

export default redux.reducer;
