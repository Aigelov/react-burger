export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

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
