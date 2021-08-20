import {
  CHECKOUT_ORDER_FAILURE,
  CHECKOUT_ORDER_REQUEST,
  CHECKOUT_ORDER_SUCCESS,
} from "../actions/order";

const initialState = {
  loading: false,
  error: null,
  order: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case CHECKOUT_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        order: action.data.order,
      };
    }
    case CHECKOUT_ORDER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
