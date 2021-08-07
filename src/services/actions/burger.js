import { authActions } from "./auth";
import { findAllIngredients } from "../services/ingredients";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE = "GET_INGREDIENTS_FAILURE";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export const getIngredients = () => {
  const request = () => ({ type: GET_INGREDIENTS_REQUEST });
  const success = (data) => ({ type: GET_INGREDIENTS_SUCCESS, data });
  const failure = (error) => ({ type: GET_INGREDIENTS_FAILURE, error });

  return async (dispatch) => {
    dispatch(request());

    try {
      const { data } = await findAllIngredients();
      dispatch(success(data));
    } catch (err) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (err.message === "jwt expired" && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
        getIngredients();

        return;
      }

      dispatch(failure(err));
    }
  };
};

export const addIngredient = (ingredient) => {
  return (dispatch) => {
    dispatch({
      type: ADD_INGREDIENT,
      ingredient,
    });
  };
};

export const removeIngredient = (ingredient) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_INGREDIENT,
      ingredient,
    });
  };
};

export const updateIngredients = (ingredient, index, atIndex) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_INGREDIENTS,
      ingredient,
      index,
      atIndex,
    });
  };
};

export const increaseCount = (ingredient) => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT,
    ingredient,
  });
};

export const decreaseCount = (ingredient) => (dispatch) => {
  dispatch({
    type: DECREASE_COUNT,
    ingredient,
  });
};
