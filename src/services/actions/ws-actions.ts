import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,
  WS_SEND_ORDER,
} from "../action-types";
import {
  IWsConnectionClosed,
  IWsConnectionError,
  IWsConnectionSuccess,
  IWsGetMessage,
  IWsSendMessage,
} from "./ws-actions.interface";
import { IOrder, IWsOrder } from "./order.interface";

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): IWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (order: IOrder): IWsGetMessage => {
  return {
    type: WS_GET_ORDER,
    payload: order,
  };
};

export const wsSendMessage = (order: IWsOrder): IWsSendMessage => {
  return {
    type: WS_SEND_ORDER,
    payload: order,
  };
};
