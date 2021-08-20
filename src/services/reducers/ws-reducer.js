import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
} from "../action-types";

const initialState = {
  wsConnected: false,
  orders: [],
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_GET_ORDER: {
      return {
        ...state,
        orders: state.orders.length
          ? [
              ...state.orders,
              { ...action.payload, timestamp: new Date().getTime() / 1000 },
            ]
          : [{ ...action.payload, timestamp: new Date().getTime() / 1000 }],
      };
    }
    default:
      return state;
  }
};
