import {
  addIngredient,
  decreaseCount,
  increaseCount,
  removeIngredient,
} from "../helpers";
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  SET_ORDER_NUMBER,
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_INGREDIENT,
  UPDATE_INGREDIENTS,
} from "../actions/burger";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  selectedIngredients: [],
  selectedIngredient: {},
  orderNumber: null,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: addIngredient(
          action.ingredient,
          state.selectedIngredients
        ),
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: removeIngredient(
          action.ingredient,
          state.selectedIngredients
        ),
      };
    }
    case UPDATE_INGREDIENTS: {
      const selectedIngredients = [...state.selectedIngredients];
      selectedIngredients.splice(action.index, 1);
      selectedIngredients.splice(action.atIndex, 0, action.ingredient);

      return {
        ...state,
        selectedIngredients,
      };
    }
    case SET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: action.orderNumber,
      };
    }
    case INCREASE_COUNT: {
      return {
        ...state,
        ingredients: increaseCount(action.ingredient, state.ingredients),
      };
    }
    case DECREASE_COUNT: {
      return {
        ...state,
        ingredients: decreaseCount(action.ingredient, state.ingredients),
      };
    }
    default: {
      return state;
    }
  }
};
