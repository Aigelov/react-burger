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
} from "../actions/burger";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  selectedIngredients: [],
  selectedIngredient: {},
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
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
