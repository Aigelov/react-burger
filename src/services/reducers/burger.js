import {
  addIngredient,
  decreaseCount,
  increaseCount,
  removeIngredient,
} from "../helpers";
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
} from "../actions";

export const burgerReducerInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  selectedIngredients: [],
  selectedIngredient: {},
  loading: false,
  error: null,
};

export const burgerReducer = (state = burgerReducerInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        loading: false,
        error: null,
      };
    }
    case GET_INGREDIENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
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
    case CLEAR_SELECTED_INGREDIENTS: {
      const newIngredients = state.ingredients.map((item) => {
        item.count = 0;

        return item;
      });

      return {
        ...state,
        selectedIngredients: [],
        ingredients: newIngredients,
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
