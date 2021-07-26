import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setOrderNumber } = orderSlice.actions;

export const orderSliceReducer = orderSlice.reducer;
