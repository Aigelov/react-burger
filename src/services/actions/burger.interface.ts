import {
  ADD_INGREDIENT,
  CLEAR_SELECTED_INGREDIENTS,
  DECREASE_COUNT,
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INCREASE_COUNT,
  REMOVE_INGREDIENT,
  UPDATE_INGREDIENTS,
} from "../action-types";
import { IBurgerIngredient } from "../models";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: IBurgerIngredient[];
}

export interface IGetIngredientsFailure {
  readonly type: typeof GET_INGREDIENTS_FAILURE;
  readonly error: Error;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: IBurgerIngredient;
}

export interface IRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly ingredient: IBurgerIngredient;
}

export interface IUpdateIngredients {
  readonly type: typeof UPDATE_INGREDIENTS;
  readonly ingredient: IBurgerIngredient;
  readonly index: number;
  readonly atIndex: number;
}

export interface IClearSelectedIngredients {
  readonly type: typeof CLEAR_SELECTED_INGREDIENTS;
}

export interface IIncreaseCount {
  readonly type: typeof INCREASE_COUNT;
  readonly ingredient: IBurgerIngredient;
}

export interface IDecreaseCount {
  readonly type: typeof DECREASE_COUNT;
  readonly ingredient: IBurgerIngredient;
}

export type TBurgerActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailure
  | IAddIngredient
  | IRemoveIngredient
  | IUpdateIngredients
  | IClearSelectedIngredients
  | IIncreaseCount
  | IDecreaseCount;
