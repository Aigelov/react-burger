import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDER,
  WS_USER_SEND_ORDER,
} from "../action-types";
import {
  IWsUserConnectionClosed,
  IWsUserConnectionError,
  IWsUserConnectionSuccess,
  IWsUserGetMessage,
  IWsUserSendMessage,
} from "./ws-user-actions.interface";
import { IOrder } from "./order.interface";

export const wsUserConnectionSuccess = (): IWsUserConnectionSuccess => {
  return {
    type: WS_USER_CONNECTION_SUCCESS,
  };
};

export const wsUserConnectionError = (): IWsUserConnectionError => {
  return {
    type: WS_USER_CONNECTION_ERROR,
  };
};

export const wsUserConnectionClosed = (): IWsUserConnectionClosed => {
  return {
    type: WS_USER_CONNECTION_CLOSED,
  };
};

export const wsUserGetMessage = (order: IOrder): IWsUserGetMessage => {
  return {
    type: WS_USER_GET_ORDER,
    payload: order,
  };
};

export const wsUserSendMessage = (order: IOrder): IWsUserSendMessage => {
  return {
    type: WS_USER_SEND_ORDER,
    payload: order,
  };
};
