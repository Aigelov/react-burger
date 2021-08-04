import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { findAllIngredients } from "../services/ingredients";

const findAll = createAsyncThunk("ingredients/fetch-all", () =>
  findAllIngredients()
);

const initialState = {
  ingredients: [],
  loading: false,
  error: null,
};

export const ingredientsReducer = createReducer(initialState, {
  [findAll.pending]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [findAll.fulfilled]: (state, action) => {
    state.loading = false;
    state.error = null;
    state.ingredients = action.payload.data;
  },
  [findAll.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  },
});

export const ingredientsActions = {
  findAll,
};
