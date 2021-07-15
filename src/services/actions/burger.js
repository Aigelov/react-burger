export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

export const SET_ORDER_NUMBER = "SET_ORDER_NUMBER";

export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";

const getItemsRequest = async () => {
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

export const getIngredients = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    getItemsRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
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

export const setOrderNumber = (orderNumber) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORDER_NUMBER,
      orderNumber,
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
