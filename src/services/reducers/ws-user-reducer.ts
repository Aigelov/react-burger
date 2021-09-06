import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
} from "../action-types";
import { IOrderStatusList } from "../../components/order-status-list/order-status-list";
import { TWsUserActions } from "../actions";

export type TWsUserState = {
  wsUserConnected: boolean;
  userOrders: IOrderStatusList[];
};

export const wsUserReducerInitialState: TWsUserState = {
  wsUserConnected: false,
  userOrders: [],
};

export const wsUserReducer = (
  state = wsUserReducerInitialState,
  action: TWsUserActions
) => {
  switch (action.type) {
    case WS_USER_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsUserConnected: true,
      };
    }
    case WS_USER_CONNECTION_ERROR: {
      return {
        ...state,
        wsUserConnected: false,
      };
    }
    case WS_USER_CONNECTION_CLOSED: {
      return {
        ...state,
        wsUserConnected: false,
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
