import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
} from "../action-types";
import { IOrderStatusList } from "../../components/order-status-list/order-status-list";
import { TWsUserActions } from "../actions";

type TWsUserState = {
  wsUserConnected: boolean;
  userOrders: IOrderStatusList[];
};

const initialState: TWsUserState = {
  wsUserConnected: false,
  userOrders: [],
};

export const wsUserReducer = (state = initialState, action: TWsUserActions) => {
  switch (action.type) {
    case WS_USER_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_USER_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_USER_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_USER_GET_ORDER: {
      return {
        ...state,
        userOrders: state.userOrders.length
          ? [
              ...state.userOrders,
              { ...action.payload, timestamp: new Date().getTime() / 1000 },
            ]
          : [{ ...action.payload, timestamp: new Date().getTime() / 1000 }],
      };
    }
    default:
      return state;
  }
};
