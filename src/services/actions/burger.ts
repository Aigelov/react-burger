import { authActions } from "./auth";
import { findAllIngredients } from "../services/ingredients";
import {
  ADD_INGREDIENT,
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_INGREDIENT,
  UPDATE_INGREDIENTS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE,
  CLEAR_SELECTED_INGREDIENTS,
} from "../action-types";
import { IBurgerIngredient, IBurgerIngredientsSuccess } from "../models";
import { AppDispatch } from "../../index";
import {
  IAddIngredient,
  IDecreaseCount,
  IGetIngredientsFailure,
  IGetIngredientsRequest,
  IIncreaseCount,
  IRemoveIngredient,
  IUpdateIngredients,
} from "./burger.interface";

export const getIngredients = () => {
  const request = (): IGetIngredientsRequest => ({
    type: GET_INGREDIENTS_REQUEST,
  });
  const success = (data: IBurgerIngredient[]) => ({
    type: GET_INGREDIENTS_SUCCESS,
    data,
  });
  const failure = (error: Error): IGetIngredientsFailure => ({
    type: GET_INGREDIENTS_FAILURE,
    error,
  });

  return async (dispatch: AppDispatch) => {
    dispatch(request());

    try {
      const { data }: IBurgerIngredientsSuccess = await findAllIngredients();
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

export const addIngredient = (ingredient: IBurgerIngredient) => {
  return (dispatch: AppDispatch) => {
    const addIngredientType: IAddIngredient = {
      type: ADD_INGREDIENT,
      ingredient,
    };

    dispatch(addIngredientType);
  };
};

export const removeIngredient = (ingredient: IBurgerIngredient) => {
  return (dispatch: AppDispatch) => {
    const removeIngredientType: IRemoveIngredient = {
      type: REMOVE_INGREDIENT,
      ingredient,
    };

    dispatch(removeIngredientType);
  };
};

export const updateIngredients = (
  ingredient: IBurgerIngredient,
  index: number,
  atIndex: number
) => {
  return (dispatch: AppDispatch) => {
    const updateIngredientsType: IUpdateIngredients = {
      type: UPDATE_INGREDIENTS,
      ingredient,
      index,
      atIndex,
    };

    dispatch(updateIngredientsType);
  };
};

export const clearBurgerConstructor = () => {
  return (dispatch: AppDispatch) => {
    const clearSelectedIngredientsType = {
      type: CLEAR_SELECTED_INGREDIENTS,
    };

    dispatch(clearSelectedIngredientsType);
  };
};

export const increaseCount =
  (ingredient: IBurgerIngredient) => (dispatch: AppDispatch) => {
    const increaseCountType: IIncreaseCount = {
      type: INCREASE_COUNT,
      ingredient,
    };

    dispatch(increaseCountType);
  };

export const decreaseCount =
  (ingredient: IBurgerIngredient) => (dispatch: AppDispatch) => {
    const decreaseCountType: IDecreaseCount = {
      type: DECREASE_COUNT,
      ingredient,
    };

    dispatch(decreaseCountType);
  };
