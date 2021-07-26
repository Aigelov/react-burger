import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";

const findAllIngredients = async () => {
  return await new Promise(async (resolve, reject) => {
    const res = await fetch(INGREDIENTS_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      reject("ERROR network answer was not ok");
    }

    const response = await res.json();
    resolve(response);
  });
};

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
